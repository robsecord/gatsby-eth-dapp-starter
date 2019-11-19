# gatsby-eth-dapp-starter
### **Gatsby v2** Starter for **Ethereum Dapps** using **Web3**!

#### **Account Management options:**

- Coinbase WalletLink -- **Done**
- Fortmatic -- **Done**
- ~~Metamask~~ -- _todo_
- ~~Torus~~ -- _todo_
- ~~Wallet Connect~~ -- _todo_
- ~~Arkane Network~~ -- _todo_
- ~~Ledger/Trezor~~ -- _todo_


#### **Blockchain Event Streaming & Notifications:**
- ~~dfuse.io~~ _-- todo_


#### **Build Environment:**
- node: 10.17.0
- npm: 5.6.0
- yarn: 1.19.1

#### **Develop/Run:**

To start, create the following files in the root directory of the project:

**_.env.development_**

    GATSBY_ETH_JSONRPC_URL=https://mainnet.infura.io/v3/__YOUR_INFURA_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=3
    GATSBY_FORTMATIC_APIKEY=__YOUR_FORTMATIC_API_KEY_HERE__

**_.env.production_**

    GATSBY_ETH_JSONRPC_URL=https://mainnet.infura.io/v3/__YOUR_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=1
    GATSBY_FORTMATIC_APIKEY=__YOUR_FORTMATIC_API_KEY_HERE__


Next, run the following commands from a terminal:

    yarn install
    yarn start

Or, with NPM:

    npm install
    npm run develop
