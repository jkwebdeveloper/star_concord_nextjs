import Image from "next/image";
import React from "react";

const LocationSection = () => {
  return (
    <div className="w-full text-center space-y-4 container mx-auto">
      <p className="text-sm text-[#104B59]">We Specliazed in Transportion</p>
      <p className="text-5xl font-bold">
        Let’s Join in logistical <br />
        challenges Covered
      </p>
      <Image
        src={"/static/images/map.png"}
        alt="banner"
        loading="lazy"
        width={600}
        height={900}
        className="object-cover w-full"
      />
    </div>
  );
};

export default LocationSection;
