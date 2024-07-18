import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full relative container mx-auto">
      <Image
        src={"/static/images/banner.png"}
        alt="banner"
        loading="lazy"
        width={600}
        height={900}
        className="object-cover rounded-xl w-full h-full "
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="">
          <p className="text-5xl w-1/2 mx-auto text-white font-semibold text-center">
            LCL Consolidators, Best Freight Forwarding And Shipping Agent In
            India
          </p>
          <p className="text-sm text-white text-center mt-4">
            No Matter The Location, We Have You Covered With Our Global Shipping
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 container mx-auto text-lg text-white text-start flex justify-around p-4">
        <p>Booking</p>
        <p>Track & Trace</p>
        <p>Schedule</p>
        <p>Rates</p>
      </div>
    </div>
  );
};

export default HeroSection;
