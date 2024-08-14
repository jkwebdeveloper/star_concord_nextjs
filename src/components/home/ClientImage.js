"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import PageLoader from '../ui/pageloader';

const ClientImage = () => {
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(false);
    const [testimonial, setTestimonial] = useState([]);

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

    const handleGetTestimonial = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/testimonials", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setTestimonial(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetTestimonial();
    }, []);



    return (
        <div className="container relative w-full p-2 mx-auto space-y-2 text-center lg:space-y-4">
            {loading ? (
                <PageLoader/>
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
                    <div className="absolute top-0 flex items-center justify-start w-1/2 h-full text-left">
                        <div className="mx-5 space-y-4 lg:space-y-10 lg:mx-28">
                                <Carousel
                                    opts={{
                                        align: 'start',
                                        loop: true,
                                    }}
                                    className="w-full"
                                >
                                    <CarouselContent>
                                        {testimonial?.length > 0 ? (
                                            testimonial.map(item => (
                                                <CarouselItem
                                                    className="w-full space-y-8"
                                                    key={item?._id}
                                                >
                                                    <div className="text-sm font-semibold text-justify text-white lg:text-2xl" dangerouslySetInnerHTML={{ __html: item?.content }}>

                                                    </div>
                                                    <hr className="w-1/3 h-0.5 border-t-0 bg-[#C4C4C4] opacity-40 dark:bg-white/10" />
                                                    <div className="flex items-center gap-6">
                                                        {/* <div className="bg-[#C4C4C4] rounded-full w-14 h-14"></div> */}
                                                        <Image
                                                            // src={'/static/images/home-banner.jpg'}
                                                            src={`https://starconcord.onrender.com/uploads${item.image}`}
                                                            alt="banner"
                                                            loading="lazy"
                                                            layout="responsive"
                                                            // objectFit="cover"
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full max-w-16"
                                                        />
                                                        <div className="flex-row text-white">
                                                            <p className="text-lg font-bold">
                                                                {item?.name}
                                                            </p>
                                                            <p>{item?.location}</p>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))
                                        ) : (
                                            <p>No industries available</p>
                                        )}
                                    </CarouselContent>
                                    {/* <CarouselPrevious />
                                    <CarouselNext /> */}
                                </Carousel>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ClientImage;
