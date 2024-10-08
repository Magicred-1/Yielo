"use client";

import Image from "next/image";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected, address } = useAccount();
  if (isConnected && address) {
    // Redirect to the dashboard if the user is already connected
    return window.location.replace("/profile");
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-violet-800 to-indigo-900">

      {/* Logo Section with fade-in animation */}
      <Image 
        src="/yielo_logo.svg"
        alt="Yielo Logo" 
        width="284" 
        height="132" 
        className="mb-10 animate-fade-in"
      />

      {/* Call to Action Section with fade-in animation */}
      <div className="text-center animate-fade-in-delay">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to Yielo</h1>
        <p className="text-lg text-white mb-8">
          Your gateway to the next-gen platform. Sign in to get started!
        </p>

        {/* Centered Dynamic Widget with no shadow */}
        <div className="flex justify-center">
          <div className="p-4 flex justify-center items-center">
            <DynamicWidget 
              innerButtonComponent={
                <span className="text-white">
                  Get Started
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
