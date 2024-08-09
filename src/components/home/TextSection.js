"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TextSection = () => {

    const [paraData, setParaData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleGetText = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/homePage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setParaData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetText();
    }, []);

    return (
        <div className="w-full bg-[#F7F9FB]">
            <div className="container relative w-full p-2 px-5 py-10 mx-auto space-y-2 lg:px-10 lg:space-y-4">
                {loading ? (
                    <div className="flex justify-center w-64 mx-auto mt-28">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="text-[#1B1B1B] space-y-3 md:text-left text-justify" dangerouslySetInnerHTML={{ __html: paraData?.bottomContent }}>

                    </div>
                )}
                {/* <p className="text-[#1B1B1B] md:text-left text-justify">
                    Over the years, the Taiwan Ministry of Transportation and
                    Communication and the Port Authority of Keelung has
                    consistently named Pacific Star Group as “The best NVOCC of
                    the year”. CommonWealth Magazine, Business Weekly and China
                    Credit Information Services have also ranked the group as
                    one of the “Top 500 Corporations” in the service industry.
                    These recognitions fuelled our perseverance as a shipping
                    company to strive for excellence.
                </p>
                <p className="text-[#1B1B1B] font-semibold">
                    A Passionate Commitment to Making a Difference
                </p>
                <p className="text-[#1B1B1B]">
                    Our team of experts is ready to work with you, to find the
                    best freight forwarding solutions for your needs. Get in
                    touch with us today.
                </p> */}
            </div>
        </div>
    );
};

export default TextSection;
