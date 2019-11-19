import { isEmpty } from 'lodash';
import { GLOBALS } from '../utils/globals';
import CoinbaseWallet from './wallet.coinbase';
import FortmaticWallet from './wallet.fortmatic';

class Wallet {
    constructor() {
        this.type = null;
        this.site = null;
        this.store = null;
    }

    static instance() {
        if (!Wallet.__instance) {
            Wallet.__instance = new Wallet();
        }
        return Wallet.__instance;
    }

    async prepare({site, store}) {
        this.site = site;
        this.store = store;
    }

    async init(type = GLOBALS.WALLET_TYPE_COINBASE) {
        if (isEmpty(this.site)) {
            throw new Error('Error: Wallet has not been prepared before initializing!');
        }
        if (type === this.type) { return; }

        this.type = type;
        if (this.type === GLOBALS.WALLET_TYPE_COINBASE) {
            this.wallet = new CoinbaseWallet(this.site, this.store);
        }
        if (this.type === GLOBALS.WALLET_TYPE_FORTMATIC) {
            this.wallet = new FortmaticWallet(this.site, this.store);
        }
        this.wallet.init(this._getEnv());
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
