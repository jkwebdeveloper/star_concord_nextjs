import Image from 'next/image';
import React from 'react';

const LocationSection = () => {
    return (
        <div className="container w-full mx-auto space-y-4 text-center">
            <p className="text-sm text-[#104B59]">
                We Specliazed in Transportion
            </p>
            <p className="text-xl font-bold lg:text-5xl">
                Let’s Join in logistical <br />
                challenges Covered
            </p>
            <Image
                src={'/static/images/map.png'}
                alt="banner"
                loading="lazy"
                width={600}
                height={900}
                className="object-cover w-full"
            />
        </div>
    );
};

export default LocationSection;
