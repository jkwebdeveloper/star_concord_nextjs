'use client';

import CommonBanner from '@/components/global/CommonBanner';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';

const AboutUs = () => {
    const [selectedTab, setSelectedTab] = useState('mission');

    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="About us"
                page="About us"
            />
            {/* About company Sevtion */}
            <div className="grid items-start justify-center gap-5 px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <div className="w-full text-[#1B1B1B] space-y-20">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <p className="text-lg font-semibold">
                                About company
                            </p>
                            <p className="text-4xl font-bold">
                                Global Leading business
                            </p>
                        </div>
                        <p>
                            We have built a team of employees, who are
                            participated in professional training courses , are
                            groomed to handle any emerging situation with a
                            level of composure that gives the customer peace of
                            mind.
                        </p>
                        <p className="font-semibold">CEO Jenny Wilson</p>
                    </div>
                    <div className="space-y-8">
                        <div className="grid items-start w-full grid-cols-2 text-left">
                            <button
                                className={`text-lg font-semibold ${
                                    selectedTab === 'mission'
                                        ? 'text-primary_color border-b-2 text-left border-primary_color'
                                        : 'border-b-2 text-left border-[#C4C4C4]'
                                }`}
                                onClick={() => setSelectedTab('mission')}
                            >
                                Our mission
                            </button>
                            <button
                                className={`text-lg font-semibold ${
                                    selectedTab === 'vision'
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
                                    <p className="text-[#1B1B1B]">
                                        Offering our customers the opportunity
                                        to conduct their shipments in a friendly
                                        environmental way
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
                                    </ul>
                                    <Button variant="primary">
                                        Explore more
                                    </Button>
                                </div>
                            )}
                            {selectedTab === 'vision' && (
                                <div className="space-y-8">
                                    <p className="text-[#1B1B1B]">
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
                                    </ul>
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
                        src={'/static/images/unsplash.png'}
                        alt="unsplash"
                        loading="lazy"
                        width={600}
                        height={900}
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* Why us */}
            <div className="grid items-start justify-center gap-5 px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <Image
                    src={'/static/images/aboutpage.png'}
                    alt="unsplash"
                    loading="lazy"
                    width={600}
                    height={900}
                    className="object-cover"
                />
                <div className="space-y-8">
                    <p className="text-[#1B1B1B] font-semibold">Why Us</p>
                    <p className="text-4xl font-bold">
                        Stay on budget <br /> with our transport
                    </p>
                    <hr className="w-1/5 h-0.5 border-t-0 bg-primary_color dark:bg-white/10" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <FaRegCircleCheck className="text-xl text-primary_color" />
                            <p className="text-xl font-semibold">
                                Safe Package
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaRegCircleCheck className="text-xl text-primary_color" />
                            <p className="text-xl font-semibold">
                                Transparent Pricing
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <FaRegCircleCheck className="text-xl text-primary_color" />
                            <p className="text-xl font-semibold">
                                Global Tracking
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaRegCircleCheck className="text-xl text-primary_color" />
                            <p className="text-xl font-semibold">
                                24 / 7 Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
