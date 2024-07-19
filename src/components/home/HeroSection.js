import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="container relative w-full mx-auto">
            <Image
                src={'/static/images/banner.png'}
                alt="banner"
                loading="lazy"
                width={600}
                height={900}
                className="object-cover w-full h-full rounded-xl "
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                <div className="">
                    <p className="w-1/2 mx-auto text-5xl font-semibold text-center text-white">
                        LCL Consolidators, Best Freight Forwarding And Shipping
                        Agent In India
                    </p>
                    <p className="mt-4 text-sm text-center text-white">
                        No Matter The Location, We Have You Covered With Our
                        Global Shipping
                    </p>
                </div>
            </div>
            <div className="container absolute bottom-0 flex justify-around p-4 mx-auto text-lg text-white text-start">
                <p>Booking</p>
                <p>Track & Trace</p>
                <p>Schedule</p>
                <p>Rates</p>
            </div>
        </div>
    );
};

export default HeroSection;
