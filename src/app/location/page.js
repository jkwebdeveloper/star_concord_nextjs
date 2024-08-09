"use client"
import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import axios from 'axios';

const Locationpage = () => {
    const [locationData, setLocationData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetLocation = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/locationList", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setLocationData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetLocation();
    }, []);

    return (
        <div className="container w-full pb-20 mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Location"
                page="Location"
            />
            <div className="container px-3 space-y-10 lg:px-10">
                <div>
                    <Image
                        src="/static/images/SECTION 1.png"
                        loading="lazy"
                        width={500}
                        height={250}
                        quality={100}
                        layout="responsive"
                        alt="Top Right Image"
                        className="object-cover w-full"
                    />
                </div>
                {loading ? (
                    <div className="flex justify-center w-64 mx-auto mt-28">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <Accordion type="single" collapsible className="w-full">
                        {locationData.map((countryData, countryIndex) => (
                            <AccordionItem key={countryIndex} value={`item-${countryIndex}`}>
                                <AccordionTrigger className="text-3xl font-bold">
                                    {countryData.country}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                        {countryData.locations.map((location) => (
                                            <div key={location._id} className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    <GoDotFill className="text-primary_color" />
                                                    <p className="text-xl font-semibold">
                                                        {location.city} Office
                                                    </p>
                                                </div>
                                                <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                                <div className="grid items-start lg:grid-cols-2">
                                                    <div className="flex-col space-y-2 lg:flex-row">
                                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                                            Phone number:
                                                        </p>
                                                        <p className="text-xl font-bold">
                                                            {location.phone}
                                                        </p>
                                                    </div>
                                                    <div className="flex-col space-y-2 lg:flex-row">
                                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                                            Email:
                                                        </p>
                                                        <p className="text-xl font-bold">
                                                            {location.email}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[#6C6C6C] text-lg font-medium">
                                                        {location.isHeadOffice ? `Head Office (${location.city}):` : 'Address:'}
                                                    </p>
                                                    <p className="text-lg font-semibold">
                                                        {location.addressLineOne}, {location.city}, {location.country} - {location.pincode}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </div>
        </div>
    );
};

export default Locationpage;
