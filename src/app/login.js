// Frameworks
import React from 'react';
import { Heading, Button, Box } from 'rimble-ui';
import { Link, navigate } from 'gatsby';
import * as _ from 'lodash';

// Wallet Interface
import Wallet from './wallets';

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

    const walletButtons = _.map(Wallet.typeMap(), (walletData, walletType) => {
        const disabled = !Wallet.isEnabled(walletType);
        return (
            <Box key={walletType} mb={2}>
                <Button size="small" onClick={_walletConnect(walletType)} disabled={disabled}>{walletData.name}</Button>
            </Box>
        );
    });

    return (
        <>
            <Box mb={4}>
                <Heading as={"h3"} mb={3}>Log in</Heading>
                {walletButtons}
            </Box>

            <Box mt={3}>
                <Link to="/">Go back to the homepage</Link>
            </Box>
        </>
    )
}

export default Login;
