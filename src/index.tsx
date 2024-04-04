import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { KitProvider } from '@0xsequence/kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, WagmiConfig } from 'wagmi'
import { mainnet, arbitrumSepolia, Chain } from 'wagmi/chains'
import { config } from './config'

const queryClient = new QueryClient() 

function Dapp() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}> 
        <KitProvider config={{ defaultTheme: "light", signIn: { showEmailInput: false } }}>
          <App />
        </KitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Dapp />
);