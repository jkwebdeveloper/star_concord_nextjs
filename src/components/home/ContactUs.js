import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { IoSend } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoMailOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';
import { Button } from '../ui/button';

const GetInTouchSection = () => {
    return (
        <div className="container w-full mx-auto">
            <div className="grid items-center gap-5 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <div className="space-y-5 lg:space-y-8">
                    <p className="text-base font-bold lg:text-4xl">
                        Get in touch with us
                    </p>
                    <p className="text-[#6C6C6C] text-sm">
                        Our team of experts is ready to work with you, to find
                        the best freight forwarding solutions for your needs.
                        Get in touch with us today
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <MdOutlinePhoneInTalk className="text-xl text-primary_color" />
                            <p className="text-[#6C6C6C] text-lg">
                                Phone number
                            </p>
                        </div>
                        <p className="text-lg font-bold">(480) 555-0103</p>
                        <div className="flex items-center gap-3">
                            <IoMailOutline className="text-xl text-primary_color" />
                            <p className="text-[#6C6C6C] text-lg">Email</p>
                        </div>
                        <p className="text-lg font-bold">
                            kenzi.lawson@example.com
                        </p>
                        <div className="flex items-center gap-3">
                            <SlLocationPin className="text-xl text-primary_color" />
                            <p className="text-[#6C6C6C] text-lg">Adress</p>
                        </div>
                        <p className="text-lg font-bold w-[70%]">
                            Office No. 304, Town Centre - 2, Andheri Kurla Road,
                            Marol, Andheri East, Mumbai - 400059
                        </p>
                    </div>
                </div>
                <div className="w-full rounded-3xl bg-[#F7F9FB] p-8 space-y-8">
                    <div className="flex items-center gap-3">
                        <RiMailSendLine className="text-2xl text-primary_color" />
                        <p className="text-xl font-bold">Send us message</p>
                    </div>
                    <div class="flex flex-col gap-6">
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Full name"
                                className="w-full font-semibold h-full bg-transparent border-b peer border-[#7A7A7A] placeholder:font-semibold placeholder-[#6C6C6C]  focus:border-primary_color focus:outline-0 "
                                type="text"
                            />
                            {/* <label className=" after:border-gray-500">
                                Full name
                            </label> */}
                        </div>
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Phone number"
                                className="w-full font-semibold h-full bg-transparent border-b peer border-[#7A7A7A] placeholder:font-semibold placeholder-[#6C6C6C]  focus:border-primary_color focus:outline-0 "
                                type="text"
                            />
                        </div>
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Email adress"
                                className="w-full font-semibold h-full bg-transparent border-b peer border-[#7A7A7A] placeholder:font-semibold placeholder-[#6C6C6C]  focus:border-primary_color focus:outline-0 "
                                type="email"
                            />
                        </div>
                        <div className="relative w-full min-w-[200px]">
                            <textarea
                                className="w-full font-semibold h-full bg-transparent border-b peer border-[#7A7A7A] placeholder:font-semibold placeholder-[#6C6C6C]  focus:border-primary_color focus:outline-0"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                    <Button
                        className="flex items-center gap-3"
                        variant="primary"
                    >
                        <IoSend />
                        Send message
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchSection;
