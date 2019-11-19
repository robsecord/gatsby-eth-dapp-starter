import React, { useContext, useEffect } from 'react';
import {navigate} from 'gatsby';
import {observer} from 'mobx-react-lite';

import { RootStoreContext } from '../stores/root.store';

const PublicRoute = observer((props) => {
    const rootStore = useContext(RootStoreContext);
    const isLoggedIn = rootStore.walletStore.hasAccount;
    const {location} = props;

    useEffect(
        () => {
            if (isLoggedIn && location.pathname === `/app/login`) {
                // If the user is logged in, redirect to the main page.
                navigate(`/app/`);
            }
        },
        [isLoggedIn, location]
    );
    return <>{props.children}</>;
});

export default PublicRoute;
