import Image from "next/image"
import { useRouter } from "next/router"

export default function Footer() {
    const router = useRouter();
    return(
        <div className="w-full z-20 fixed bottom-0 h-16 bg-violet-950 
        text-yielopurple text-xs
        flex flex-row justify-evenly
        mx-auto">
            <div className="flex flex-col items-center justify-center cursor-pointer"
            onClick={()=>{router.push("/page")}}>
                <Image alt="" width="30" height="30" src="/icon-home-p.svg"></Image>
                Home
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer"
            onClick={()=>{router.push("/deposit")}}>
                <Image alt="" width="30" height="30" src="/icon-plus-p.svg"></Image>
                Deposit
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer"
            onClick={()=>{router.push("/portfolio")}}>
                <Image alt="" width="30" height="30" src="/icon-piggy-p.svg"></Image>
                Portfolio
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer"
            onClick={()=>{router.push("/withdraw")}}>
                <Image alt="" width="30" height="30" src="/icon-minus-p.svg"/>
                Withdraw
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer"
            onClick={()=>{router.push("/account")}}>
                <Image alt="" width="30" height="30" src="/icon-account-p.svg"></Image>
                Account
            </div>
            
        </div>
    )
}