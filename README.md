# gatsby-eth-dapp-starter
### **Gatsby v2** Starter for **Ethereum Dapps** using **React** & **Web3**!

![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/robsecord/gatsby-eth-dapp-starter)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/robsecord/gatsby-eth-dapp-starter)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/robsecord/gatsby-eth-dapp-starter)
![GitHub repo size](https://img.shields.io/github/repo-size/robsecord/gatsby-eth-dapp-starter)

![Maintenance](https://img.shields.io/maintenance/yes/2019)
![GitHub last commit](https://img.shields.io/github/last-commit/robsecord/gatsby-eth-dapp-starter)


#### **Demo:**
https://brave-varahamihira-c2cb15.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd097e47-9299-46cd-9365-67c4047decc6/deploy-status)](https://app.netlify.com/sites/brave-varahamihira-c2cb15/deploys)


#### **Account Management options:**

- QR-Connected Wallets
    - Coinbase WalletLink
    - Wallet Connect

- Hosted Wallets
    - Fortmatic
    - Torus
    - Portis
    - Uport
    - Authereum
    - Bitski
    - SquareLink
    - Arkane Network
    
- Browser Wallets
    - Metamask
    - Native (Brave, Opera, Toshi, Cipher, Status, etc..) -- **Partially Done**

- Hardware Wallets
    - ~~Ledger~~ -- _todo_
    - ~~Trezor~~ -- _todo_

#### **Blockchain Event Streaming & Notifications:**
- ~~dfuse.io~~ -- _todo_

#### **Ethereum Design Components:**
- ~~Rimble UI~~ -- _todo_


#### **Build Environment:**
- node: 10.17.0
- npm: 5.6.0
- yarn: 1.19.1

#### **Develop/Run:**

To start, create the following files in the root directory of the project:

**_.env.development_**

    GATSBY_ETH_JSONRPC_URL=https://ropsten.infura.io/v3/__YOUR_INFURA_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=3
    
    GATSBY_FORTMATIC_APIKEY=__YOUR_FORTMATIC_API_KEY_HERE__
    GATSBY_PORTIS_DAPP_ID=__YOUR_PORTIS_DAPP_ID_HERE__
    GATSBY_UPORT_DAPP_NAME=__YOUR_UPORT_DAPP_NAME_HERE__
    GATSBY_BITSKI_CLIENT_ID=__YOUR_BITSKI_CLIENT_ID_HERE__
    GATSBY_SQUARELINK_DAPP_ID=__YOUR_SQUARELINK_DAPP_ID_HERE__
    GATSBY_ARKANE_CLIENT_ID=__YOUR_ARKANE_CLIENT_ID_HERE__

Next, run the following commands from a terminal:

    yarn install
    yarn start

Or, with NPM:

    npm install
    npm run develop
