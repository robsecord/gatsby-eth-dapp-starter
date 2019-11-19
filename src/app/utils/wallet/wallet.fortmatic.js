// Frameworks
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

import IWalletBase from './wallet.interface';
import { GLOBALS } from '../globals';

class FortmaticWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_FORTMATIC, site, store);
    }

    init({rpcUrl, chainId}) {
        // Initialize Fortmatic
        const chainName = this.getChainName(chainId);
        this.fortmatic = new Fortmatic(process.env.GATSBY_FORTMATIC_APIKEY, chainName);

        // Initialize a Web3 Provider object
        this.ethereum = this.fortmatic.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.ethereum);

        // Hook Custom Events
        this.hookEvents();

        // Initialize Base
        super.init();
    }

    disconnect() {
        // Disconnect Fortmatic
        if (this.fortmatic) {
            this.fortmatic.user.logout();
        }

        // Disconnect Base
        super.disconnect();
    }

    hookEvents() {

    }
}

export default FortmaticWallet;
