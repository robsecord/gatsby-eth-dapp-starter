// Frameworks
import { Connect } from 'uport-connect';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class UportWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_UPORT, site, store);
    }

    async init({rpcUrl, chainId}) {
        const chainName = this.getChainName(chainId);

        // Initialize Uport
        this.uport = new Connect(process.env.GATSBY_UPORT_DAPP_NAME, {network: chainName});

        // Initialize a Web3 Provider object
        this.provider = this.uport.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);
    }

    async connect() {
        this.uport.requestDisclosure();
        this.uport.onResponse('disclosureReq').then(res => {
            const did = res.payload.did;
            console.log('disclosureReq', did);

            const json = JSON.stringify(res.payload);
            console.log(json);
        });
    }

    async disconnect() {
        // Logout of Uport
        if (this.uport) {
            this.uport.logout();
        }

        // Disconnect Base
        await super.disconnect();
    }
}

export default UportWallet;
