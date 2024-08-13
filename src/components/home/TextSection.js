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
            </div>
        </div>
    );
};

export default TextSection;
