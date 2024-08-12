'use client'
import CommonBanner from '@/components/global/CommonBanner';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const IndustriesSection = () => {
    const [industries, setIndustries] = useState({ industry: [] });
    const [loading, setLoading] = useState(false);

    const handleGetIndustries = () => {
        setLoading(true);
        axios('https://starconcord.onrender.com/api/industryList', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })
            .then((res) => {
                console.log('API Response:', res.data.data);
                setIndustries(res.data.data || { industry: [] });
                setLoading(false);
            })
            .catch((err) => {
                console.error('API Error:', err);
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetIndustries();
    }, []);

    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Industries"
                page="Industries"
            />
            {loading ? (
                <div className="flex justify-center w-64 mx-auto mt-28">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="px-10 pb-20 space-y-14">
                    <div className="grid items-center grid-cols-2">
                        <p className="text-4xl font-bold text-[#1B1B1B]">
                            {industries?.config?.indTitle}
                        </p>
                        <p className="text-[#1B1B1B]">
                            {industries?.config?.indDescription}
                        </p>
                    </div>
                    <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
                        {industries?.industry && industries.industry.length > 0 ? (
                            industries.industry.map(item => (
                                <Link href={`/industries-detail/${item._id}`} state={{ id: item._id }} key={item._id}>
                                    <div className="relative">
                                        <div className="relative w-full h-auto mx-auto overflow-hidden rounded-xl">
                                            <Image
                                                src={`https://starconcord.onrender.com/uploads${item?.banners}`}
                                                alt={item?.industryName}
                                                loading="lazy"
                                                width={400}
                                                height={400}
                                                className="z-0 object-cover transition-all duration-300 hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 p-4 space-y-2">
                                            <p className="font-bold text-white capitalize">
                                                {item?.industryName}
                                            </p>
                                            <hr className="w-full h-0.5 border-t-0 bg-white dark:bg-white/10" />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No industries available</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndustriesSection;
