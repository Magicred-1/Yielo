import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { depositAbi } from "./abi";

export const useDepositWETH = (amount: string) => {
    const { writeContract } = useWriteContract();

    const depositWETH = async () => {
        try {
            writeContract({ 
                abi: depositAbi,
                address: '0xA65bB537d017C4C104Aa1714b8c225B6c7757EB7',
                functionName: 'deposit',
                value: parseUnits(amount, 18),
             })
        } catch (error) {
            console.error("Error depositing WETH: ", error);
            return null;
        }
    };

    // const getBalance = async (address: `0x${string}`) => {
    //     try {
    //         const balance = writeContract({
    //             abi: depositAbi,
    //             address: '0xA65bB537d017C4C104Aa1714b8c225B6c7757EB7',
    //             functionName: 'getAddressBalance',
    //             params: [address],
    //         });
    //         return balance;
    //     } catch (error) {
    //         console.error("Error fetching WETH balance: ", error);
    //         return null;
    //     }
    // }


    return { depositWETH };
};