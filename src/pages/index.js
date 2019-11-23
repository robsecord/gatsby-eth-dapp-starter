// Frameworks
import React from 'react';
import { Link } from 'gatsby';

// Layout Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Static Route
const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

            <div>
                <p>Welcome to your new Gatsby site</p>
                <ul>
                    <li>
                        This site has statically generated marketing pages like this one
                        and <Link to="/page-2/">page 2.</Link>
                    </li>
                    <li> It also has a dynamically generated client-side app with Web3 Authentication:
                        <ul>
                            <li>
                                <Link to="/app/">
                                    <b>Go to App</b>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default IndexPage;
