// Frameworks
import WalletLink from 'walletlink';
import Web3 from 'web3';
import * as _ from 'lodash';

class CoinbaseWallet {
    constructor(site, walletStore) {
        this.site = site;
        this.walletStore = walletStore;

        this.web3 = null;
        this.ethereum = null;
    }

    init({rpcUrl, chainId}) {
        // Initialize WalletLink
        this.walletLink = new WalletLink({
            appName: this.site.title,
            appLogoUrl: this.site.logoUrl
        });

        // Initialize a Web3 Provider object
        this.ethereum = this.walletLink.makeWeb3Provider(rpcUrl, chainId);

        // Initialize a Web3 object
        this.web3 = new Web3(this.ethereum);

        // Get Default Account if already Connected
        this._changeUserAccount(this.web3.eth.accounts);
        this._hookEvents();
    }

    async connect() {
        const accounts = await this.ethereum.enable(); // send("eth_requestAccounts");
        this._changeUserAccount(accounts);
    }

    disconnect() {
        // if (this.walletLink) {
        //     this.walletLink.disconnect();
        // }

        // Clear Account
        this.walletStore.defaultAddress = '';

        // Clear Local-Storage
        _.forEach([localStorage, sessionStorage], (store) => {
            _.forIn(store, (value, objKey) => {
                if (true === _.startsWith(objKey, '__WalletLink__')) {
                    store.removeItem(objKey);
                }
            });
        });
    }

    _hookEvents() {
        this.ethereum.on('accountsChanged', (accounts) => {
            this._changeUserAccount(accounts);
        });
    }

    _changeUserAccount(accounts = []) {
        if (_.isEmpty(accounts)) { return; }
        this.walletStore.defaultAddress = _.get(accounts, '0', '');
        console.log(`User's address changed to "${this.walletStore.defaultAddress}".`);
    }
}

export default CoinbaseWallet;
