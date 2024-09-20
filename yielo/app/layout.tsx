import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DynamicWalletProvider } from "@/components/dynamic";
import { ReactNode } from "react";

const coolveticaMono = localFont({
  src: "./fonts/Coolvetica.otf",
  variable: "--coolveticaMono",
  weight: "100 900",
});


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
      <body className={`${coolveticaMono.variable} antialiased`}>
        <DynamicWalletProvider>
          {children}
        </DynamicWalletProvider>
      </body>
    </html>
  );
}

