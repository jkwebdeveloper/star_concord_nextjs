'use client';
import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const IndustriesDetail = () => {
    const [activeIndustry, setActiveIndustry] = useState(
        'Healthcare and Pharmaceuticals Logistics'
    );

    const industries = [
        'Healthcare and Pharmaceuticals Logistics',
        'Industrial & Heavy Equipment Logistics',
        'Fast Moving Consumer Goods',
        'Warehousing',
        'Custom clearance',
    ];
    return (
        <div className="container w-full pb-10 mx-auto lg:space-y-20 space-y-7">
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
                <div className="absolute w-full space-y-2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="text-2xl font-bold text-center text-black capitalize md:text-4xl">
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
                        <hr className="w-full h-0.5 border-t-0 bg-[#dfdfdf] dark:bg-white/10" />
                        <div className="space-y-5">
                            {/* <div className="flex items-center gap-5">
                                <div className="w-0.5 bg-primary_color min-h-[25px] "></div>
                                <p className="text-[#8C929C] font-semibold text-xl">
                                    Healthcare and Pharmaceuticals Logistics
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-0.5 bg-primary_color min-h-[25px] mr-3"></div>
                                <p className="text-[#8C929C] font-semibold text-xl">
                                    Industrial & Heavy Equipment Logistics
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-0.5 bg-primary_color min-h-[25px] mr-3"></div>
                                <p className="text-[#8C929C] font-semibold text-xl">
                                    Fast Moving Consumer Goods
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-0.5 bg-primary_color min-h-[25px] mr-3"></div>
                                <p className="text-[#8C929C] font-semibold text-xl">
                                    Warehousing
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-0.5 bg-primary_color min-h-[25px]  mr-3"></div>
                                <p className="text-[#8C929C] font-semibold text-xl">
                                    Custom clearance
                                </p>
                            </div> */}
                            {industries.map(industry => (
                                <div
                                    key={industry}
                                    className="flex items-center gap-5 cursor-pointer"
                                    onClick={() => setActiveIndustry(industry)}
                                >
                                    <div
                                        className={`w-0.5 min-h-[25px] ${
                                            activeIndustry === industry
                                                ? 'bg-primary_color'
                                                : 'bg-[#EBF1E4]'
                                        }`}
                                    ></div>
                                    <p
                                        className={`font-semibold text-xl ${
                                            activeIndustry === industry
                                                ? 'text-black'
                                                : 'text-[#8C929C]'
                                        }`}
                                    >
                                        {industry}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="inline-block h-auto w-0.5 self-stretch bg-[#dfdfdf] dark:bg-white/10"></div>
                <div className="md:w-[70%] w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
                    {activeIndustry ===
                        'Healthcare and Pharmaceuticals Logistics' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                src="/static/images/indu.png"
                                loading="lazy"
                                width={890}
                                height={550}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-7">
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our freight transport services are fast,
                                    efficient and reliable, even under these
                                    challenging circumstances. We deliver goods
                                    on time withour trafic jams at the borders
                                    and operate with our own traction services
                                    in 20 different countries. We can increase
                                    its capacities according to clients demand.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Odio risus mauris semper duis ullamcorper
                                    duis felis. Quis interdum condimentum
                                    viverra at nulla tristique laoreet egestas
                                    pellentesque. Erat et fermentum varius
                                    varius.{' '}
                                </p>
                                <p className="text-2xl font-bold text-[#1B1B1B]">
                                    Our strengths and advantages
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our strengths and advantages make us
                                    different from our competitors and we always
                                    is one of transportation and logistics firms
                                    customers expect to conduct their shipments
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Thanks to our enthusiastic employees who
                                    make sure all goods reach destinations in a
                                    fast and safe way. We are doing everything
                                    so that consignments reach their
                                    destinations. Flexible and environmentally
                                    friendly rail services provides reliable and
                                    pre-defined scheduled departures.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    We are proud to serve more than 3,000
                                    customers and are the most environment
                                    friendly mode of land transportation, so our
                                    rail freight service is always the top
                                    choice.
                                </p>
                            </div>
                        </>
                    )}
                    {activeIndustry ===
                        'Industrial & Heavy Equipment Logistics' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                src="/static/images/home-banner.jpg"
                                loading="lazy"
                                width={890}
                                height={550}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-7">
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our freight transport services are fast,
                                    efficient and reliable, even under these
                                    challenging circumstances. We deliver goods
                                    on time withour trafic jams at the borders
                                    and operate with our own traction services
                                    in 20 different countries. We can increase
                                    its capacities according to clients demand.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Odio risus mauris semper duis ullamcorper
                                    duis felis. Quis interdum condimentum
                                    viverra at nulla tristique laoreet egestas
                                    pellentesque. Erat et fermentum varius
                                    varius.{' '}
                                </p>
                                <p className="text-2xl font-bold text-[#1B1B1B]">
                                    Our strengths and advantages
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our strengths and advantages make us
                                    different from our competitors and we always
                                    is one of transportation and logistics firms
                                    customers expect to conduct their shipments
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Thanks to our enthusiastic employees who
                                    make sure all goods reach destinations in a
                                    fast and safe way. We are doing everything
                                    so that consignments reach their
                                    destinations. Flexible and environmentally
                                    friendly rail services provides reliable and
                                    pre-defined scheduled departures.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    We are proud to serve more than 3,000
                                    customers and are the most environment
                                    friendly mode of land transportation, so our
                                    rail freight service is always the top
                                    choice.
                                </p>
                            </div>
                        </>
                    )}
                    {activeIndustry === 'Fast Moving Consumer Goods' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                src="/static/images/indu.png"
                                loading="lazy"
                                width={890}
                                height={550}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-7">
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our freight transport services are fast,
                                    efficient and reliable, even under these
                                    challenging circumstances. We deliver goods
                                    on time withour trafic jams at the borders
                                    and operate with our own traction services
                                    in 20 different countries. We can increase
                                    its capacities according to clients demand.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Odio risus mauris semper duis ullamcorper
                                    duis felis. Quis interdum condimentum
                                    viverra at nulla tristique laoreet egestas
                                    pellentesque. Erat et fermentum varius
                                    varius.{' '}
                                </p>
                                <p className="text-2xl font-bold text-[#1B1B1B]">
                                    Our strengths and advantages
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our strengths and advantages make us
                                    different from our competitors and we always
                                    is one of transportation and logistics firms
                                    customers expect to conduct their shipments
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Thanks to our enthusiastic employees who
                                    make sure all goods reach destinations in a
                                    fast and safe way. We are doing everything
                                    so that consignments reach their
                                    destinations. Flexible and environmentally
                                    friendly rail services provides reliable and
                                    pre-defined scheduled departures.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    We are proud to serve more than 3,000
                                    customers and are the most environment
                                    friendly mode of land transportation, so our
                                    rail freight service is always the top
                                    choice.
                                </p>
                            </div>
                        </>
                    )}
                    {activeIndustry === 'Warehousing' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}

                                src="/static/images/home-banner.jpg"
                                loading="lazy"
                                width={890}
                                height={550}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-7">
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our freight transport services are fast,
                                    efficient and reliable, even under these
                                    challenging circumstances. We deliver goods
                                    on time withour trafic jams at the borders
                                    and operate with our own traction services
                                    in 20 different countries. We can increase
                                    its capacities according to clients demand.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Odio risus mauris semper duis ullamcorper
                                    duis felis. Quis interdum condimentum
                                    viverra at nulla tristique laoreet egestas
                                    pellentesque. Erat et fermentum varius
                                    varius.{' '}
                                </p>
                                <p className="text-2xl font-bold text-[#1B1B1B]">
                                    Our strengths and advantages
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our strengths and advantages make us
                                    different from our competitors and we always
                                    is one of transportation and logistics firms
                                    customers expect to conduct their shipments
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Thanks to our enthusiastic employees who
                                    make sure all goods reach destinations in a
                                    fast and safe way. We are doing everything
                                    so that consignments reach their
                                    destinations. Flexible and environmentally
                                    friendly rail services provides reliable and
                                    pre-defined scheduled departures.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    We are proud to serve more than 3,000
                                    customers and are the most environment
                                    friendly mode of land transportation, so our
                                    rail freight service is always the top
                                    choice.
                                </p>
                            </div>
                        </>
                    )}
                    {activeIndustry === 'Custom clearance' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                src="/static/images/indu.png"
                                loading="lazy"
                                width={890}
                                height={550}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-7">
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our freight transport services are fast,
                                    efficient and reliable, even under these
                                    challenging circumstances. We deliver goods
                                    on time withour trafic jams at the borders
                                    and operate with our own traction services
                                    in 20 different countries. We can increase
                                    its capacities according to clients demand.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Odio risus mauris semper duis ullamcorper
                                    duis felis. Quis interdum condimentum
                                    viverra at nulla tristique laoreet egestas
                                    pellentesque. Erat et fermentum varius
                                    varius.{' '}
                                </p>
                                <p className="text-2xl font-bold text-[#1B1B1B]">
                                    Our strengths and advantages
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Our strengths and advantages make us
                                    different from our competitors and we always
                                    is one of transportation and logistics firms
                                    customers expect to conduct their shipments
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    Thanks to our enthusiastic employees who
                                    make sure all goods reach destinations in a
                                    fast and safe way. We are doing everything
                                    so that consignments reach their
                                    destinations. Flexible and environmentally
                                    friendly rail services provides reliable and
                                    pre-defined scheduled departures.
                                </p>
                                <p className="text-[#1B1B1B] md:text-left text-justify">
                                    We are proud to serve more than 3,000
                                    customers and are the most environment
                                    friendly mode of land transportation, so our
                                    rail freight service is always the top
                                    choice.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndustriesDetail;
