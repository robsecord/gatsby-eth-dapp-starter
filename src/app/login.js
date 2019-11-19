// Frameworks
import React from 'react';
import { navigate } from 'gatsby';

// Internals
import { GLOBALS } from './utils/globals';

// Wallet Interface
import Wallet from './utils/wallet';

// Login Route
function Login() {
    const wallet = Wallet.instance();

    const _walletConnect = (walletType) => async () => {
        try {
            await wallet.init(walletType);
            await wallet.connect();
            navigate(`/app/`);
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <h1>Log in</h1>
            <p><button onClick={_walletConnect(GLOBALS.WALLET_TYPE_COINBASE)}>Coinbase Walletlink</button></p>
            <p><button onClick={_walletConnect(GLOBALS.WALLET_TYPE_FORTMATIC)}>Fortmatic</button></p>
        </>
    )
}

export default Login;
