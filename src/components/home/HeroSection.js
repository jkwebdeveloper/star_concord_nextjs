import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <Image
        src={"/static/images/banner.png"}
        alt="spa life"
        loading="lazy"
        width={600}
        height={900}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroSection;
