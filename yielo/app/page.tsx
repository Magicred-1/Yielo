import Image from "next/image";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Home() {
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

        {/* Dynamic Widget with bounce animation on the button */}
        <div className="bg-white/10 rounded-lg p-4 shadow-lg">
          <DynamicWidget 
            innerButtonComponent={
              <span className="px-6 py-3 text-white bg-violet-600 hover:bg-violet-700 rounded-full font-semibold animate-bounce hover:animate-none">
                Get Started
              </span>
            } 
          />
        </div>
      </div>
    </div>
  );
}
