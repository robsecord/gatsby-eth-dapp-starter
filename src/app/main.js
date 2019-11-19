// Frameworks
import React, { useContext } from 'react';
import { navigate } from 'gatsby';

// Wallet Interface
import Wallet from './wallets';

// Data Store
import { RootStoreContext } from './stores/root.store';

// Main Route
function Main() {
    const rootStore = useContext(RootStoreContext);
    const { walletStore } = rootStore;

    const _logout = async () => {
        await Wallet.instance().disconnect();
        navigate(`/app/login`);
    };

    return (
        <>
            <h1>Your Main App</h1>
            <ul>
                <li>Wallet Type: {walletStore.type}</li>
                <li>Wallet Address: {walletStore.defaultAddress}</li>
            </ul>
            <button onClick={_logout}>log out</button>
        </>
    );
}

export default Main;
