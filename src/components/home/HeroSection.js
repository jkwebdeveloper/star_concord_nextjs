import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="container relative w-full mx-auto">
            <Image
                src={'/static/images/home-banner.jpg'}
                alt="banner"
                loading="lazy"
                width={900}
                height={900}
                className="object-cover w-full h-full rounded-xl "
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                <div className="text-center">
                    <p className="w-1/2 mx-auto text-base font-semibold text-center text-white lg:text-5xl">
                        LCL Consolidators, Best Freight Forwarding And Shipping
                        Agent In India
                    </p>
                    <p className="w-1/2 mx-auto mt-2 text-[10px] text-center text-white lg:mt-4 lg:w-auto lg:text-sm">
                        No Matter The Location, We Have You Covered With Our
                        Global Shipping
                    </p>
                </div>
            </div>
            <div className="container absolute bottom-0 grid items-center grid-cols-4 gap-2 p-1 mx-auto text-sm text-white lg:p-4 lg:text-lg text-start">
                <p>Booking</p>
                <p>Track & Trace</p>
                <p>Schedule</p>
                <p>Rates</p>
            </div>
        </div>
    );
};

export default HeroSection;
