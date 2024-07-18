import ClientImageSection from "@/components/home/ClientImage";
import GetInTouchSection from "@/components/home/ContactUs";
import HeroSection from "@/components/home/HeroSection";
import LocationSection from "@/components/home/Location";
import OurIndustriesSection from "@/components/home/OurIndustries";
import OurServiceSection from "@/components/home/OurService";
import TransportSection from "@/components/home/TransportSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6 pb-10 xl:space-y-14">
      <HeroSection />
      <div className="container space-y-6 xl:space-y-14 mx-auto px-10">
        <TransportSection />
        <OurServiceSection />
        <ClientImageSection />
        <OurIndustriesSection />
        <LocationSection />
        <GetInTouchSection />
      </div>
    </div>
  );
}
