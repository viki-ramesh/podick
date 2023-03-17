import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Buffer } from "buffer";



import '@rainbow-me/rainbowkit/styles.css';

import { connectorsForWallets, lightTheme, RainbowKitProvider, getDefaultWallets} from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet, trustWallet, walletConnectWallet, } from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { bscTestnet, bsc, mainnet } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public';



window.Buffer = window.Buffer || Buffer;

const { chains, provider, webSocketProvider  } = configureChains(
  [mainnet], [publicProvider()]
);


const { connectors } = getDefaultWallets(
  {
    appName: 'My RainbowKit App',
  chains
  },
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={lightTheme()} modalSize="compact">
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
</React.StrictMode>
);
