// Frameworks
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class NativeWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_NATIVE, site, store);
    }

    static isEnabled() {
        const isModern = !!window.ethereum;
        const isLegacy = (typeof window.web3 !== 'undefined');
        return (isModern || isLegacy) && !window.web3.currentProvider.isMetaMask;
    }

    async init({rpcUrl, chainId}) {
        // Detect Injected Web3
        if (!NativeWallet.isEnabled()) {
            throw new Error('Error: Web3 is not installed on this browser!');
        }

        // Initialize a Web3 Provider object
        this.provider = window.ethereum || window.web3.currentProvider;

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);

        // Initialize Base
        await super.init();
    }
}

export default NativeWallet;
