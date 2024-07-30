import Image from 'next/image';
import React from 'react';

const OurServiceSection = () => {
    return (
        <div className="container w-full mx-auto space-y-4 text-center">
            <p className="font-semibold text-[#104B59]">Our Services</p>
            <p className="text-xl font-bold lg:text-5xl">Global Solutions</p>
            <div className="flex flex-col items-start space-y-5 md:flex-row md:space-y-0">
                <div className="md:w-[30%] w-full space-y-5">
                    <div className="bg-[#F7F9FB] relative w-full h-fit min-h-[450px] rounded-lg p-5 flex flex-col justify-end">
                        <Image
                            src={'/static/images/Conveyor Belt 1.png'}
                            alt="unsplash"
                            loading="lazy"
                            width={200}
                            height={200}
                            className="absolute object-cover top-5 right-5"
                        />
                        <p className="text-2xl text-left ml-2 font-bold text-[#1C3E58]">
                            India <br />
                            LCL Consolidations
                        </p>
                    </div>
                </div>
                <div className="grid items-start md:w-[70%] w-full mx-auto justify-center grid-cols-1 gap-5 md:px-10 lg:grid-cols-2">
                    <div className="bg-[#F7F9FB] h-[220px] rounded-lg pb-5 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <Image
                                src={'/static/images/Harbor Crane 1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={200}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex justify-start">
                            <p className="text-2xl ml-4 font-bold text-[#1C3E58]">
                                Sea Freight
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] h-[220px] rounded-lg pb-5 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <Image
                                src={'/static/images/package 1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={170}
                                height={170}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex justify-start">
                            <p className="text-2xl ml-4 font-bold text-[#1C3E58]">
                                3PL Services
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] h-[220px] rounded-lg pb-6 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <Image
                                src={'/static/images/Cargo 1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex justify-start text-left">
                            <p className="text-2xl ml-4 mb-2 text-left font-bold text-[#1C3E58]">
                                Project Cargo <br /> Handling
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F7F9FB] h-[220px] rounded-lg pb-5 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <Image
                                src={'/static/images/warehouse 1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={130}
                                height={130}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex justify-start">
                            <p className="text-2xl font-bold ml-4 text-[#1C3E58]">
                                Warehousing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceSection;
