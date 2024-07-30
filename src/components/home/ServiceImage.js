import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const ServiceImage = () => {
    return (
        <div className="container relative w-full p-2 mx-auto space-y-2 text-center lg:space-y-4">
            <Image
                src={'/static/images/service.png'}
                alt="banner"
                loading="lazy"
                width={900}
                height={900}
                className="object-cover w-full h-full rounded-xl "
            />
            <div className="absolute top-0 flex items-center justify-start w-full h-full text-left">
                <div className="mx-5 space-y-2 lg:space-y-6 lg:mx-28">
                    <p className="text-base font-bold text-justify text-white md:text-2xl lg:text-5xl">
                        Service is Our Promise
                    </p>
                    <p className="text-sm text-white md:base">
                        We are glad to assist with you about your freight &amp;
                        shipping needs…
                    </p>
                    <Button variant="primary" className="">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceImage;
