// Frameworks
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

import IWalletBase from './wallet.interface';
import { GLOBALS } from '../utils/globals';

class FortmaticWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_FORTMATIC, site, store);
    }

    async init({rpcUrl, chainId}) {
        // Initialize Fortmatic
        this.fortmatic = new Fortmatic(process.env.GATSBY_FORTMATIC_APIKEY);

        // Initialize a Web3 Provider object
        this.ethereum = this.fortmatic.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.ethereum);

        // Initialize Base
        await super.init();
    }

    async disconnect() {
        // Disconnect Fortmatic
        if (this.fortmatic) {
            this.fortmatic.user.logout();
        }

        // Disconnect Base
        await super.disconnect();
    }
}

export default FortmaticWallet;
