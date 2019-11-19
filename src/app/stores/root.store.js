import { createContext } from 'react';

import WalletStore from './wallet.store';

class RootStore {
    walletStore = new WalletStore(this);
}

export const RootStoreContext = createContext(new RootStore());
