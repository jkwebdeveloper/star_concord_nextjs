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
                        Contact us on direct, by phone or fill out the form to
                        receive a free consultation from our enthusiastic staff.
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
                            <MdOutlinePhoneInTalk className="text-xl text-primary_color" />
                            <p className="text-[#6C6C6C] text-lg">Email</p>
                        </div>
                        <p className="text-lg font-bold">
                            kenzi.lawson@example.com
                        </p>
                        <div className="flex items-center gap-3">
                            <MdOutlinePhoneInTalk className="text-xl text-primary_color" />
                            <p className="text-[#6C6C6C] text-lg">Adress</p>
                        </div>
                        <p className="text-lg font-bold w-[70%]">
                            Office No. 304, Town Centre - 2, Andheri Kurla Road,
                            Marol, Andheri East, Mumbai - 400059
                        </p>
                    </div>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F9FB] p-4 space-y-8">
                    <div className="flex items-center gap-3">
                        <RiMailSendLine className="text-2xl text-primary_color" />
                        <p className="text-xl font-bold">Send us message</p>
                    </div>
                    <div class="flex flex-col gap-6">
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Type here..."
                                className="w-full h-full pt-6 pb-2 font-sans text-base font-normal text-black transition-all bg-transparent border-b peer border-[#7A7A7A] outline outline-0 placeholder-shown:border-[#7A7A7A] focus:border-primary_color focus:outline-0 disabled:border-0 disabled:bg-primary_color placeholder:opacity-0 focus:placeholder:opacity-100"
                            />
                            <label className=" pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500  peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary_color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Full name
                            </label>
                        </div>
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Type here..."
                                className="w-full h-full pt-6 pb-2 font-sans text-base font-normal text-black transition-all bg-transparent border-b peer border-[#7A7A7A] outline outline-0 placeholder-shown:border-[#7A7A7A] focus:border-primary_color focus:outline-0 disabled:border-0 disabled:bg-primary_color placeholder:opacity-0 focus:placeholder:opacity-100"
                            />
                            <label className=" pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500  peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary_color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Phone Number
                            </label>
                        </div>
                        <div class="relative h-11 w-full">
                            <input
                                placeholder="Type here..."
                                className="w-full h-full pt-6 pb-2 font-sans text-base font-normal text-black transition-all bg-transparent border-b peer border-[#7A7A7A] outline outline-0 placeholder-shown:border-[#7A7A7A] focus:border-primary_color focus:outline-0 disabled:border-0 disabled:bg-primary_color placeholder:opacity-0 focus:placeholder:opacity-100"
                            />
                            <label className=" pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500  peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary_color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email adress
                            </label>
                        </div>
                        <div className="relative w-full min-w-[200px]">
                            <textarea
                                className="w-full h-full pt-6 pb-2 font-sans text-base font-normal text-black transition-all bg-transparent border-b peer border-[#7A7A7A] outline outline-0 placeholder-shown:border-[#7A7A7A] focus:border-primary_color focus:outline-0 disabled:border-0 disabled:bg-primary_color placeholder:opacity-0 focus:placeholder:opacity-100"
                                placeholder="Type here..."
                            ></textarea>
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary_color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Message
                            </label>
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
