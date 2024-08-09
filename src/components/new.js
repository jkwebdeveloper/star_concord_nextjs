"use client"
import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaCirclePlus } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import axios from 'axios';

const Locationpage = () => {
    const [location, setLocation] = useState([]);
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
                setLocation(res.data.data);
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
                    <Accordion collapsible className="w-full">
                        {location?.length > 0 ? (
                            location.map((item) => (
                                <AccordionItem key={item?._id}>
                                    <AccordionTrigger className="text-3xl font-bold">
                                        {item?.country}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                            {item.locations.map((item1) => (
                                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl" key={item1._id}>
                                                    <div className="flex items-center gap-3">
                                                        <GoDotFill className="text-primary_color" />
                                                        <p className="text-xl font-semibold">
                                                            {item1?.city}
                                                        </p>
                                                    </div>
                                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                                    <div className="grid items-start lg:grid-cols-2">
                                                        <div className="flex-col space-y-2 lg:flex-row">
                                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                                Phone number :
                                                            </p>
                                                            <p className="text-xl font-bold">
                                                                {item1?.phone}
                                                            </p>
                                                        </div>
                                                        <div className="flex-col space-y-2 lg:flex-row">
                                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                                Email :
                                                            </p>
                                                            <p className="text-xl font-bold">
                                                                {item1?.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2 ">
                                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                                            {item1?.isHeadOffice ? "Head Office (Mumbai):" : "Address:"}
                                                        </p>
                                                        <p className="text-lg font-semibold">
                                                            {item1?.addressLineOne}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        ) : (
                            <p>No location available</p>
                        )}
                    </Accordion>
                )}
            </div>
        </div>
    );
};

export default Locationpage;
