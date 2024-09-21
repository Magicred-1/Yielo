"use client";

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function Footer() {

    const router = useRouter();
    const pathname = usePathname();

    return(
        <div className="w-full z-20 fixed bottom-0 h-16 bg-violet-950 
        text-yielopurple text-xs
        flex flex-row justify-evenly
        mx-auto
        transition-all ease-in-out duration-200">

            <div className={`flex flex-col items-center justify-center cursor-pointer
            ${pathname =="/profile"?"text-yielopurple":"text-white"}`}
            onClick={()=>{router.push("/profile")}}>

                <Image alt="" width="30" height="30" src={`${pathname == "/profile" ? "/icon-home-p.svg" : "/icon-home.svg"}`}></Image>
                Home

            </div>

            <div className={`flex flex-col items-center justify-center cursor-pointer
            ${pathname =="/deposit"?"text-yielopurple":"text-white"}`}
            onClick={()=>{router.push("/deposit")}}>

                <Image alt="" width="30" height="30" src={`${pathname == "/deposit" ? "/icon-plus-p.svg" : "/icon-plus.svg"}`}></Image>
                Deposit

            </div>

            <div className={`flex flex-col items-center justify-center cursor-pointer
            ${pathname =="/portfolio"?"text-yielopurple":"text-white"}`}
            onClick={()=>{router.push("/portfolio")}}>

                <Image alt="" width="30" height="30" src={`${pathname == "/portfolio" ? "/icon-piggy-p.svg" : "/icon-piggy.svg"}`}></Image>
                Portfolio

            </div>

            <div className={`flex flex-col items-center justify-center cursor-pointer
            ${pathname =="/withdraw"?"text-yielopurple":"text-white"}`}
            onClick={()=>{router.push("/withdraw")}}>

                <Image alt="" width="30" height="30" src={`${pathname == "/withdraw" ? "/icon-minus-p.svg" : "/icon-minus.svg"}`}></Image>
                Withdraw

            </div>

            <div className={`flex flex-col items-center justify-center cursor-pointer
            ${pathname =="/account"?"text-yielopurple":"text-white"}`}
            onClick={()=>{router.push("/account")}}>

                <Image alt="" width="30" height="30" src={`${pathname == "/account" ? "/icon-account-p.svg" : "/icon-account.svg"}`}></Image>
                Account

            </div>
            
        </div>
    )
}