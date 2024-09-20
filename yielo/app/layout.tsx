import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import DynamicWalletProvider from "@/components/dynamic.provider";

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
      {/* <DynamicWalletProvider> */}
        <body
          className={`${coolveticaMono.variable} ${coolveticaMono.variable} antialiased`}
        >
          {children}
        </body>
      {/* </DynamicWalletProvider> */}
    </html>
  );
}
