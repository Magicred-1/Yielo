"use client";

import { Camembert } from "@/components/charts/camembert";
import { UserHistory } from "@/components/history/userHistory";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState, useEffect } from "react";
import { ArrowLeftRight, Plus } from "lucide-react";
import { fetchETHPrice } from "@/components/server/fetchETHPrice";
import { useFunding } from "@dynamic-labs/sdk-react-core";

export default function Profile() {
    const { user } = useDynamicContext();
    const [currency, setCurrency] = useState("EUR");
    const [balanceEUR, setBalanceEUR] = useState(100); // Balance in EUR
    const [conversionRateETH, setConversionRateETH] = useState(0); // Assume 1 ETH = 2800 EUR (so 1 EUR = 0.035 ETH)
    console.log("conversionRateETH", fetchETHPrice());

    const { enabled, openFunding } = useFunding();

    useEffect(() => {
        fetchETHPrice().then((price) => {
            setConversionRateETH(price);
        });
    }, []);

    // Calculate the ETH balance based on the EUR balance and ETH price
    const balanceETH = balanceEUR / conversionRateETH;

    const toggleCurrency = () => {
        setCurrency(currency === "EUR" ? "ETH" : "EUR");
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-violet-800 flex flex-col">

            <div className="pl-8 pt-10 text-4xl font-bold">
                <span className="text-yielopurple">Hello,</span><br/>
                {user?.firstName} 👋
            </div>

        {/* Balance Display */}
        <div className="flex flex-col items-center justify-center mt-20">

            {/* Card-like Balance Display */}
            <div className="p-6 rounded-2xl flex items-center justify-between text-center">
                {/* Balance Text */}
                <h1 className="text-6xl font-bold text-center">
                    {currency === "EUR" ? `${balanceEUR} €` : `${balanceETH.toFixed(4)} ETH`}
                </h1>
                {enabled && (
                    <button className="bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105"
                        onClick={openFunding}
                    >
                        <div className="flex items-center">
                            <Plus className="w-6 h-6" />
                            <span className="ml-2">Deposit</span>
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
                    <ArrowLeftRight className="w-6 h-6" />
                </button>

        </div>


            <div className="z-10 mt-32 h-full bg-white box-border border-solid border-white rounded-xl">
                {/* Grid 2 columns */}
                <div className="gap-4 p-8">
                    <div className="rounded-xl shadow-lg p-4">
                        <h1 className="text-xl font-bold text-black">Your History</h1>
                        <UserHistory />
                    </div>
                </div>
            </div>
        </div>
    );
}
