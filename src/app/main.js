// Frameworks
import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { Heading, Blockie, EthAddress, Button, Text, Box } from 'rimble-ui';

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
            <Heading as={"h3"}>
                <Blockie
                    opts={{
                        seed: walletStore.defaultAddress,
                        color: `#${walletStore.defaultAddress.slice(2, 8)}`,
                        bgcolor: `#${walletStore.defaultAddress.slice(-6)}`,
                        size: 15,
                        scale: 3,
                        spotcolor: '#000'
                    }}
                />
                &nbsp;&nbsp;Main App
                &nbsp;&nbsp;<small>(using {Wallet.getName(walletStore.type)})</small>
            </Heading>

            <Box mt={20}>
                <Text>
                    <EthAddress address={walletStore.defaultAddress} />
                </Text>
            </Box>

            <Box mt={40}>
                <Text.p>
                    <Button onClick={_logout}>log out</Button>
                </Text.p>
            </Box>
        </>
    );
}

export default Main;
