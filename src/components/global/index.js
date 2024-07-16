"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={`p-2 bg-white duration-300 transition-all text-black w-full ${
        sticky && "z-50 top-0 duration-300 transition-all fixed shadow-2xl"
      }`}
    >
      {/* mobile header start */}
      <div
        className={`lg:hidden bg-white  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <AiOutlineClose
          className="ml-auto m-5 cursor-pointer text-black text-2xl"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="items-center text-center">
          <ul className="leading-10 pt-3">
            <Link href="/">
              <Image
                src={"/static/images/logo.png"}
                alt="logo"
                loading="lazy"
                width={150}
                height={150}
              />
            </Link>
            <Link href="/application">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                applications
              </li>
            </Link>
            <Link href="/software">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                software
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                smells
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                products
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                blog
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                contact
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                language
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer capitalize inline-block footer text-[16px]">
                <FaCartShopping />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="md:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="lg:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {/* mobile header end */}
      <div
        className="container mx-auto xl:flex xl:justify-between md:items-center"
        id="topMenu"
      >
        <nav className="flex container mx-auto justify-between items-center">
          <Link href="/">
            <Image
              src={"/static/images/logo.png"}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </Link>
          <ul className="gap-5 hidden lg:flex">
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                About us
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                Services
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                Industries
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                Article
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                Blog
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-[16px] capitalize inline-block footer">
                contact
              </li>
            </Link>
          </ul>
          <div className="flex text-center gap-3">
            <Button variant="disable" className="hover:text-primary_color">
              Login
            </Button>
            <Button variant="primary" className="">
              Signup
            </Button>
          </div>
          <RiMenu3Line
            onClick={() => setOpenSidebar(true)}
            className={`lg:hidden text-3xl cursor-pointer ${
              sticky ? "text-black" : "text-black"
            }`}
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;
