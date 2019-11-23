// Frameworks
import Portis from '@portis/web3';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class PortisWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_PORTIS, site, store);
    }

    async init({rpcUrl, chainId}) {
        const chainName = this.getChainName(chainId);

        // Initialize Portis
        this.portis = new Portis(process.env.GATSBY_PORTIS_DAPP_ID, chainName);

        // Initialize a Web3 Provider object
        this.provider = this.portis.provider;

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);

        this.hookCustomEvents();

        // Initialize Base
        await super.init();
    }

    async disconnect() {
        // Disconnect Portis
        if (this.portis) {
            this.portis.logout();
        }

        // Disconnect Base
        await super.disconnect();
    }

    hookCustomEvents() {
        this.portis.onLogout(async () => {
            await super.disconnect();
        });

        this.portis.onActiveWalletChanged(account => {
            this.changeUserAccount([account]);
        });

        this.portis.onError(err => {
            console.error(err);
        });
    }
}

export default PortisWallet;
