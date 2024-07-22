import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { v4 } from 'uuid';

const OurIndustriesSection = () => {
    return (
        <div className="container w-full mx-auto space-y-10">
            <p className="text-xl font-bold text-center lg:text-5xl">
                Our Industries
            </p>
            <div className="w-full">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Data.map(item => (
                            <CarouselItem
                                className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
                                key={v4()}
                            >
                                <div className="p-4 space-y-4" key={item.id}>
                                    <Image
                                        src={item.image}
                                        alt="banner"
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                    <p className="text-xl font-semibold text-[#1B1B1B]">
                                        {item.title}
                                    </p>
                                    <p className="text-[#5B5B5B] text-lg">
                                        {item.desc}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default OurIndustriesSection;

const Data = [
    {
        id: 1,
        image: '/static/images/Frame.png',
        title: 'Healthcare & Pharmay',
        desc: 'Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.',
    },
    {
        id: 2,
        image: '/static/images/Frame (1).png',
        title: 'Oil & Gas',
        desc: 'Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.',
    },
    {
        id: 3,
        image: '/static/images/Frame (2).png',
        title: 'Hotel & Resort',
        desc: 'Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.',
    },
    {
        id: 4,
        image: '/static/images/Frame (3).png',
        title: 'Automotive Industries',
        desc: 'Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.',
    },
    {
        id: 5,
        image: '/static/images/Frame.png',
        title: 'Healthcare & Pharmay',
        desc: 'Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.',
    },
];
