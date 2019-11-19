import { decorate, observable, computed } from 'mobx';
import * as _ from 'lodash';

class WalletStore {
    type = '';
    defaultAddress = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    get hasAccount() {
        return !_.isEmpty(this.defaultAddress)
    }
}
decorate(WalletStore, {
    defaultAddress: observable,
    hasAccount: computed
});

export default WalletStore;
