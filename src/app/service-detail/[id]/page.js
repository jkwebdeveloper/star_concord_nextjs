'use client';
import CommonBanner from '@/components/global/CommonBanner';
import GetInTouchSection from '@/components/home/ContactUs';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ServiceDetail = () => {
    const [activeService, setActiveService] = useState(
        'LCL Consolidators in Singapore'
    );
    const [serviceDetails, setServiceDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState([]);


    const handleGetServiceDetail = () => {
        setLoading(true);
        axios.get(`https://starconcord.onrender.com/api/serviceList/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setServiceDetails(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetServiceDetail();
    }, []);

    const handleGetService = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/serviceList", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setService(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetService();
    }, []);

   
    return (
        <div className="container w-full pb-10 mx-auto lg:space-y-20 space-y-7">
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
                        International Freight Forwarding
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
                            {service.map(industry => (
                                <div
                                    key={industry}
                                    className="flex items-center gap-5 cursor-pointer"
                                    onClick={() => setActiveService(industry)}
                                >
                                    <div
                                        className={`w-0.5 min-h-[25px] ${activeService === industry
                                                ? 'bg-primary_color'
                                                : 'bg-[#EBF1E4]'
                                            }`}
                                    ></div>
                                    <p
                                        className={`font-semibold text-xl ${activeService === industry
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
                    {activeService === 'LCL Consolidators in Singapore' && (
                        <>
                            <Image
                                // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                src="/static/images/service2.png"
                                loading="lazy"
                                width={890}
                                height={550}
                                quality={100}
                                className="object-cover min-w-full rounded-2xl"
                            />
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <p className="text-[#1B1B1B] md:text-left text-justify">
                                        Our freight transport services are fast,
                                        efficient and reliable, even under these
                                        challenging circumstances. We deliver
                                        goods on time withour trafic jams at the
                                        borders and operate with our own
                                        traction services in 20 different
                                        countries. We can increase its
                                        capacities according to clients demand.
                                    </p>
                                    <p className="text-[#1B1B1B] md:text-left text-justify">
                                        Odio risus mauris semper duis
                                        ullamcorper duis felis. Quis interdum
                                        condimentum viverra at nulla tristique
                                        laoreet egestas pellentesque. Erat et
                                        fermentum varius varius.{' '}
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    <p className="text-2xl font-bold">
                                        What we can do for you :
                                    </p>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                            src="/static/images/icon.png"
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            className=""
                                            quality={100}
                                            layout="fixed"
                                            alt="Icon"
                                        />
                                        <div className="flex-col space-y-2">
                                            <p className="text-xl font-semibold">
                                                Customize according to needs{' '}
                                            </p>
                                            <p className="text-[#6C6C6C]">
                                                We can customize our service
                                                according to the amount of goods
                                                you want to store.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                            src="/static/images/icon (1).png"
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            className=""
                                            quality={100}
                                            layout="fixed"
                                            alt="Icon"
                                        />
                                        <div className="flex-col space-y-2">
                                            <p className="text-xl font-semibold">
                                                Reduce your costs
                                            </p>
                                            <p className="text-[#6C6C6C]">
                                                You will not have to invest to
                                                build and operate a private
                                                warehouse
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                            src="/static/images/icon (2).png"
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            className=""
                                            quality={100}
                                            layout="fixed"
                                            alt="Icon"
                                        />
                                        <div className="flex-col space-y-2">
                                            <p className="text-xl font-semibold">
                                                Shorten your cycle time
                                            </p>
                                            <p className="text-[#6C6C6C]">
                                                Shorten your cycle time is the
                                                benefit warehousing service
                                                bring for businesses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                                            src="/static/images/icon (3).png"
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            className=""
                                            quality={100}
                                            layout="fixed"
                                            alt="Icon"
                                        />
                                        <div className="flex-col space-y-2">
                                            <p className="text-xl font-semibold">
                                                Increase operation efficiency
                                            </p>
                                            <p className="text-[#6C6C6C]">
                                                Warehousing service help reduce
                                                cost & save you time
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="primary">
                                        Contact Us
                                    </Button>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-2xl font-bold">
                                        buyer and seller consoles
                                    </p>
                                    <p className="text-[#6C6C6C]">
                                        Our strengths and advantages make us
                                        different from our competitors and we
                                        always is one of transportation and
                                        logistics firms customers expect to
                                        conduct their shipments
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Left Side Image */}
                                        <div className="flex-1">
                                            <Image
                                                src="/static/images/details1.jpg"
                                                loading="lazy"
                                                width={10}
                                                height={50}
                                                quality={100}
                                                layout="responsive"
                                                alt="Main Image"
                                                className="rounded-2xl"
                                            />
                                        </div>
                                        {/* Right Side Images */}
                                        <div className="flex flex-col justify-between gap-4">
                                            <div>
                                                <Image
                                                    src="/static/images/details2.jpg"
                                                    loading="lazy"
                                                    width={300}
                                                    height={250}
                                                    quality={100}
                                                    layout="responsive"
                                                    alt="Top Right Image"
                                                    className="object-cover rounded-2xl"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/static/images/details3.jpg"
                                                    loading="lazy"
                                                    width={300}
                                                    height={250}
                                                    quality={100}
                                                    layout="responsive"
                                                    alt="Bottom Right Image"
                                                    className="object-cover rounded-2xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[#6C6C6C]">
                                        We are proud to serve more than 3,000
                                        customers and are the most environment
                                        friendly mode of land transportation, so
                                        our rail freight service is always the
                                        top choice.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                   
                </div>
            </div>
            <GetInTouchSection />
        </div>
    );
};

export default ServiceDetail;
