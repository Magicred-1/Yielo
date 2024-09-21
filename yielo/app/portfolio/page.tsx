"use client";

import { Camembert } from "@/components/charts/camembert";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Portfolio() {
    const { user } = useDynamicContext();
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-violet-800 flex flex-col">

            <div className="pl-8 pt-10 text-4xl font-bold">
                <span className="text-yielopurple">Hello,</span><br/>
                {user?.firstName} 👋
            </div>

            <div className="z-10 mt-44 h-full bg-white box-border border-solid border-white rounded-xl">
                <div className="flex flex-col items-center justify-center">
                    <Camembert />
                </div>
            </div>
        </div>
    );
}