"use server";

export const getPriceQuotes = async (amount: number, currency: string) => {
    const response = await fetch(`https://api.onramper.com/v2/prices?fiatCurrency=${currency}&cryptoCurrency=ETH&fiatAmount=${amount}`);
    const data = await response.json();
    return data;
}