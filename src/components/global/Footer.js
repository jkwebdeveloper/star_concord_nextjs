import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <div className="container w-full">
            <div className="relative grid items-start gap-0 lg:grid-cols-2">
                {/* <div>
                    <Image
                        src={'/static/images/footer.png'}
                        alt="logo"
                        loading="lazy"
                        width={550}
                        height={550}
                        className="relative w-full"
                    />
                    <p className="absolute flex items-center justify-center">
                        Find Our Office at your location
                    </p>
                </div>
                <div>
                    <Image
                        src={'/static/images/footer.png'}
                        alt="logo"
                        loading="lazy"
                        width={550}
                        height={550}
                        className="relative w-full"
                    />
                    <p className="absolute flex items-center justify-center">
                        Find Our Office at your location
                    </p>
                </div>

                <div className="relative text-white">
                    <Image
                        src={'/static/images/footer.png'}
                        alt="logo"
                        loading="lazy"
                        width={550}
                        height={550}
                        className="relative w-full"
                    />
                    <div className="absolute grid items-start gap-0 text-black lg:grid-cols-2">
                        <div className="pl-10">
                            <p>Quick Links</p>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Industries</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>Article</li>
                            </ul>
                        </div>
                        <div className="pl-10">
                            <p>Services</p>
                            <ul>
                                <li>LCL Consolidators In Singapore</li>
                                <li>Sea Freight</li>
                                <li>Air Freight</li>
                                <li>3PL Services</li>
                                <li>Project Cargo Handling</li>
                                <li>Warehousing</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
