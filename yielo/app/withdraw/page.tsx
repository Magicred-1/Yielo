/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client";


import { useState } from "react";

import { useEffect } from "react";
import { ArrowLeftRight} from "lucide-react";
import { fetchETHPrice } from "@/components/server/fetchETHPrice";


export default function Withdraw() {
    
    
    const [withdrawAmount, setWithdrawAmount] = useState("");


    const [currency, setCurrency] = useState("EUR");
    const [balanceEUR] = useState(112); // Balance in EUR
    const [conversionRateETH, setConversionRateETH] = useState(0); // Assume initial value of 0 ETH

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


   
            <div className="w-full h-full fixed flex flex-col items-center mx-auto bg-gradient-to-b from-violet-800">


                <div className="mt-32">Balance</div>


            <div className=" pb-3 rounded-2xl flex items-center justify-between text-center">
                {/* Balance Text */}
                <h1 className="text-5xl font-bold text-center">
                    {currency === "EUR" ? `${balanceEUR} €` : `${balanceETH.toFixed(4)} ETH`}
                </h1>

                </div>
                {/* Currency Switch Button */}
                <button 
                        className="bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105"
                        onClick={toggleCurrency}
                        aria-label="Switch Currency"
                    >
                        <ArrowLeftRight className="w-4 h-4" />
                </button>

          
            <div className=" flex items-center justify-center">
          
          <div className="mt-6 bg-white p-6 rounded-lg w-80">


            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black/50">Withdrawal Amount</h2>
            </div>

            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Amount in €"
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black/50"
            />
           
            <button
            //   onClick={handleConfirm}
              className="w-full bg-yielopurple text-white p-2 rounded hover:bg-violet-700"
            >
              Confirm
            </button>
          </div>
        </div>



            </div>

            
        </div>
    );
}