"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftRight, X } from "lucide-react";
import { fetchETHPrice } from "@/components/server/fetchETHPrice";
import { Camembert } from "@/components/charts/camembert";

export default function Portfolio() {
  const [balanceEUR] = useState(256.83);
  const [currency, setCurrency] = useState("EUR");
  const [conversionRateETH, setConversionRateETH] = useState(0);
  const [showModalInvest, setShowModalInvest] = useState(false);
  const [showModalCollect, setShowModalCollect] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [collectAmount, setCollectAmount] = useState("");

  useEffect(() => {
    fetchETHPrice().then((price) => {
      setConversionRateETH(price);
    }).catch((error) => {
      console.error("Error fetching ETH price:", error);
    });
  }, []);

  const balanceETH = conversionRateETH > 0 ? balanceEUR / conversionRateETH : 0;

  const toggleCurrency = () => {
    setCurrency(currency === "EUR" ? "ETH" : "EUR");
  };

  const handleInvest = () => {
    setShowModalInvest(true);
  };

  const closeModal = () => {
    setShowModalInvest(false);
    setInvestmentAmount("");
  };

  const handleCollect = () => {
    setShowModalCollect(true);
  };

  const closeModalCollect = () => {
    setShowModalCollect(false);
    setCollectAmount("");
  };

  const handleConfirmInvest = () => {
    // Implement investment logic here
    console.log(`Invested: ${investmentAmount} EUR`);
    closeModal();
  };

  const handleConfirmCollect = () => {
    // Implement investment logic here
    console.log(`Collected: ${collectAmount} EUR`);
    closeModalCollect();
  };

  return (
    <div className="h-full w-screen flex flex-col">
      <div className="w-full fixed flex flex-col items-center justify-center mx-auto bg-gradient-to-b from-violet-800">
        <div className="mt-24 pb-3 rounded-2xl flex flex-col gap-4 items-center text-center">
          Piggy Bank Account
          <h1 className="text-5xl font-bold text-center">
            {currency === "EUR" ? `${balanceEUR} €` : `${balanceETH.toFixed(4)} ETH`}
          </h1>
          <button
            className="bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105"
            onClick={toggleCurrency}
            aria-label="Switch Currency"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full flex flex-row justify-evenly">

          <button className="box-border border-solid bg-violet-800 text-xl text-white font-medium px-7 py-3 rounded-md"
          onClick={handleCollect}>
            Collect
          </button>

          <button 
            className="box-border border-solid bg-yielopurple text-xl text-white font-medium px-7 py-3 rounded-md"
            onClick={handleInvest}
          >
            Invest
          </button>

        </div>
      </div>
      <div className="z-10 mt-[50vh] h-full bg-white box-border border-solid border-white rounded-xl">
        <div className="p-4 flex flex-col items-center justify-center">
          <Camembert />
        </div>
        <div className="h-16"></div>
      </div>

      {showModalInvest && (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black/50">Investment Amount</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="Amount in €"
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black/50"
            />
           
            <button
              onClick={handleConfirmInvest}
              className="w-full bg-yielopurple text-white p-2 rounded hover:bg-violet-700"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

    {showModalCollect && (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black/50">Collect Amount</h2>
              <button onClick={closeModalCollect} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <input
              type="number"
              value={collectAmount}
              onChange={(e) => setCollectAmount(e.target.value)}
              placeholder="Amount in €"
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black/50"
            />
           
            <button
              onClick={handleConfirmCollect}
              className="w-full bg-yielopurple text-white p-2 rounded hover:bg-violet-700"
            >
              Confirm
            </button>
          </div>
        </div>
      )}


    </div>
  );
}