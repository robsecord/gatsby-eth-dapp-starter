// Frameworks
import WalletLink from 'walletlink';
import Web3 from 'web3';
import * as _ from 'lodash';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class CoinbaseWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_COINBASE, site, store);
    }

    async init({rpcUrl, chainId}) {
        // Initialize WalletLink
        this.walletLink = new WalletLink({
            appName: this.site.title,
            appLogoUrl: this.site.logoUrl
        });

        // Initialize a Web3 Provider object
        this.provider = this.walletLink.makeWeb3Provider(rpcUrl, chainId);

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);

        // Initialize Base
        await super.init();
    }

    async disconnect() {
        // Clear Local-Storage
        _.forEach([localStorage, sessionStorage], (store) => {
            _.forIn(store, (value, objKey) => {
                if (true === _.startsWith(objKey, '__WalletLink__')) {
                    store.removeItem(objKey);
                }
            });
        });

        // Disconnect Base
        await super.disconnect();
    }
}

export default CoinbaseWallet;
