// Frameworks
import React from 'react';
import { navigate } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

// Layout Components
import Header from './header';
import './layout.css';

// Layout Wrapper
const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const _goHome = () => { navigate(`/`) };

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} onClick={_goHome}/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
                <footer>
                    &copy; {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

export default Layout;
