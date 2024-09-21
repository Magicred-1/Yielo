import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { depositAbi } from "./abi";

export const useDepositWETH = (amount: string) => {
    const { writeContract } = useWriteContract();

    const depositWETH = async () => {
        try {
            writeContract({ 
                abi: depositAbi,
                address: '0xdfefbC166bfc5E5add40868c96aa7C69B3d94810',
                functionName: 'deposit',
                value: parseUnits(amount, 18),
             })
        } catch (error) {
            console.error("Error depositing WETH: ", error);
            return null;
        }
    };

    return { depositWETH };
};