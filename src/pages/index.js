// Frameworks
import React from 'react';
import { Link } from 'gatsby';
import { Heading, Button, Text, Box } from 'rimble-ui';

// Layout Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Static Route
const IndexPage = () => {
    const githubRepo = 'https://github.com/robsecord/gatsby-eth-dapp-starter';

    const _openLink = (linkUrl) => () => {
        window.open(linkUrl);
    };

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

            <Heading as={"h2"}>
                Welcome to your new Gatsby site
            </Heading>
            <Box mt={4}>
                <Text.p>
                    This site has statically generated marketing pages like this one
                    and <Link to="/page-2/">Page 2.</Link>
                </Text.p>
                <Text.p>
                    It also has a dynamically generated client-side app with <b>Web3 Authentication</b>:
                </Text.p>
                <Text.p>
                    <Button size="small" as="a" href="/app/">Ethereum Dapp</Button>
                </Text.p>
            </Box>
            <hr/>

            <Box mt={4}>
                <Text.p>
                    <Button size="small" onClick={_openLink(githubRepo)}>Github Repo</Button>&nbsp;&nbsp;--&nbsp;&nbsp;<small><b>{githubRepo}</b></small>
                </Text.p>
            </Box>
            <hr/>

            <Heading as={"h3"}>
                Account Management Integrations
            </Heading>
            <Box mt={3}>
                <ul className="clean-list">
                    <li>
                        QR-Connected Wallets
                        <ul>
                            <li>Coinbase WalletLink</li>
                            <li>Wallet Connect</li>
                        </ul>
                    </li>
                    <li>
                        Hosted Wallets
                        <ul>
                            <li>Fortmatic</li>
                            <li>Torus</li>
                            <li>Portis</li>
                            <li>Uport</li>
                            <li>Authereum</li>
                            <li>Bitski</li>
                            <li>SquareLink</li>
                            <li>Arkane Network</li>
                        </ul>
                    </li>
                    <li>
                        Browser Wallets
                        <ul>
                            <li>MetaMask</li>
                            <li>Native (Brave, Opera, Toshi, Cipher, Status, etc..)</li>
                        </ul>
                    </li>
                    <li>
                        Hardware Wallets
                        <ul>
                            <li><del>Ledger</del> &nbsp; <mark>(todo)</mark></li>
                            <li><del>Trezor</del> &nbsp; <mark>(todo)</mark></li>
                        </ul>
                    </li>
                </ul>
            </Box>

            <Heading as={"h3"}>
                Blockchain Related Integrations
            </Heading>
            <Box>
                <ul className="clean-list">
                    <li>
                        Event Streaming &amp; Notifications
                        <ul>
                            <li><del>dfuse.io</del> &nbsp; <mark>(todo)</mark></li>
                        </ul>
                    </li>
                    <li>
                        Design Components
                        <ul>
                            <li>Rimble UI</li>
                        </ul>
                    </li>
                </ul>
            </Box>


            <Heading as={"h3"}>
                Other Integrations
            </Heading>
            <Box>
                <ul className="clean-list">
                    <li>
                        Gatsby Plugins
                        <ul>
                            <li>gatsby-plugin-react-helmet</li>
                            <li>gatsby-plugin-create-client-paths</li>
                            <li>gatsby-source-filesystem</li>
                            <li>gatsby-transformer-sharp</li>
                            <li>gatsby-plugin-sharp</li>
                            <li>gatsby-plugin-manifest</li>
                            <li>gatsby-plugin-lodash</li>
                            <li>gatsby-plugin-netlify</li>
                            <li>gatsby-plugin-offline</li>
                        </ul>
                    </li>
                </ul>
            </Box>
        </Layout>
    );
};

export default IndexPage;
