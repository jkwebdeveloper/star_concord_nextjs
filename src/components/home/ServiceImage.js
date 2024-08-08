"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';

const ServiceImage = () => {
    const [serviceData, setServiceData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleGetTransport = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/homePage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setServiceData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetTransport();
    }, []);
    return (
        <div className="container relative w-full p-2 mx-auto space-y-2 text-center lg:space-y-4">
            {loading ? (
                <div className="flex justify-center w-64 mx-auto mt-28">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <Image
                        src={`https://starconcord.onrender.com/uploads${serviceData?.bannerThree}`}
                        alt="banner"
                        loading="lazy"
                        width={900}
                        height={900}
                        className="object-cover w-full h-full rounded-xl "
                    />
                    <div className="absolute top-0 flex items-center justify-start w-full h-full text-left">
                        <div className="mx-5 space-y-2 lg:space-y-6 lg:mx-28">
                            <div className="text-base font-bold text-justify text-white md:text-2xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: serviceData?.bannerThreeText }}>
                               
                            </div>
                            <div className="text-sm text-white md:base" dangerouslySetInnerHTML={{ __html: serviceData?.bannerThreeSubText }}>
                                
                            </div>
                            <Button variant="primary" className="">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ServiceImage;
