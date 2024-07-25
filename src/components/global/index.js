'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'
import { FaCartShopping } from 'react-icons/fa6'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const [sticky, setSticky] = useState(false)
  const [active, setActive] = useState('Home')
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleLinkClick = (link) => {
    setActive(link)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])
  return (
    <div
      className={`bg-white duration-300 transition-all text-black w-full ${
        sticky && 'z-50 top-0 duration-300 transition-all fixed shadow-2xl'
      }`}
    >
      {/* mobile header start */}
      <div
        className={`lg:hidden bg-white space-y-5  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition duration-300 ease-linear`}
      >
        <div className="flex items-center justify-between p-5">
        <Link href="/">
            <Image
              src={'/static/images/logo2.png'}
              alt="logo"
              loading="lazy"
              width={100}
              height={100}
            />
          </Link>
          <div>
            <AiOutlineClose
              className="ml-auto text-2xl cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>

        <div className="px-20 space-y-6 text-left">
          {/* {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-[16px] font-semibold capitalize footer ${
                router.pathname === item.href ? 'text-gray-500' : 'text-black'
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))} */}
          {[
            { name: 'Home', href: '/' },
            { name: 'About us', href: '/about-us' },
            { name: 'Services', href: '/' },
            { name: 'Industries', href: '/' },
            { name: 'Articles', href: '/' },
            { name: 'Blogs', href: '/' },
            { name: 'Contact us', href: '/contact-us' },
          ].map((link) => (
            <Link key={link.name} href={link.href}>
              <li
                onClick={() => handleLinkClick(link.name)}
                className={`cursor-pointer text-[16px] font-semibold capitalize ${
                  active === link.name
                    ? 'text-black font-semibold'
                    : 'text-[#6C6C6C] font-normal'
                }`}
              >
                <span className="inline-block footer">{link.name}</span>
              </li>
            </Link>
          ))}
          <div className="flex items-center gap-3 text-center">
            <Button variant="disable" className="hover:text-primary_color">
              Login
            </Button>
            <Button variant="primary" className="">
              Signup
            </Button>
          </div>
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
        className="container py-3 mx-auto xl:flex xl:justify-between md:items-center"
        id="topMenu"
      >
        <nav className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <Image
              src={'/static/images/logo2.png'}
              alt="logo"
              loading="lazy"
              width={100}
              height={100}
            />
          </Link>
          <ul className="hidden gap-5 lg:flex">
            {/* {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer text-[16px] font-semibold capitalize inline-block footer ${
                  router.pathname === item.href ? 'text-gray-500' : 'text-black'
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))} */}
            {[
              { name: 'Home', href: '/' },
              { name: 'About us', href: '/about-us' },
              { name: 'Services', href: '/' },
              { name: 'Industries', href: '/' },
              { name: 'Articles', href: '/' },
              { name: 'Blogs', href: '/' },
              { name: 'Contact us', href: '/contact-us' },
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <li
                  onClick={() => handleLinkClick(link.name)}
                  className={`cursor-pointer text-[16px] font-semibold capitalize ${
                    active === link.name
                      ? 'text-black font-semibold'
                      : 'text-[#6C6C6C] font-normal'
                  }`}
                >
                  <span className="inline-block footer">{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>

          <div className="hidden gap-3 text-center lg:flex">
            <Button variant="disable" className="hover:text-white text-primary_color">
              Login
            </Button>
            <Button variant="primary" className="">
              Signup
            </Button>
          </div>
          <RiMenu3Line
            onClick={() => setOpenSidebar(true)}
            className={`lg:hidden text-3xl cursor-pointer ${
              sticky ? 'text-black' : 'text-black'
            }`}
          />
        </nav>
      </div>
    </div>
  )
}

export default Header
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Articles', href: '/articles' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact us', href: '/contact-us' },
]
