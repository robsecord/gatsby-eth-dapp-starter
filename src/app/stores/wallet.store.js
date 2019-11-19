import { decorate, observable, computed } from 'mobx';
import { isEmpty } from 'lodash';

class WalletStore {
    defaultAddress = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    get hasAccount() {
        console.log('hasAccount', !isEmpty(this.defaultAddress));
        return !isEmpty(this.defaultAddress)
    }
}
decorate(WalletStore, {
    defaultAddress: observable,
    hasAccount: computed
});

export default WalletStore;
