import React from 'react';

const PacificSection = () => {
    return (
        <div className="container w-full mx-auto space-y-5">
            <h2 className="text-4xl font-bold text-center text-black">
                Pacific Star Group
            </h2>
            <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-[#F7F9FB] space-y-3 rounded-xl p-3 md:p-6">
                    <div className="text-3xl font-bold md:text-5xl text-primary_color">
                        +2500
                    </div>
                    <div className="text-sm text-gray-600 md:text-base">
                        Employees
                    </div>
                </div>
                <div className="bg-[#F7F9FB] space-y-3 rounded-xl p-3 md:p-6">
                    <div className="text-3xl font-bold md:text-5xl text-primary_color">
                        500
                    </div>
                    <div className="text-sm text-gray-600 md:text-base">
                        TEUs Moved
                    </div>
                </div>
                <div className="bg-[#F7F9FB] space-y-3 rounded-xl p-3 md:p-6">
                    <div className="text-3xl font-bold md:text-5xl text-primary_color">
                        +50
                    </div>
                    <div className="text-sm text-gray-600 md:text-base">
                        Offices in Asia
                    </div>
                </div>
                <div className="bg-[#F7F9FB] space-y-3 rounded-xl p-3 md:p-6">
                    <div className="text-3xl font-bold md:text-5xl text-primary_color">
                        +250
                    </div>
                    <div className="text-sm text-gray-600 md:text-base">
                        Destinations Worldwide
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacificSection;
