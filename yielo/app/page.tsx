import Image from "next/image";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center py-44
    bg-gradient-to-b from-violet-800 ">

      <Image src="/yielo_logo.svg" alt="" width="284" height="132"></Image>
       
      <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
        <DynamicWidget innerButtonComponent="Get Started"/>
      </code>

    </div>
  );
}
