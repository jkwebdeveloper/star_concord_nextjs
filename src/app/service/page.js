import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ServicePage = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Services"
                page="Services"
            />
            <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <p className="text-4xl font-bold">What we offer</p>
                <p className="text-[#1B1B1B]">
                    Provides high quality and comprehensive transportation
                    logistics services with the lowest cost
                </p>
            </div>
            <div className="px-3 pb-5 space-y-7 lg:px-10">
                <p className="text-4xl font-semibold">
                    International Freight Forwarding
                </p>
                <div className="grid items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Conveyor Belt 1 (1).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold pb-2 text-[#104B59]">
                                LCL Consolidation in India
                            </p>
                            <Link href="/service-detail">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#104B59] text-sm font-bold">
                                        READ MORE
                                    </p>
                                    <FaArrowRightLong className="text-[#104B59]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Harbor Crane 1 (1).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                Air <br /> Freight
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Harbor Crane 1 (2).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                FCL Sea <br /> Freight
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Cargo 1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                FCL Sea <br /> Freight
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 pb-20 space-y-7 lg:px-10">
                <p className="text-4xl font-semibold">Other Services</p>
                <div className="grid items-start justify-center gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Conveyor Belt 1 (2).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                Logistics and Supply Chain Management
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Harbor Crane 1 (3).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                Warehousing & Distribution Solutions
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Harbor Crane 1 (4).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                3PL <br /> Services
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] rounded-lg p-5 pb-5 flex flex-col min-h-[350px]">
                        <div className="flex">
                            <Image
                                src={'/static/images/Harbor Crane 1 (5).png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow space-y-4"></div>
                        <div className="flex-col items-center justify-center w-full gap-3 mt-auto space-y-2">
                            <p className="text-2xl font-bold text-[#104B59]">
                                Inter-Modal <br /> Services
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-[#104B59] text-sm font-bold">
                                    READ MORE
                                </p>
                                <FaArrowRightLong className="text-[#104B59]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
