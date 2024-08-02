import CommonBanner from '@/components/global/CommonBanner';
import Image from 'next/image';
import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaCirclePlus } from 'react-icons/fa6';

import { GoDotFill } from 'react-icons/go';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
const Locationpage = () => {
    return (
        <div className="container w-full pb-20 mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Location"
                page="Location"
            />
            <div className="container px-3 space-y-10 lg:px-10">
                <div>
                    <Image
                        src="/static/images/SECTION 1.png"
                        loading="lazy"
                        width={500}
                        height={250}
                        quality={100}
                        layout="responsive"
                        alt="Top Right Image"
                        className="object-cover w-full"
                    />
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-3xl font-bold">
                            India
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-3xl font-bold">
                            Singapore
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-3xl font-bold">
                            Cambodia
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-3xl font-bold">
                            China
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-3xl font-bold">
                            Indonesia
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-3xl font-bold">
                            Japan
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid items-start justify-center gap-5 px-2 lg:grid-cols-2">
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Mumbai office
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-col space-y-2 lg:flex-row">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 space-y-6 border border-[#D4DEEF] rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <GoDotFill className="text-primary_color" />
                                        <p className="text-xl font-semibold">
                                            Chennai Office:
                                        </p>
                                    </div>
                                    <hr className="w-full h-0.5 border-t-0 bg-[#c5c5c5] dark:bg-white/10" />
                                    <div className="grid items-start lg:grid-cols-2">
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                        <div className="flex-row space-y-2">
                                            <p className="text-[#6C6C6C] text-lg font-medium">
                                                Phone number :
                                            </p>
                                            <p className="text-xl font-bold">
                                                (480) 555-0103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#6C6C6C] text-lg font-medium">
                                            Head Office (Mumbai):
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Office No. 304, Town Centre - 2,
                                            Andheri Kurla Road, Marol, Andheri
                                            East, Mumbai - 400059
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {/* <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold">India</p>
                    <IoIosCloseCircle className="text-2xl text-primary_color" />
                </div>

                <hr className="text-primary_color" /> */}
            </div>
        </div>
    );
};

export default Locationpage;
