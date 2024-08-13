"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LocationSection = () => {
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(false)

    const handleGetLocation = () => {
        setLoading(true)
        axios('https://starconcord.onrender.com/api/homePage', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })
            .then((res) => {
                setLocation(res.data.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    useEffect(() => {
        handleGetLocation()
    }, [])
    return (
        <div className="container w-full mx-auto space-y-4 text-center">
            {loading ? (
                <div className="flex justify-center w-64 mx-auto mt-28">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <p className="text-sm text-[#104B59]">
                        {location?.locationSubtitle}
                    </p>
                    <p className="mx-auto text-xl font-bold text-center lg:w-1/2 lg:text-5xl">
                        {location?.locationTitle}
                    </p>
                    <Image
                        src={`https://starconcord.onrender.com/uploads${location?.locationBanner}`}
                        alt="banner"
                        loading="lazy"
                        quality={100}
                        width={1000}
                        height={900}
                        className="object-cover w-full"
                    />
                </>
            )}
        </div>
    );
};

export default LocationSection;
