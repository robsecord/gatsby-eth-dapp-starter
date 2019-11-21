// Frameworks
import { Bitski } from 'bitski';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class BitskiWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_BITSKI, site, store);
    }

    async init({rpcUrl, chainId, options}) {
        // Initialize Bitski
        this.bitski = new Bitski(process.env.GATSBY_BITSKI_CLIENT_ID, options.appCallbackUrl);

        // Initialize a Web3 Provider object
        this.provider = this.bitski.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);
    }

    async connect() {
        await this.bitski.signIn();
        const accounts = await this.web3.eth.getAccounts();
        this.changeUserAccount(accounts);
    }
}

export default BitskiWallet;
