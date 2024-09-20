"use client";

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import {
  createConfig,
  WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { sepolia } from 'viem/chains';

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ReactNode } from "react";

const config = createConfig({
  chains: [sepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [sepolia.id]: http(),
  },
});

interface DynamicWalletProviderProps {
  children: ReactNode;
}

export const sidebarCss = `
  @media (min-width: 768px) {
    .accordion-item {
      max-height: 100vh !important;
    }

    .modal, .dynamic-widget-modal, .dynamic-widget-card {
      right: 0 !important;
      top: 0 !important;
      transform: none !important;
      height: 100vh !important;
      border-radius: 0 !important;
      left: auto !important;
    }

    .wallet-list__scroll-container {
      max-height: 80vh !important;
    }

    .settings-view__body {
      height: auto !important;
    }

    .modal-card, .dynamic-widget-card {
      border-radius: 0 !important;
      background: linear-gradient(to bottom, #e6f3ff, #ffffff) !important;
    }

    .social-redirect-view__container, .wallet-no-access__container, .pending-signature__container, .pending-connect__container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin-top: -15%;
    }

    .footer-options-switcher__container {
      border-radius: 0 !important;
      position: absolute !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
    }

    .dynamic-user-profile-layout {
      height: 90vh !important;
    }

    .dynamic-footer, .tos-and-pp__footer {
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
    }

    .tos-and-pp__footer {
      bottom: 30px !important;
    }
  }
`
  
const queryClient = new QueryClient();
  
export const DynamicWalletProvider: React.FC<DynamicWalletProviderProps> = ({ children }) => {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors
        ],
        cssOverrides: sidebarCss,
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <DynamicWidget />
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider> 
    </DynamicContextProvider>
  );
};