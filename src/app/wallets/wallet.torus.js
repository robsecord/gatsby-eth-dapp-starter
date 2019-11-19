// Frameworks
import Torus from "@toruslabs/torus-embed";
import Web3 from 'web3';

import IWalletBase from './wallet.interface';
import { GLOBALS } from '../utils/globals';

class TorusWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_TORUS, site, store);
    }

    async init({rpcUrl, chainId}) {
        const chainName = this.getChainName(chainId);

        // Initialize Torus
        this.torus = new Torus({
            buttonPosition: 'top-right'
        });
        await this.torus.init({
            buildEnv        : (chainId === '1') ? 'production' : 'development',
            enableLogging   : (chainId !== '1'),
            network : {
                host        : chainName,
            },
            showTorusButton : true, // default: true
        });

        // Initialize Base
        await super.init();
    }

    async connect() {
        await this.torus.login();
        // await this.torus.ethereum.enable();
        this.ethereum = this.torus.provider;
        this.web3 = new Web3(this.ethereum);

        await super.connect();
    }

    async disconnect() {
        // Disconnect Torus
        if (this.torus) {
            await this.torus.logout();
        }

        // Disconnect Base
        await super.disconnect();
    }
}

export default TorusWallet;
