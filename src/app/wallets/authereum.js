// Frameworks
import Authereum from 'authereum';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class AuthereumWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_AUTHEREUM, site, store);
    }

    async init({rpcUrl, chainId}) {
        // Initialize Authereum
        this.authereum = new Authereum('kovan');

        // Initialize a Web3 Provider object
        this.provider = this.authereum.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);
    }

    async connect() {
        const accounts = await this.provider.enable();
        console.log('authereum accounts 1', accounts);

        const accounts2 = this.authereum.getAccountAddress();
        console.log('authereum accounts 2', accounts2);

        this.changeUserAccount(accounts);
    }
}

export default AuthereumWallet;
