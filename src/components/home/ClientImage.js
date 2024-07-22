import Image from 'next/image';
import React from 'react';

const ClientImageSection = () => {
    return (
        <div className="container relative w-full p-2 mx-auto space-y-2 text-center lg:space-y-4">
            <Image
                src={'/static/images/client.png'}
                alt="banner"
                loading="lazy"
                width={900}
                height={900}
                className="object-cover w-full h-full rounded-xl "
            />
            <div className="absolute top-0 flex items-center justify-start w-full h-full text-left">
                <div className="mx-5 space-y-4 lg:space-y-10 lg:mx-28">
                    <p className="lg:text-2xl text-sm lg:w-[36%] text-justify text-white font-semibold">
                        We are proud to be the Transflash long-term partner.
                        They help me quickly deliver cargo to our Singapore
                        clients, without penalties and delays
                    </p>
                    <hr className="w-1/3 h-0.5 border-t-0 bg-[#C4C4C4] opacity-40 dark:bg-white/10" />
                    <div className="flex items-center gap-3">
                        <div className="bg-[#C4C4C4] rounded-full w-14 h-14"></div>
                        <div className="flex-row text-white">
                            <p className="text-lg font-bold">
                                Leslie Alexander
                            </p>
                            <p>New York</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientImageSection;
