// Frameworks
import WalletConnect from "@walletconnect/browser";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class WalletConnectWallet extends IWalletBase {
    constructor(site, store) {
        super(GLOBALS.WALLET_TYPE_WALLETCONNECT, site, store);
    }

    async init({rpcUrl, chainId}) {
        // Initialize WalletConnect
        this.walletConnector = new WalletConnect({
            bridge: 'https://bridge.walletconnect.org' // Required
        });
    }

    async connect() {
        // Check if connection is already established
        if (this.walletConnector.connected) { return; }

        // create new session
        await this.walletConnector.createSession();

        // display QR Code modal
        const uri = this.walletConnector.uri;
        WalletConnectQRCodeModal.open(uri, () => {
            // console.log('QR Code Modal closed');
        });

        this.hookCustomEvents();
    }

    async disconnect() {
        // Disconnect WalletConnect
        if (this.walletConnector) {
            await this.walletConnector.killSession();
        }

        // Disconnect Base
        await super.disconnect();
    }

    hookCustomEvents() {
        this.walletConnector.on('connect', (error, payload) => {
            if (error) { throw error; }

            // Close QR Code Modal
            WalletConnectQRCodeModal.close();

            // Get provided accounts and chainId
            const { accounts } = payload.params[0];
            this.changeUserAccount(accounts);
        });

        this.walletConnector.on('session_update', (error, payload) => {
            if (error) { throw error; }
            const { accounts } = payload.params[0];
            this.changeUserAccount(accounts);
        });

        this.walletConnector.on('disconnect', async (error, payload) => {
            if (error) { throw error; }
            delete this.walletConnector;
            await super.disconnect();
        });
    }
}

export default WalletConnectWallet;
