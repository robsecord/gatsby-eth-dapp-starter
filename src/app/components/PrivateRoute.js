import React, { useContext, useEffect } from 'react';
import {navigate} from 'gatsby';
import {observer} from 'mobx-react-lite';

import { RootStoreContext } from '../stores/root.store';

const PrivateRoute = observer((props) => {
    const rootStore = useContext(RootStoreContext);
    const isLoggedIn = rootStore.walletStore.hasAccount;
    const {component: Component, location, ...rest} = props;

    useEffect(
        () => {
            if (!isLoggedIn && location.pathname !== `/app/login`) {
                // If the user is not logged in, redirect to the login page.
                navigate(`/app/login`);
            }
        },
        [isLoggedIn, location]
    );
    return isLoggedIn ? <Component {...rest} /> : null;
});

export default PrivateRoute;
