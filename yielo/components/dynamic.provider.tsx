// "use client";

// import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
// import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
// import {
//     createConfig,
//     WagmiProvider,
//     configureChains,
// } from 'wagmi';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { http } from 'viem';
// import { sepolia } from 'viem/chains';
// import { publicProvider } from 'wagmi'; // Added public provider

// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

// // Configure the chain and the provider (http in this case)
// const { chains, provider } = configureChains(
//     [sepolia], // Add your desired chains
//     [http(), publicProvider()] // Use HTTP provider with fallback to public provider
// );

// // Create wagmi config
// const config = createConfig({
//     autoConnect: true,
//     publicClient: provider,
// });

// const queryClient = new QueryClient();

// // CSS overrides for sidebar styling
// export const sidebarCss = `
//   @media (min-width: 768px) {
//     .accordion-item {
//       max-height: 100vh !important;
//     }

//     .modal, .dynamic-widget-modal, .dynamic-widget-card {
//       right: 0 !important;
//       top: 0 !important;
//       transform: none !important;
//       height: 100vh !important;
//       border-radius: 0 !important;
//       left: auto !important;
//     }

//     .wallet-list__scroll-container {
//       max-height: 80vh !important;
//     }

//     .settings-view__body {
//       height: auto !important;
//     }

//     .modal-card, .dynamic-widget-card {
//       border-radius: 0 !important;
//       background: linear-gradient(to bottom, #e6f3ff, #ffffff) !important;
//     }

//     .social-redirect-view__container, .wallet-no-access__container, .pending-signature__container, .pending-connect__container {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       height: 100vh;
//       margin-top: -15%;
//     }

//     .footer-options-switcher__container {
//       border-radius: 0 !important;
//       position: absolute !important;
//       bottom: 0 !important;
//       left: 0 !important;
//       right: 0 !important;
//     }

//     .dynamic-user-profile-layout {
//       height: 90vh !important;
//     }

//     .dynamic-footer, .tos-and-pp__footer {
//       position: fixed !important;
//       bottom: 0 !important;
//       left: 0 !important;
//       right: 0 !important;
//     }

//     .tos-and-pp__footer {
//       bottom: 30px !important;
//     }
//   }
// `

// // Main wallet provider component
// export default function DynamicWalletProvider({ children }: Readonly<{ children: React.ReactNode }>) {
//     return (
//         <DynamicContextProvider
//             settings={{
//                 environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ?? "",
//                 walletConnectors: [
//                     EthereumWalletConnectors,
//                 ],
//                 cssOverrides: sidebarCss,
//         }}>
//             <WagmiProvider config={config}>
//                 <QueryClientProvider client={queryClient}>
//                     <DynamicWagmiConnector>
//                         {children}
//                     </DynamicWagmiConnector>
//                 </QueryClientProvider>
//             </WagmiProvider> 
//         </DynamicContextProvider>
//     );
// };
