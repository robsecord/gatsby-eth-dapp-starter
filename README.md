# gatsby-eth-dapp-starter
**Gatsby v2** Starter for **Ethereum Dapps** using **Web3** with various Account Management options:

- Coinbase WalletLink -- **Done**
- ~~Metamask~~ _-- todo_
- ~~Fortmatic~~ _-- todo_
- ~~Torus~~ _-- todo_
- ~~Wallet Connect~~ _-- todo_
- ~~Arkane Network~~ _-- todo_
- ~~Ledger/Trezor~~ _-- todo_

To start, create the following files in the root directory of the project:

**_.env.development_**

    GATSBY_ETH_JSONRPC_URL=https://mainnet.infura.io/v3/__YOUR_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=3


**_.env.production_**

    GATSBY_ETH_JSONRPC_URL=https://mainnet.infura.io/v3/__YOUR_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=1


Next, run the following commands from a terminal:

    yarn install
    yarn start

Or, with NPM:

    npm install
    npm run develop
