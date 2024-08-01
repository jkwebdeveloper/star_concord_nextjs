import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const TransportSection = () => {
    return (
        <div className="container w-full mx-auto">
            <div className="grid items-start gap-5 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <div className="space-y-4 lg:space-y-8">
                    <h2 className="text-base font-semibold text-[#1B1B1B]">
                        Logistics Transportation
                    </h2>
                    <h1 className="text-lg font-bold leading-4 lg:text-5xl">
                        Offering Complete Range of Global Logistics Solutions
                    </h1>
                    <hr className="w-1/5 h-0.5 border-t-0 bg-primary_color dark:bg-white/10" />
                    <p className="text-[#1B1B1B] text-base ">
                        We at STAR CONCORD, a shipping agent in India, offer
                        cost-effective services for LCL Cargo Consolidations,
                        FCL& Air Freight Forwarding Services, Warehousing
                        Solutions, Transportation and Supply Chain & Logistics
                        Management. We deliver competitively priced solutions
                        that will help you save on shipping, freight
                        transportation and logistics costs.
                    </p>
                    <div className="">
                        <Button variant="primary" className="">
                            More Details
                        </Button>
                    </div>
                </div>
                <div>
                    <Image
                        src={'/static/images/home.png'}
                        alt="banner"
                        loading="lazy"
                        width={800}
                        layout="responsive"
                        height={800}
                        objectFit="cover"
                        className="object-cover rounded-xl "
                    />
                </div>
            </div>
        </div>
    );
};

export default TransportSection;
