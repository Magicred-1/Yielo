"use server";

export const fetchETHPrice = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins/eth-ethereum/ohlcv/latest");
    const data = await response.json();
    return data[0].open;
}