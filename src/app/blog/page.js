import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegClock } from 'react-icons/fa6';

const BlogPage = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Blog"
                page="Blog"
            />
            <div className="px-10 pb-20 space-y-10">
                <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
                    {BlogData.map(item => (
                        <Link href="/blog-detail" key={item.id}>
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
                                <p className="text-2xl font-bold">
                                    {item.title}
                                </p>
                                <p className="text-[#6C6C6C]">{item.decs}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
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
    {
        id: 4,
        image: '/static/images/blog1.png',
        date: '16, Aug 2021',
        title: 'Container freight cost',
        decs: 'Are you struggling with cost and forecasting challenges? and you need solutions?',
    },
];
