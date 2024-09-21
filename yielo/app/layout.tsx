import type { Metadata } from "next";
import "./globals.css";
import { DynamicWalletProvider } from "@/components/dynamic";
import Footer from "@/components/footer";

import { lexend } from "./utils/const";

export const metadata: Metadata = {
  title: "Yielo",
  description: "DeFi Yield made easy",
  icons: {
    icon: "/icon-yielo-mini-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Footer/>
        <DynamicWalletProvider>
          {children}
        </DynamicWalletProvider>
      </body>
    </html>
  );
}

