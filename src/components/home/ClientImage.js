"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ClientImageSection = () => {
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(false);

    const handleGetImages = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/homePage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setImages(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetImages();
    }, []);

    return (
        <div className="container relative w-full p-2 mx-auto space-y-2 text-center lg:space-y-4">
            {loading ? (
                <div className="flex justify-center w-64 mx-auto text-2xl font-semibold mt-28">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <Image
                        src={`https://starconcord.onrender.com/uploads${images.bannerTwo}`}
                        alt="banner"
                        loading="lazy"
                        width={900}
                        height={900}
                        className="object-cover w-full h-full rounded-xl "
                    />
                    <div className="absolute top-0 flex items-center justify-start w-full h-full text-left">
                        <div className="mx-5 space-y-4 lg:space-y-10 lg:mx-28">
                            <div className="lg:text-2xl text-sm lg:w-[36%] text-justify text-white font-semibold" dangerouslySetInnerHTML={{ __html: images?.bannerTwoText }}>

                            </div>
                            <hr className="w-1/3 h-0.5 border-t-0 bg-[#C4C4C4] opacity-40 dark:bg-white/10" />
                            <div className="flex items-center gap-3">
                                <div className="bg-[#C4C4C4] rounded-full w-14 h-14"></div>
                                <div className="flex-row text-white">
                                    <p className="text-lg font-bold">
                                        Leslie Alexander
                                    </p>
                                    <p>New York</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ClientImageSection;
