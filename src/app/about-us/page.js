'use client';

import CommonBanner from '@/components/global/CommonBanner';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';

const AboutUs = () => {
    const [selectedTab, setSelectedTab] = useState('mission');
    const [membershipTab, setmembershipTab] = useState('fmc');

    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
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
            <div className="grid items-start justify-center gap-5 px-3 lg:px-10 lg:grid-cols-2 xl:gap-40 md:gap-20">
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
                    <p className="text-xl font-bold lg:text-4xl">
                        Stay on budget <br /> with our transport
                    </p>
                    <hr className="w-1/5 h-0.5 border-t-0 bg-primary_color dark:bg-white/10" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s,
                    </p>
                    <div className="flex-col items-center gap-10 space-y-5 lg:space-y-0 lg:flex-row">
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
                    <div className="flex-col items-center gap-10 space-y-5 lg:flex-row lg:space-y-0">
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

            {/* Accreditations */}
            <div className="px-3 space-y-8 lg:px-10">
                <p className="text-xl font-bold lg:text-5xl">
                    Accreditations / Alliances / Memberships
                </p>
                <div className="flex items-start w-full gap-5 text-left lg:gap-20">
                    <button
                        className={`text-lg font-semibold ${
                            membershipTab === 'fmc'
                                ? 'text-black border-b-2 text-left border-primary_color'
                                : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                        }`}
                        onClick={() => setmembershipTab('fmc')}
                    >
                        Accreditation with FMC (USA)
                    </button>
                    <button
                        className={`text-lg font-semibold ${
                            membershipTab === 'mto'
                                ? 'text-black text-left border-b-2 border-primary_color'
                                : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                        }`}
                        onClick={() => setmembershipTab('mto')}
                    >
                        MTO
                    </button>
                    <button
                        className={`text-lg font-semibold ${
                            membershipTab === 'iata'
                                ? 'text-black text-left border-b-2 border-primary_color'
                                : 'border-b-2 text-left text-[#6C6C6C] border-[#C4C4C4]'
                        }`}
                        onClick={() => setmembershipTab('iata')}
                    >
                        Accreditation with IATA
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="grid items-start w-full text-left lg:grid-cols-2 xl:gap-40 md:gap-20">
                        {membershipTab === 'fmc' && (
                            <>
                                <div className="space-y-8">
                                    <p className="text-[#1B1B1B]">
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
                                    </ul>
                                    <Button variant="primary">
                                        View details
                                    </Button>
                                </div>
                                <div className="">
                                    <Image
                                        src={'/static/images/banner.png'}
                                        alt="unsplash"
                                        loading="lazy"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full rounded-xl"
                                    />
                                </div>
                            </>
                        )}
                        {membershipTab === 'mto' && (
                            <>
                                <div className="space-y-8">
                                    <p className="text-[#1B1B1B]">
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
                                    </ul>
                                    <Button variant="primary">
                                        View details
                                    </Button>
                                </div>
                                <div className="">
                                    <Image
                                        src={'/static/images/banner.png'}
                                        alt="unsplash"
                                        loading="lazy"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full rounded-xl"
                                    />
                                </div>
                            </>
                        )}
                        {membershipTab === 'iata' && (
                            <>
                                <div className="space-y-8">
                                    <p className="text-[#1B1B1B]">
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
                                    </ul>
                                    <Button variant="primary">
                                        View details
                                    </Button>
                                </div>
                                <div className="">
                                    <Image
                                        src={'/static/images/banner.png'}
                                        alt="unsplash"
                                        loading="lazy"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full rounded-xl"
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
                        <p className="text-[#6C6C6C]">
                            Provides high quality, comprehensive transportation
                            services and always understand client&apos;s
                            requirements.{' '}
                        </p>
                    </div>
                    <div className="grid items-start gap-5 lg:grid-cols-2">
                        <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                            <Image
                                src={'/static/images/abouticon1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={50}
                                height={50}
                                className=""
                            />
                            <p className="text-[#1B1B1B] text-xl font-semibold">
                                Economical Pricing
                            </p>
                            <p className="text-[#1B1B1B]">
                                Sea freight transportation is offered from home
                                to abroad and vice versa.
                            </p>
                        </div>
                        <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                            <Image
                                src={'/static/images/abouticon1.png'}
                                alt="unsplash"
                                loading="lazy"
                                width={50}
                                height={50}
                                className=""
                            />
                            <p className="text-[#1B1B1B] text-xl font-semibold">
                                Economical Pricing
                            </p>
                            <p className="text-[#1B1B1B]">
                                Sea freight transportation is offered from home
                                to abroad and vice versa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid items-start gap-5 px-3 lg:px-10 lg:grid-cols-4 md:grid-cols-2">
                    <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                        <Image
                            src={'/static/images/abouticon1.png'}
                            alt="unsplash"
                            loading="lazy"
                            width={50}
                            height={50}
                            className=""
                        />
                        <p className="text-[#1B1B1B] text-xl font-semibold">
                            Economical Pricing
                        </p>
                        <p className="text-[#1B1B1B]">
                            Sea freight transportation is offered from home to
                            abroad and vice versa.
                        </p>
                    </div>
                    <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                        <Image
                            src={'/static/images/abouticon1.png'}
                            alt="unsplash"
                            loading="lazy"
                            width={50}
                            height={50}
                            className=""
                        />
                        <p className="text-[#1B1B1B] text-xl font-semibold">
                            Economical Pricing
                        </p>
                        <p className="text-[#1B1B1B]">
                            Sea freight transportation is offered from home to
                            abroad and vice versa.
                        </p>
                    </div>
                    <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                        <Image
                            src={'/static/images/abouticon1.png'}
                            alt="unsplash"
                            loading="lazy"
                            width={50}
                            height={50}
                            className=""
                        />
                        <p className="text-[#1B1B1B] text-xl font-semibold">
                            Economical Pricing
                        </p>
                        <p className="text-[#1B1B1B]">
                            Sea freight transportation is offered from home to
                            abroad and vice versa.
                        </p>
                    </div>
                    <div className="p-5 space-y-4 rounded-md cursor-pointer hover:shadow-lg hover:bg-white">
                        <Image
                            src={'/static/images/abouticon1.png'}
                            alt="unsplash"
                            loading="lazy"
                            width={50}
                            height={50}
                            className=""
                        />
                        <p className="text-[#1B1B1B] text-xl font-semibold">
                            Economical Pricing
                        </p>
                        <p className="text-[#1B1B1B]">
                            Sea freight transportation is offered from home to
                            abroad and vice versa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
