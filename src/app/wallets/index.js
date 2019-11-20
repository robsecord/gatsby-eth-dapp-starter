// Frameworks
import * as _ from 'lodash';

// Internals
import { GLOBALS } from '../utils/globals';

// Wallets
import CoinbaseWallet from './coinbase';
import FortmaticWallet from './fortmatic';
import TorusWallet from './torus';
import PortisWallet from './portis';
import WalletConnectWallet from './walletconnect';
import MetamaskWallet from './metamask';
import NativeWallet from './native';


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

    static isEnabled(type) {
        return (Wallet.typeMap()[type]).isEnabled();
    }

    async init(type = GLOBALS.WALLET_TYPE_COINBASE) {
        if (_.isEmpty(this.site)) {
            throw new Error('Error: Wallet has not been prepared before initializing!');
        }
        if (type === this.type) { return; }
        this.type = type;

        const walletClass = Wallet.typeMap()[type];
        this.wallet = new walletClass(this.site, this.store);
        await this.wallet.init(Wallet._getEnv());
    }

    async connect() {
        await this.wallet.connect();
    }

    async disconnect() {
        await this.wallet.disconnect();
    }

    static typeMap() {
        return {
            [GLOBALS.WALLET_TYPE_COINBASE]      : CoinbaseWallet,
            [GLOBALS.WALLET_TYPE_FORTMATIC]     : FortmaticWallet,
            [GLOBALS.WALLET_TYPE_TORUS]         : TorusWallet,
            [GLOBALS.WALLET_TYPE_PORTIS]        : PortisWallet,
            [GLOBALS.WALLET_TYPE_WALLETCONNECT] : WalletConnectWallet,
            [GLOBALS.WALLET_TYPE_METAMASK]      : MetamaskWallet,
            [GLOBALS.WALLET_TYPE_NATIVE]        : NativeWallet,
        };
    }

    static _getEnv() {
        const rpcUrl = process.env.GATSBY_ETH_JSONRPC_URL;
        const chainId = process.env.GATSBY_ETH_CHAIN_ID;
        if (_.isEmpty(rpcUrl)) {
            console.error('Invalid RPC-URL.  Make sure you have set the correct ENV VARs to connect to Web3; ("GATSBY_ETH_JSONRPC_URL").');
        }
        if (_.isEmpty(chainId)) {
            console.error('Invalid Chain-ID.  Make sure you have set the correct ENV VARs to connect to Web3; ("GATSBY_ETH_CHAIN_ID").');
        }
        return {rpcUrl, chainId};
    }
}
Wallet.__instance = null;

export default Wallet;
