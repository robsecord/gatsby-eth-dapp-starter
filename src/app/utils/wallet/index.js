import { isEmpty } from 'lodash';
import CoinbaseWallet from './wallet.coinbase';

class Wallet {
    constructor() {
        this.type = null;
        this.autoConnect = true;
    }

    static instance() {
        if (!Wallet.__instance) {
            Wallet.__instance = new Wallet();
        }
        return Wallet.__instance;
    }

    async init({type = 'coinbase', site, store}) {
        if (type === this.type) { return; }

        this.type = type;
        if (this.type === 'coinbase') {
            this.wallet = new CoinbaseWallet(site, store);
        }
        this.wallet.init(this._getEnv());

        if (this.autoConnect) {
            await this.connect();
        }
    }

    async connect() {
        await this.wallet.connect();
    }

    disconnect() {
        this.wallet.disconnect();
    }

    _getEnv() {
        const rpcUrl = process.env.GATSBY_ETH_JSONRPC_URL;
        const chainId = process.env.GATSBY_ETH_CHAIN_ID;
        if (isEmpty(rpcUrl)) {
            console.error('Invalid RPC-URL.  Make sure you have set the correct ENV VARs to connect to Web3; ("GATSBY_ETH_JSONRPC_URL").');
        }
        if (isEmpty(chainId)) {
            console.error('Invalid Chain-ID.  Make sure you have set the correct ENV VARs to connect to Web3; ("GATSBY_ETH_CHAIN_ID").');
        }
        return {rpcUrl, chainId};
    }
}
Wallet.__instance = null;

export default Wallet;
