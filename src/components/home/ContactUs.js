import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const GetInTouchSection = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="grid items-center gap-5 lg:grid-cols-2 xl:gap-40 md:gap-20">
        <div className="space-y-8">
          <p className="text-4xl font-bold">Get in touch with us</p>
          <p className="text-[#6C6C6C] text-sm">
            Contact us on direct, by phone or fill out the form to receive a
            free consultation from our enthusiastic staff.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk className="text-primary_color text-xl" />
              <p className="text-[#6C6C6C] text-lg">Phone number</p>
            </div>
            <p className="text-lg font-bold">(480) 555-0103</p>
            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk className="text-primary_color text-xl" />
              <p className="text-[#6C6C6C] text-lg">Email</p>
            </div>
            <p className="text-lg font-bold">kenzi.lawson@example.com</p>
            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk className="text-primary_color text-xl" />
              <p className="text-[#6C6C6C] text-lg">Adress</p>
            </div>
            <p className="text-lg font-bold w-[70%]">
              Office No. 304, Town Centre - 2, Andheri Kurla Road, Marol,
              Andheri East, Mumbai - 400059
            </p>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-[#F7F9FB] p-2 space-y-4">
          <div className="flex items-center gap-3">
            <p className="text-xl font-bold">Send us message</p>
          </div
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
