import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const IndustriesDetail = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            {/* <CommonBanner
                image="/static/images/common.jpg"
                title="Healthcare and Pharmaceuticals Logistics"
                page="Industries"
            /> */}
            <div className="relative md:h-80 h-60">
                <Image
                    // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                    src="/static/images/common.jpg"
                    loading="lazy"
                    width={450}
                    height={350}
                    className="object-cover object-center w-full h-full rounded-2xl"
                />
                <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="text-2xl font-bold text-center text-black uppercase md:text-4xl">
                        Healthcare and Pharmaceuticals Logistics
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <Link href="/">
                            <p className="text-lg text-black">Home</p>
                        </Link>
                        <IoIosArrowForward className="text-lg" />
                        <p className="text-lg text-black">Industries</p>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col min-h-[55dvh] gap-10 px-1 md:flex-row md:px-5 relative mt-[-3rem] z-[2] md:mb-10">
                <div className="h-fit min-h-[350px] md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-5">
                    <div className="space-y-4">
                        <p className="text-xl font-semibold">
                            Other Industries{' '}
                        </p>
                        <hr className="w-full h-0.5 border-t-0 bg-[#8C929C] dark:bg-white/10" />
                    </div>
                </div>
                <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-[#8C929C] dark:bg-white/10"></div>
                <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
                    {/* <MainDetail tabMenu={tabMenu} /> */}
                    <Image
                        // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                        src="/static/images/indu.png"
                        loading="lazy"
                        width={450}
                        height={350}
                        className="object-cover w-full min-h-[200px]: rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default IndustriesDetail;
