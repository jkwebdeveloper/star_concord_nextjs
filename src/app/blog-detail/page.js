import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { LuClock4 } from 'react-icons/lu';

const BlogDetailsPage = () => {
    return (
        <div className="container w-full pb-10 mx-auto lg:space-y-20 space-y-7">
            <div className="relative md:h-80 h-60">
                <Image
                    // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                    src="/static/images/common.jpg"
                    loading="lazy"
                    width={450}
                    height={350}
                    className="object-cover object-center w-full h-full rounded-2xl"
                />
                <div className="absolute w-full space-y-2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="flex items-center justify-center gap-2">
                        <LuClock4 className="text-lg font-semibold text-primary_color" />
                        <p className="text-lg font-semibold text-primary_color">
                            16, Aug 2021
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-black capitalize md:text-4xl">
                        Container freight cost
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <Link href="/">
                            <p className="text-lg text-black">Home</p>
                        </Link>
                        <IoIosArrowForward className="text-lg" />
                        <p className="text-lg text-black">Blogs</p>
                    </div>
                </div>
            </div>
            <div className="px-5 pb-20 space-y-20 lg:px-20">
                <div className="space-y-10">
                    <p className="text-[#6C6C6C]">
                        Our freight transport services are fast, efficient and
                        reliable, even under these challenging circumstances. We
                        deliver goods on time withour trafic jams at the borders
                        and operate with our own traction services in 20
                        different countries. We can increase its capacities
                        according to clients demand.
                    </p>
                    <Image
                        // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
                        src="/static/images/blogimage.png"
                        loading="lazy"
                        width={650}
                        height={350}
                        quality={100}
                        className="object-cover object-center w-full h-full rounded-2xl"
                    />
                    <p className="text-[#6C6C6C]">
                        Odio risus mauris semper duis ullamcorper duis felis.
                        Quis interdum condimentum viverra at nulla tristique
                        laoreet egestas pellentesque. Erat et fermentum varius
                        varius.
                    </p>
                </div>
                <div className="space-y-10">
                    <p className="text-2xl font-bold">
                        Our strengths and advantages
                    </p>
                    <p className="text-[#6C6C6C]">
                        Our strengths and advantages make us different from our
                        competitors and we always is one of transportation and
                        logistics firms customers expect to conduct their
                        shipments
                    </p>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="">
                            <Image
                                src="/static/images/blogimage2.png"
                                alt="offer1"
                                loading="lazy"
                                width={500}
                                quality={100}
                                height={300}
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-5">
                            <p className="text-[#6C6C6C]">
                                Thanks to our enthusiastic employees who make
                                sure all goods reach destinations in a fast and
                                safe way. We are doing everything so that
                                consignments reach their destinations. Flexible
                                and environmentally friendly rail services
                                provides reliable and pre-defined scheduled
                                departures.
                            </p>
                            <p className="text-[#6C6C6C]">
                                Thanks to our enthusiastic employees who make
                                sure all goods reach destinations in a fast and
                                safe way. We are doing everything so that
                                consignments reach their destinations. Flexible
                                and environmentally friendly rail services
                                provides reliable and pre-defined scheduled
                                departures.
                            </p>
                        </div>
                    </div>
                    <p className="text-[#6C6C6C]">
                        We are proud to serve more than 3,000 customers and are
                        the most environment friendly mode of land
                        transportation, so our rail freight service is always
                        the top choice.
                    </p>
                    <p className="text-[#6C6C6C]">
                        Thanks to our enthusiastic employees who make sure all
                        goods reach destinations in a fast and safe way. We are
                        doing everything so that consignments reach their
                        destinations. Flexible and environmentally friendly rail
                        services provides reliable and pre-defined scheduled
                        departures.
                    </p>
                    <p className="text-[#6C6C6C]">
                        We are proud to serve more than 3,000 customers and are
                        the most environment friendly mode of land
                        transportation, so our rail freight service is always
                        the top choice.
                    </p>
                    <p className="text-[#6C6C6C]">
                        Thanks to our enthusiastic employees who make sure all
                        goods reach destinations in a fast and safe way. We are
                        doing everything so that consignments reach their
                        destinations. Flexible and environmentally friendly rail
                        services provides reliable and pre-defined scheduled
                        departures.
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
                {BlogData.map(item => (
                    <Link href="" key={item.id}>
                        <div className="space-y-3" key={item.id}>
                            <Image
                                src={item.image}
                                alt="offer1"
                                loading="lazy"
                                width={400}
                                quality={100}
                                height={400}
                                className="z-0 object-cover"
                            />
                            <div className="flex items-center gap-2">
                                <FaRegClock className="text-[#6C6C6C] text-lg" />
                                <p className="text-[#6C6C6C] text-lg">
                                    {item.date}
                                </p>
                            </div>
                            <p className="text-2xl font-bold">{item.title}</p>
                            <p className="text-[#6C6C6C]">{item.decs}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogDetailsPage;
const BlogData = [
    {
        id: 1,
        image: '/static/images/blog1.png',
        date: '16, Aug 2021',
        title: 'Container freight cost',
        decs: 'Are you struggling with cost and forecasting challenges? and you need solutions?',
    },
    {
        id: 2,
        image: '/static/images/blog2.png',
        date: '16, Aug 2021',
        title: 'Manage supply chain',
        decs: 'Supply Chain Management is an important and dispensable part of most businesses',
    },
    {
        id: 3,
        image: '/static/images/blog3.png',
        date: '16, Aug 2021',
        title: 'Your Logistics Issues ',
        decs: 'The global supply chains that so many retailers rely on is disrupted in the long time.',
    },
];
