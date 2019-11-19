// Frameworks
import React, { useContext } from 'react';
import {navigate} from 'gatsby';

// Wallet Interface
import Wallet from './utils/wallet';

// Data Store
import { RootStoreContext } from './stores/root.store';

// Main Route
function Main() {
    const rootStore = useContext(RootStoreContext);
    const { walletStore } = rootStore;

    const _logout = () => {
        const wallet = Wallet.instance();
        wallet.disconnect();
        navigate(`/app/login`);
    };

    return (
        <>
            <h1>Your Main App</h1>
            <ul>
                <li>Wallet Address: {walletStore.defaultAddress}</li>
            </ul>
            <button onClick={_logout}>log out</button>
        </>
    );
}

export default Main;
