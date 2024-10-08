/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client";

import { UserHistory } from "@/components/history/userHistory";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState, useEffect } from "react";
import { ArrowLeftRight, Plus } from "lucide-react";
import { fetchETHPrice } from "@/components/server/fetchETHPrice";
import { useFunding } from "@dynamic-labs/sdk-react-core";

export default function Profile() {
    const { user } = useDynamicContext();
    const [currency, setCurrency] = useState("EUR");
    const [balanceEUR] = useState(112); // Balance in EUR
    const [conversionRateETH, setConversionRateETH] = useState(0); // Assume initial value of 0 ETH
    const { enabled, openFunding } = useFunding();

    useEffect(() => {
        // Fetch ETH price after component mounts
        fetchETHPrice().then((price) => {
            setConversionRateETH(price);
        }).catch((error) => {
            console.error("Error fetching ETH price:", error);
        });
    }, []);

    // Calculate the ETH balance based on the EUR balance and ETH price
    const balanceETH = conversionRateETH > 0 ? balanceEUR / conversionRateETH : 0;

    const toggleCurrency = () => {
        setCurrency(currency === "EUR" ? "ETH" : "EUR");
    };

    return (
        <div className="h-full w-screen flex flex-col">

            <div className="fixed z-10 opacity-75 pl-8 pt-6 text-4xl font-bold">
                <span className="text-yielopurple">Hello,</span><br/>
                {user?.firstName} 👋
            </div>

            {/* Balance Display */}
            <div className="w-full fixed flex flex-col items-center justify-center mx-auto bg-gradient-to-b from-violet-800 to-black">

                {/* Card-like Balance Display */}
                {/* Card-like Balance Display */}
            <div className="mt-36 pb-3 rounded-2xl flex items-center justify-between text-center">
                {/* Balance Text */}
                <h1 className="text-5xl font-bold text-center">
                    {currency === "EUR" ? `${balanceEUR} €` : `${balanceETH.toFixed(4)} ETH`}
                </h1>
                {enabled && (
                    <button className="bg-yielopurple/50 text-white p-1.5 ml-1 rounded-full shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105"
                        onClick={openFunding as any}
                        >
                            <div className="flex items-center">
                                <Plus className="w-4 h-4" />
                            </div>
                        </button>
                    )}
                </div>
                {/* Currency Switch Button */}
                <button 
                        className="bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105"
                        onClick={toggleCurrency}
                        aria-label="Switch Currency"
                    >
                        <ArrowLeftRight className="w-4 h-4" />
                </button>
            </div>

            <div className="z-10 mt-72 h-full bg-white box-border border-solid border-white rounded-xl">
                {/* Grid 2 columns */}
                <div className="gap-4 p-6">
                    <div className="rounded-xl shadow-lg p-4">
                        <h1 className="text-xl font-bold text-black">Your History</h1>
                        <UserHistory />
                    </div>
                </div>
                <div className="h-10"></div>
            </div>
        </div>
    );
}