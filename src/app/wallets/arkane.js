// Frameworks
import { ArkaneConnect } from '@arkane-network/arkane-connect';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class ArkaneWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_ARKANE, site, store);
    }

    async init({rpcUrl, chainId, options}) {
        // Initialize Arkane Network
        this.arkaneConnect = new ArkaneConnect(process.env.GATSBY_ARKANE_CLIENT_ID);
    }

    async connect() {
        const account = await this.arkaneConnect.flows.getAccount('ETHEREUM');
        if (account.isAuthenticated) {
            this.changeUserAccount(account.wallets);
        }
    }
}

export default ArkaneWallet;
