import CommonBanner from '@/components/global/CommonBanner';
import GetInTouchSection from '@/components/home/ContactUs';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Contact Us"
                page="Contact us"
            />
            <GetInTouchSection />
            <div className="bg-[#F7F9FB] w-full py-20">
                <div className="grid items-start justify-center gap-5 px-2 lg:px-10 lg:grid-cols-2">
                    <div className="p-5 space-y-6 bg-white shadow-md">
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
                                Office No. 304, Town Centre - 2, Andheri Kurla
                                Road, Marol, Andheri East, Mumbai - 400059
                            </p>
                        </div>
                    </div>
                    <div className="p-5 space-y-6 bg-white shadow-md">
                        <div className="flex items-center gap-3">
                            <GoDotFill className="text-primary_color" />
                            <p className="text-xl font-semibold">
                                Mumbai office
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
                                Office No. 304, Town Centre - 2, Andheri Kurla
                                Road, Marol, Andheri East, Mumbai - 400059
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
