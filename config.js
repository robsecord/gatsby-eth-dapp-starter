module.exports = {
    siteTitle: 'Gatsby Ethereum Dapp Starter',
    siteDesc: 'Gatsby v2 Starter for Ethereum Dapps using Web3 with various Account Management options',
    siteAuthor: 'Rob Secord (robsecord.eth)',
    siteLogoUrl: 'src/images/gatsby-icon.png',

    manifestName: 'Ethereum Dapp',
    manifestShortName: 'EthDapp', // max 12 characters
    manifestStartUrl: 'https://gatsby-eth-dapp.runkodapps.com/',
    manifestBackgroundColor: '#663399',
    manifestThemeColor: '#663399',
    manifestDisplay: 'standalone',
    manifestIcon: 'src/images/gatsby-icon.png',

    // This path is subpath of your hosting https://your.domain/gatsby-eth-dapp-starter/
    // pathPrefix: `/gatsby-eth-dapp-starter/`,
    pathPrefix: '/',

    // social
    socialLinks: [
        {
            icon: 'fa-github',
            name: 'Github',
            url: 'https://github.com/[__your_social_link__]',
        },
        {
            icon: 'fa-twitter',
            name: 'Twitter',
            url: 'https://twitter.com/[__your_social_link__]',
        },
        {
            icon: 'fa-facebook',
            name: 'Facebook',
            url: 'https://facebook.com/[__your_social_link__]',
        },
        {
            icon: 'fa-envelope-o',
            name: 'Email',
            url: 'mailto:[__your_email_address__]',
        },
    ],
};
