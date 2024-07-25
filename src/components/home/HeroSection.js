import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container relative w-full mx-auto">
      <Image
        src={'/static/images/home-banner.jpg'}
        alt="banner"
        loading="lazy"
        width={1000}
        height={1000}
        className="object-cover w-full h-full rounded-xl "
      />
      <div className="absolute md:top-0 -top-6 left-0 flex items-center justify-center w-full h-full">
        <div className="text-center">
          <p className="md:w-1/2 w-[90%] mx-auto text-base font-semibold text-center text-white lg:text-5xl">
            LCL Consolidators, Best Freight Forwarding & Shipping Agent In
            India
          </p>
          <p className="md:w-1/2 mx-auto mt-2 text-[10px] text-center text-white lg:mt-4 lg:w-auto lg:text-sm">
            No Matter The Location, We Have You Covered With Our Global Shipping
          </p>
        </div>
      </div>
      <div className="container absolute bottom-0 grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-1 p-3 mx-auto text-sm text-white lg:p-4 lg:text-lg">
        <div className='space-y-2'>
          <p>Booking</p>
          <hr className="w-[90%]"/>
        </div>
        <div className='space-y-2'>
          <p>Track & Trace</p>
          <hr className="md:w-[90%] w-[83%]" />
        </div>
        <div className='space-y-2'>
          <p>Schedule</p>
          <hr className="w-[90%]"/>
        </div>
        <div className='space-y-2'>
          <p>Rates</p>
          <hr className="md:w-[90%] w-[83%]" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
