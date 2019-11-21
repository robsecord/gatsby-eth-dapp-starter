// Frameworks
import Squarelink from 'squarelink';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class SquareLinkWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_SQUARELINK, site, store);
    }

    async init({rpcUrl, chainId, options}) {
        // Initialize SquareLink
        this.sqlk = new Squarelink(process.env.GATSBY_SQUARELINK_DAPP_ID);

        // Initialize a Web3 Provider object
        this.provider = await this._getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);
    }

    async connect() {
        const accounts = await this.web3.eth.getAccounts();
        this.changeUserAccount(accounts);
    }

    _getProvider() {
        return new Promise(resolve => {
            this.sqlk.getProvider(resolve);
        });
    }
}

export default SquareLinkWallet;
