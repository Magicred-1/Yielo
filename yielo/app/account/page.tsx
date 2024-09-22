/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Image from "next/image";

export default function Account() {
    const { user } = useDynamicContext();


    const handleCopy = (textToCopy:string) => {
        navigator.clipboard.writeText(textToCopy).then(
          () => {
            alert('Text copied to clipboard!');
          },
          (err) => {
            console.error('Could not copy text: ', err);
          }
        );
      };


    return (
        <div className="h-full w-screen flex flex-col">


   
            <div className="w-full fixed flex flex-col items-center justify-center mx-auto bg-gradient-to-b from-violet-800">

            
            <div className="mt-24 pb-3 rounded-2xl flex flex-col items-center text-center">
                
                <Image alt="" src="/icon-account.svg" width="70" height="70"></Image>
                
                <h1 className="text-3xl font-bold text-center">
                    {user?.firstName} {user?.lastName}
                </h1>
               
                </div>
          
            </div>

            <div className="z-10 mt-60 h-full bg-white box-border border-solid border-white rounded-xl">
              
                <div className="gap-4 p-6 flex flex-col items-center">
                    <div className="w-full rounded-xl shadow-lg p-4 flex flex-col gap-4 items-center justify-center">

                        <h1 className="text-xl font-bold text-black pb-3">Account Details</h1>
                        
                        <div className="w-full flex flex-row justify-between">
                            <div className="text-black">E-mail</div>
                            <div className="text-black/50">{user?.email}</div>
                        </div>

                        <hr className="w-full bg-black/50 h-0.5"></hr>

                        <div className="mt-3 w-full flex flex-row justify-between gap-8">
                            <div className="text-black">Address</div>
                            <div className="text-black/50 truncate">0x32Be343B94f860124dC4fEe278FDCBD38C102D88</div>
                        </div>

                        <button className="box-border border-solid border-black/50 border-[1.5px] bg-transparent rounded-lg 
                        text-black/50 text-sm px-2 py-1"
                        onClick={()=> handleCopy("0x32Be343B94f860124dC4fEe278FDCBD38C102D88")}>
                            Copy your wallet address
                        </button>

                        <hr className="w-full bg-black/50 h-0.5"></hr>

                        <div className="mt-3 w-full flex flex-row justify-between gap-8">
                            <div className="text-black">IBAN</div>
                            <div className="text-black/50 truncate">FR7610107001011234567890129</div>
                        </div>

                        <button className="box-border border-solid border-black/50 border-[1.5px] bg-transparent rounded-lg 
                        text-black/50 text-sm px-2 py-1"
                        onClick={() => handleCopy("FR7610107001011234567890129")}>
                            Copy your IBAN
                         </button>

                    </div>

                    <button className="bg-transparent rounded-lg 
                    text-red-500 text-lg px-2 py-1.5"
                    onClick={()=> (window.location.href = 'https://yielo.xyz')}>
                        Log out
                    </button>

                </div>
                <div className="h-10"></div>
            </div>
        </div>
    );
}