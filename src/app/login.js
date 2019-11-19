// Frameworks
import React, { useContext } from 'react';
import {navigate} from 'gatsby';

// Wallet Interface
import Wallet from './utils/wallet';

// Data Store
import { RootStoreContext } from './stores/root.store';

// Login Route
function Login() {
    const rootStore = useContext(RootStoreContext);
    const wallet = Wallet.instance();

    const _walletConnect = (walletType) => () => {
        wallet.connect({store: rootStore.walletStore, type: walletType})
            .then(() => { navigate(`/app/`) })
            .catch(console.log);
    };

    return (
        <>
            <h1>Log in</h1>
            <button onClick={_walletConnect('coinbase')}>Coinbase Walletlink</button>
        </>
    )
}

export default Login;
