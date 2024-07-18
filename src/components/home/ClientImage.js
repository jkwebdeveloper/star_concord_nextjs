import Image from "next/image";
import React from "react";

const ClientImageSection = () => {
  return (
    <div className="w-full relative text-center space-y-4 container mx-auto p-2">
      <Image
        src={"/static/images/client.png"}
        alt="banner"
        loading="lazy"
        width={600}
        height={900}
        className="object-cover rounded-xl w-full h-full "
      />
      <div className="absolute top-0 w-full h-full flex items-center text-left justify-start">
        <div className="space-y-10 mx-28">
          <p className="text-2xl w-[36%] text-justify text-white font-semibold">
            We are proud to be the Transflash's long-term partner. They help me
            quickly deliver cargo to our Singapore clients, without penalties
            and delays
          </p>
          <hr className="w-1/3 h-0.5 border-t-0 bg-[#C4C4C4] opacity-40 dark:bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="bg-[#C4C4C4] rounded-full w-14 h-14"></div>
            <div className="flex-row text-white">
              <p className="text-lg font-bold">Leslie Alexander</p>
              <p>New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientImageSection;
