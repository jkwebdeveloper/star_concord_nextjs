"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const OurService = () => {
    
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetService = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/homePage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setService(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetService();
    }, []);

    return (
        <div className="container w-full mx-auto space-y-6 text-center">
            <p className="text-xl font-bold lg:text-5xl">
                Our Global Solutions
            </p>
            {loading ? (
                <div className="flex justify-center w-64 mx-auto mt-28">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="flex flex-col items-start space-y-5 md:flex-row md:space-y-0">
                    {service?.ourServices?.[0] && (
                        <div className="md:w-[30%] w-full space-y-5">
                            <div  className="bg-[#F7F9FB] relative w-full h-fit min-h-[517px] rounded-lg p-5 flex flex-col justify-end">
                                <Image
                                    src={`https://starconcord.onrender.com/uploads${service.ourServices[0].serviceIconImage}`}
                                    alt={service.ourServices[0].serviceName}
                                    loading="lazy"
                                    width={250}
                                    height={200}
                                    className="absolute object-cover top-5 right-5"
                                />
                                <p className="text-2xl w-1/2 text-left ml-2 font-bold text-[#1C3E58]">
                                    {service.ourServices[0].serviceName}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="grid items-start md:w-[70%] w-full mx-auto justify-center grid-cols-1 gap-9 md:px-10 lg:grid-cols-2">

                        {service?.ourServices?.[1] && (
                            <div  className="bg-[#F7F9FB] min-h-[220px] rounded-lg pb-5 flex flex-col">
                                <div className='flex justify-end'>

                                    <Image
                                        src={`https://starconcord.onrender.com/uploads${service.ourServices[1].serviceIconImage}`}
                                        alt={service.ourServices[1].serviceName}
                                        loading="lazy"
                                        width={200}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-start">
                                    <p className="text-2xl ml-4 font-bold text-[#1C3E58]">
                                        {service.ourServices[1].serviceName}
                                    </p>
                                </div>
                            </div>
                        )}
                        {service?.ourServices?.[2] && (
                            <div  className="bg-[#F7F9FB] min-h-[220px] rounded-lg pb-5 flex flex-col">
                                <div className="flex justify-end">
                                    <Image
                                        src={`https://starconcord.onrender.com/uploads${service.ourServices[2].serviceIconImage}`}
                                        alt={service.ourServices[2].serviceName}
                                        loading="lazy"
                                        width={200}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-start">
                                    <p className="text-2xl ml-4 font-bold text-[#1C3E58]">
                                        {service.ourServices[2].serviceName}
                                    </p>
                                </div>
                            </div>
                        )}
                        {service?.ourServices?.[3] && (
                            <div  className="bg-[#F7F9FB] min-h-[220px] rounded-lg pb-4 flex flex-col">
                                <div className="flex justify-end">
                                    <Image
                                        src={`https://starconcord.onrender.com/uploads${service.ourServices[3].serviceIconImage}`}
                                        alt={service.ourServices[3].serviceName}
                                        loading="lazy"
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-start text-left">
                                    <p className="text-2xl ml-4 text-left font-bold text-[#1C3E58]">
                                        {service.ourServices[3].serviceName}
                                    </p>
                                </div>
                            </div>
                        )}
                        {service?.ourServices?.[4] && (
                            <div  className="bg-[#F7F9FB] min-h-[220px] rounded-lg pb-5 flex flex-col">
                                <div className="flex justify-end">
                                    <Image
                                        src={`https://starconcord.onrender.com/uploads${service.ourServices[4].serviceIconImage}`}
                                        alt={service.ourServices[4].serviceName}
                                        loading="lazy"
                                        width={180}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-start">
                                    <p className="text-2xl font-bold ml-4 text-[#1C3E58]">
                                        {service.ourServices[4].serviceName}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurService;
