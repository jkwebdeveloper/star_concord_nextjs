import React from 'react';
import { Button } from '../ui/button';

const TransportSection = () => {
    return (
        <div className="container w-full mx-auto">
            <div className="grid items-center gap-5 lg:grid-cols-2 xl:gap-40 md:gap-20">
                <div className="space-y-4 lg:space-y-8">
                    <h2 className="text-base font-semibold text-[#1B1B1B]">
                        Logistics Transportation
                    </h2>
                    <h1 className="text-lg font-bold lg:text-5xl">
                        We Provide <br /> Full Range Global <br /> Logistics
                        Solution
                    </h1>
                    <hr className="w-1/5 h-0.5 border-t-0 bg-primary_color dark:bg-white/10" />
                    <p className="text-[#1B1B1B] text-base ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock.
                    </p>
                    <div className="">
                        <Button variant="primary" className="">
                            More Details
                        </Button>
                    </div>
                </div>
                <div className="justify-center w-full space-y-8">
                    <h2 className="text-base font-semibold text-[#1B1B1B]">
                        Transportation Company
                    </h2>
                    <div className="bg-[#F7F9FB] space-y-3 rounded-xl p-6">
                        <div className="text-5xl font-bold text-primary_color">
                            78291
                        </div>
                        <div className="text-gray-600">Delivered Packages</div>
                    </div>
                    <div className="bg-[#F7F9FB] space-y-3 rounded-xl mt-3 p-6">
                        <div className="text-5xl font-bold text-primary_color">
                            12571
                        </div>
                        <div className="text-gray-600">Satisfied Clients</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportSection;
