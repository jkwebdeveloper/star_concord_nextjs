import ClientImageSection from '@/components/home/ClientImage';
import GetInTouchSection from '@/components/home/ContactUs';
import HeroSection from '@/components/home/HeroSection';
import LocationSection from '@/components/home/Location';
import OurIndustriesSection from '@/components/home/OurIndustries';
import OurServiceSection from '@/components/home/OurService';
import PacificSection from '@/components/home/Pacific';
import ServiceImage from '@/components/home/ServiceImage';
import TextSection from '@/components/home/TextSection';
import TransportSection from '@/components/home/TransportSection';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="space-y-6 xl:space-y-14">
            <HeroSection />
            <div className="container px-3 pb-10 mx-auto space-y-6 xl:space-y-14 lg:px-10">
                <TransportSection />
                <OurServiceSection />
                <ClientImageSection />
                <OurIndustriesSection />
                <ServiceImage />
                <GetInTouchSection />
                <LocationSection />
                <PacificSection />
            </div>
            <div className="">
                <TextSection />
            </div>
        </div>
    );
}
