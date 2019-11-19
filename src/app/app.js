// Frameworks
import React, { useContext }  from 'react';
import { Router } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// Layout Management
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Layout from '../components/layout';

// Route Templates
import Profile from './profile';
import Main from './main';
import Login from './login';

// Wallet Interface
import Wallet from './wallets';

// Data Store
import { RootStoreContext } from './stores/root.store';

// Dynamic Application Wrapper
const App = (props) => {
    const rootStore = useContext(RootStoreContext);
    const siteData = useStaticQuery(graphql`
        query SiteDataQuery {
            site {
                siteMetadata {
                    title
                    logoUrl
                }
            }
        }
    `);

    // Prepare Wallet Interface
    const wallet = Wallet.instance();
    wallet.prepare({store: rootStore.walletStore, site: siteData.site.siteMetadata})
        .catch(err => { console.log(err); });

    // Primary App Layout + Router
    return (
        <Layout>
            <Router>
                <PublicRoute path="/app">
                    <PrivateRoute path="/" component={Main}/>
                    <Login path="/login"/>
                </PublicRoute>

                <PrivateRoute path="/app/profile" component={Profile}/>
            </Router>
        </Layout>
    )
};

export default App;
