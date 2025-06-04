import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import OliveDashboard from './OliveDashboard.jsx';

import '@solana/wallet-adapter-react-ui/styles.css';

const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
const network = 'https://api.devnet.solana.com';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <OliveDashboard />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);
