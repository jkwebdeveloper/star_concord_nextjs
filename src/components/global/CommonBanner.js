import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const CommonBanner = ({ title, image, page }) => {
    return (
        <div className="relative md:h-80 h-60">
            <Image
                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                src={image}
                alt={title}
                loading="lazy"
                width={450}
                height={350}
                className="object-cover object-center w-full h-full rounded-2xl"
            />
            <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h1 className="text-2xl font-bold text-center text-black uppercase md:text-4xl">
                    {title}
                </h1>
                <div className="flex items-center gap-3 px-4">
                    <Link href="/">
                        <p className="text-lg text-black">Home</p>
                    </Link>
                    <IoIosArrowForward className="text-lg" />
                    <p className="text-lg text-black">{page}</p>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
