import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IndustriesSection = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Industries"
                page="Industries"
            />
            <div className="px-10 pb-20 space-y-10">
                <div className="grid items-center grid-cols-2">
                    <p className="text-4xl font-bold text-[#1B1B1B]">
                        What we offer
                    </p>
                    <p className="text-[#1B1B1B]">
                        Provides high quality and comprehensive transportation
                        logistics services with the lowest cost
                    </p>
                </div>
                <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
                    {Data.map(item => (
                        <Link href="/industries-detail" key={item.id}>
                            <div className="relative" key={item.id}>
                                <div className="relative w-full h-auto mx-auto overflow-hidden rounded-xl">
                                    <Image
                                        src={item.image}
                                        alt="offer1"
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                        className="z-0 object-cover transition-all duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className="absolute bottom-0 p-4 space-y-2">
                                    <p className="font-bold text-white capitalize">
                                        {item.title}
                                    </p>
                                    <hr className="w-full h-0.5 border-t-0 bg-white dark:bg-white/10" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;
const Data = [
    {
        id: 1,
        image: '/static/images/offer1.png',
        title: 'Healthcare and Pharmaceuticals Logistics',
    },
    {
        id: 2,
        image: '/static/images/offer2.png',
        title: 'Industrial & Heavy Equipment Logistics',
    },
    {
        id: 3,
        image: '/static/images/offer3.png',
        title: 'Fast Moving Consumer Goods',
    },
    {
        id: 4,
        image: '/static/images/offer1.png',
        title: 'Oil & Gas Logistics',
    },
    {
        id: 5,
        image: '/static/images/offer2.png',
        title: 'Hotel & Resort Logistics',
    },
    {
        id: 6,
        image: '/static/images/offer3.png',
        title: 'Electronic Industry',
    },
    {
        id: 7,
        image: '/static/images/offer1.png',
        title: 'Marine Logistics',
    },
    {
        id: 8,
        image: '/static/images/offer2.png',
        title: 'Retail Logistics',
    },
    {
        id: 9,
        image: '/static/images/offer3.png',
        title: 'Automotive Logistics',
    },
];
