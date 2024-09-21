import type { Metadata } from "next";
import "./globals.css";
import { DynamicWalletProvider } from "@/components/dynamic";

import { lexend } from "./utils/const";

export const metadata: Metadata = {
  title: "Yielo",
  description: "DeFi Yield made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <DynamicWalletProvider>
          {children}
        </DynamicWalletProvider>
      </body>
    </html>
  );
}

