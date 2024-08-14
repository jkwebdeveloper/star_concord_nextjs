'use client';
import CommonBanner from '@/components/global/CommonBanner';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import axios from 'axios';
import PageLoader from '@/components/ui/pageloader';

const AboutUs = () => {
    const [selectedTab, setSelectedTab] = useState('mission');
    const [membershipTab, setmembershipTab] = useState('fmc');
    const [aboutUs, setAboutUs] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetAboutUs = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/aboutUsPage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setAboutUs(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetAboutUs();
    }, []);

    const firstTwoUsps = aboutUs?.uspsList?.slice(0, 2);
    const remainingUsps = aboutUs?.uspsList?.slice(2);

    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    <CommonBanner
                        image="/static/images/common.jpg"
                        title="About us"
                        page="About us"
                    />
                    {/* About company Sevtion */}
                    <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                        <div className="w-full text-[#1B1B1B] space-y-20">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <p className="text-lg font-semibold">
                                        About company
                                    </p>
                                </div>
                                <p className='text-4xl font-bold'>{aboutUs?.aboutContentTitle}</p>
                                <div className='text-lg' dangerouslySetInnerHTML={{ __html: aboutUs?.aboutContent }}></div>
                                {aboutUs.ceoName && (
                                    <div className='flex items-center gap-3 md:gap-16'>
                                        <p className="font-semibold">CEO {aboutUs?.ceoName}</p>
                                        <Image
                                            src={`https://starconcord.onrender.com/uploads${aboutUs?.ceoSignature}`}
                                            alt="unsplash"
                                            loading="lazy"
                                            width={200}
                                            height={100}
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="space-y-8">
                                <div className="grid items-start w-full grid-cols-2 text-left">
                                    <button
                                        className={`text-lg font-semibold ${selectedTab === 'mission'
                                            ? 'text-primary_color border-b-2 text-left border-primary_color'
                                            : 'border-b-2 text-left border-[#C4C4C4]'
                                            }`}
                                        onClick={() => setSelectedTab('mission')}
                                    >
                                        Our mission
                                    </button>
                                    <button
                                        className={`text-lg font-semibold ${selectedTab === 'vision'
                                            ? 'text-primary_color text-left border-b-2 border-primary_color'
                                            : 'border-b-2 text-left border-[#C4C4C4]'
                                            }`}
                                        onClick={() => setSelectedTab('vision')}
                                    >
                                        Our vision
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    {selectedTab === 'mission' && (
                                        <div className="space-y-8">
                                            <div className='space-y-3' dangerouslySetInnerHTML={{ __html: aboutUs?.ourMission }}></div>
                                            <Button variant="primary">
                                                Explore more
                                            </Button>
                                        </div>
                                    )}
                                    {selectedTab === 'vision' && (
                                        <div className="space-y-8">
                                            {/* <p className="text-[#1B1B1B]">
                                                Lorem ipsum, dolor sit amet consectetur
                                                adipisicing elit. Minima perspiciatis
                                                nostrum officiis autem dolorum suscipit
                                                accusamus ipsam nihil ullam
                                                reprehenderit! Accusantium, ipsam?
                                            </p>
                                            <ul className="pl-5 font-semibold text-[#1B1B1B] space-y-2 list-disc">
                                                <li>
                                                    Superior transportation and
                                                    logistics services
                                                </li>
                                                <li>Guarantee on-time delivery</li>
                                                <li>
                                                    The most cost-effective delivery for
                                                    clients
                                                </li>
                                            </ul> */}
                                            <div className='space-y-3' dangerouslySetInnerHTML={{ __html: aboutUs?.ourVision }}></div>
                                            <Button variant="primary">
                                                Explore more
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Image
                                src={`https://starconcord.onrender.com/uploads${aboutUs?.rightBanner}`}
                                alt="unsplash"
                                loading="lazy"
                                width={600}
                                height={900}
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                        <div className="">
                            <Image
                                src={`https://starconcord.onrender.com/uploads${aboutUs?.secBanner}`}
                                alt="unsplash"
                                loading="lazy"
                                width={600}
                                height={900}
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full text-[#1B1B1B] space-y-6">
                            <p className="text-xl font-bold xl:text-5xl md:text-2xl">
                                Offering Complete Range of Global Logistics Solutions
                            </p>
                            <div className="space-y-4 text-sm text-justify md:text-base md:text-left" dangerouslySetInnerHTML={{ __html: aboutUs?.secContent }}>
                            </div>
                        </div>
                    </div>

                    {/* Why us */}
                    <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                        <Image
                            src={`https://starconcord.onrender.com/uploads${aboutUs?.whyusImage}`}
                            alt="unsplash"
                            loading="lazy"
                            width={600}
                            height={900}
                            className="object-cover"
                        />
                        <div className="space-y-8">
                            <p className="text-[#1B1B1B] font-semibold">Why Us</p>
                            <p className="text-xl font-bold lg:text-4xl">
                                {aboutUs?.secContentTitle}
                            </p>
                            <hr className="w-1/5 h-0.5 border-t-0 bg-primary_color dark:bg-white/10" />
                            <div className="text-[#1B1B1B]"
                                dangerouslySetInnerHTML={{ __html: aboutUs.whyusContent }}></div>
                            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                                {aboutUs?.whyusPoints?.map((item1) => (
                                    <div className="flex items-center gap-3" key={item1._id}>
                                        <FaRegCircleCheck className="text-xl text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            {item1?.name}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Accreditations */}
                    <div className="px-3 space-y-8 lg:px-10">
                        <p className="text-xl font-bold lg:text-5xl">
                            Accreditations / Alliances / Memberships
                        </p>
                        <div className="flex items-start w-full gap-5 text-left lg:gap-20">
                            <button
                                className={`text-lg font-semibold ${membershipTab === 'fmc'
                                    ? 'text-black border-b-2 text-left border-primary_color'
                                    : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                                    }`}
                                onClick={() => setmembershipTab('fmc')}
                            >
                                Accreditation with FMC (USA)
                            </button>
                            <button
                                className={`text-lg font-semibold ${membershipTab === 'mto'
                                    ? 'text-black text-left border-b-2 border-primary_color'
                                    : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                                    }`}
                                onClick={() => setmembershipTab('mto')}
                            >
                                MTO
                            </button>
                            <button
                                className={`text-lg font-semibold ${membershipTab === 'iata'
                                    ? 'text-black text-left border-b-2 border-primary_color'
                                    : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                                    }`}
                                onClick={() => setmembershipTab('iata')}
                            >
                                Accreditation with IATA
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="grid items-start w-full gap-5 text-left lg:grid-cols-2 xl:gap-40 md:gap-20">
                                {membershipTab === 'fmc' && (
                                    <>
                                        <div className="space-y-8">
                                            {/* <p className="text-[#1B1B1B]">
                                                We guarantee strict compliance to all
                                                procedures before, during and after
                                                journey.
                                            </p>
                                            <ul className="pl-5 font-semibold text-[#1B1B1B] space-y-2 list-disc">
                                                <li>
                                                    Standard operating procedures for
                                                    vehicle maintenance
                                                </li>
                                                <li>Journey management plan</li>
                                                <li>
                                                    Standard operating procedures for
                                                    loading
                                                </li>
                                            </ul> */}
                                            <div className="text-[#1B1B1B] space-y-4" dangerouslySetInnerHTML={{ __html: aboutUs?.fmcDescription }}></div>
                                            <Button variant="primary" className="mb-3">
                                                View details
                                            </Button>
                                        </div>
                                        <div className="">
                                            <Image
                                                src={`https://starconcord.onrender.com/uploads${aboutUs?.fmcImage}`}
                                                alt="unsplash"
                                                loading="lazy"
                                                width={600}
                                                height={600}
                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                    </>
                                )}
                                {membershipTab === 'mto' && (
                                    <>
                                        <div className="space-y-8">
                                            <div className="text-[#1B1B1B] space-y-4" dangerouslySetInnerHTML={{ __html: aboutUs?.mtoDescription }}></div>
                                            {/* <p className="text-[#1B1B1B]">
                                                Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Soluta adipisci omnis
                                                amet, quam eum deserunt at maxime
                                                aspernatur voluptas officiis?
                                            </p>
                                            <ul className="pl-5 font-semibold text-[#1B1B1B] space-y-2 list-disc">
                                                <li>
                                                    Standard operating procedures for
                                                    vehicle maintenance
                                                </li>
                                                <li>Journey management plan</li>
                                                <li>
                                                    Standard operating procedures for
                                                    loading
                                                </li>
                                            </ul> */}
                                            <Button variant="primary">
                                                View details
                                            </Button>
                                        </div>
                                        <div className="">
                                            <Image
                                                src={`https://starconcord.onrender.com/uploads${aboutUs?.mtoImage}`}
                                                alt="unsplash"
                                                loading="lazy"
                                                width={990}
                                                height={10}
                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                    </>
                                )}
                                {membershipTab === 'iata' && (
                                    <>
                                        <div className="space-y-8">
                                            <div className="text-[#1B1B1B] space-y-4" dangerouslySetInnerHTML={{ __html: aboutUs?.iataDescription }}></div>
                                            {/* <p className="text-[#1B1B1B]">
                                                We guarantee strict compliance to all
                                                procedures before, during and after
                                                journey.
                                            </p>
                                            <ul className="pl-5 font-semibold text-[#1B1B1B] space-y-2 list-disc">
                                                <li>
                                                    Standard operating procedures for
                                                    vehicle maintenance
                                                </li>
                                                <li>Journey management plan</li>
                                                <li>
                                                    Standard operating procedures for
                                                    loading
                                                </li>
                                            </ul> */}
                                            <Button variant="primary">
                                                View details
                                            </Button>
                                        </div>
                                        <div className="">
                                            <Image
                                                src={`https://starconcord.onrender.com/uploads${aboutUs?.iataImage}`}
                                                alt="unsplash"
                                                loading="lazy"
                                                width={600}
                                                height={600}
                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Our USPS */}
                    <div className="pb-10 space-y-10">
                        <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2">
                            <div className="space-y-3">
                                <p className="text-4xl font-bold">Our USPS</p>
                                <div className="text-[#6C6C6C]" dangerouslySetInnerHTML={{ __html: aboutUs?.uspsDescription }}>
                                </div>
                            </div>
                            <div className="grid items-start gap-5 lg:grid-cols-2">
                                {firstTwoUsps?.map((uspsItem) => (
                                    <div key={uspsItem._id} className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                                        <Image
                                            src={`https://starconcord.onrender.com/uploads${uspsItem.uspsIconImage}`}
                                            alt={uspsItem.uspsName}
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className=""
                                        />
                                        <p className="text-[#1B1B1B] text-xl font-semibold">
                                            {uspsItem.uspsName}
                                        </p>
                                        <div
                                            className="text-[#1B1B1B]"
                                            dangerouslySetInnerHTML={{ __html: uspsItem.uspsContent }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid items-start gap-5 px-3 lg:px-10 lg:grid-cols-4 md:grid-cols-2">
                            {remainingUsps?.map((uspsItem) => (
                                <div key={uspsItem._id} className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                                    <Image
                                        src={`https://starconcord.onrender.com/uploads${uspsItem.uspsIconImage}`}
                                        alt={uspsItem.uspsName}
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className=""
                                    />
                                    <p className="text-[#1B1B1B] text-xl font-semibold">
                                        {uspsItem.uspsName}
                                    </p>
                                    <div
                                        className="text-[#1B1B1B]"
                                        dangerouslySetInnerHTML={{ __html: uspsItem.uspsContent }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AboutUs;
