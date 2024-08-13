'use client'
import axios from 'axios'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LuClock4 } from 'react-icons/lu'
import { useLocation } from "react-router-dom";


const BlogDetailsPage = () => {
  const [blogDetails, setBlogDetails] = useState({})
  const [loading, setLoading] = useState(false)

  
  const params = useParams();
  const { id } = params;


  const handleGetBlogDetails = () => {
    
    if (!id) return
    setLoading(true)
    axios.get(`https://starconcord.onrender.com/api/blogList/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        
        setBlogDetails(res.data.data || null);
        setLoading(false)
        console.log(res.data.data , "response👍💥😊😊");
      })
      .catch((err) => {
        console.log(err);
        
        setLoading(false)
      })
  }

  useEffect(() => {
    handleGetBlogDetails()
  }, [id])

  return (
    <div className="container w-full pb-10 mx-auto lg:space-y-20 space-y-7">
      <div className="relative md:h-80 h-60">
        <Image
          // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
          src="/static/images/common.jpg"
          alt='banner'
          loading="lazy"
          width={450}
          height={350}
          className="object-cover object-center w-full h-full rounded-2xl"
        />
        <div className="absolute w-full space-y-2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex items-center justify-center gap-2">
            <LuClock4 className="text-lg font-semibold text-primary_color" />
            <p className="text-lg font-semibold text-primary_color">
              {blogDetails
                ? format(Date(blogDetails?.createdAt), 'dd, MMM yyyy')
                : ''}
            </p>
          </div>
          <h1 className="text-2xl font-bold text-center text-black capitalize md:text-4xl">
          {blogDetails?.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Link href="/">
              <p className="text-lg text-black">Home</p>
            </Link>
            <IoIosArrowForward className="text-lg" />
            <p className="text-lg text-black">Blogs</p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center w-64 mx-auto mt-28">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="px-5 pb-20 space-y-20 lg:px-20">
            <div className="space-y-10">
              <div
                className="text-[#6C6C6C]"
                dangerouslySetInnerHTML={{
                  __html: blogDetails?.beforeBIContent,
                }}
              ></div>
              {blogDetails?.blogImage && (
                <Image
                  src={`https://starconcord.onrender.com/uploads${blogDetails.blogImage}`}
                  alt='banner'
                  loading="lazy"
                  width={650}
                  height={350}
                  quality={100}
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              )}
              <div
                className="text-[#6C6C6C]"
                dangerouslySetInnerHTML={{
                  __html: blogDetails?.afterBIContent,
                }}
              ></div>
            </div>
            <div className="space-y-10">
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: blogDetails?.beforeImgContent,
                }}
              ></div>
              <div className="grid gap-5 md:grid-cols-2">
              {blogDetails?.image1 && (
                  <div className="">
                    <Image
                      src={`https://starconcord.onrender.com/uploads${blogDetails.image1}`}
                      alt="offer1"
                      loading="lazy"
                      width={500}
                      quality={100}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-5">
                  <div
                    className="text-[#6C6C6C]"
                    dangerouslySetInnerHTML={{
                      __html: blogDetails?.afterImgContent,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
            {BlogData.map((item) => (
              <Link href="" key={item.id}>
                <div className="space-y-3" key={item.id}>
                  <Image
                    src={item.image}
                    alt="offer1"
                    loading="lazy"
                    width={400}
                    quality={100}
                    height={400}
                    className="z-0 object-cover"
                  />
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-[#6C6C6C] text-lg" />
                    <p className="text-[#6C6C6C] text-lg">{item.date}</p>
                  </div>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-[#6C6C6C]">{item.decs}</p>
                </div>
              </Link>
            ))}
          </div> */}
        </>
      )}
    </div>
  )
}

export default BlogDetailsPage
// const BlogData = [
//   {
//     id: 1,
//     image: '/static/images/blog1.png',
//     date: '16, Aug 2021',
//     title: 'Container freight cost',
//     decs:
//       'Are you struggling with cost and forecasting challenges? and you need solutions?',
//   },
//   {
//     id: 2,
//     image: '/static/images/blog2.png',
//     date: '16, Aug 2021',
//     title: 'Manage supply chain',
//     decs:
//       'Supply Chain Management is an important and dispensable part of most businesses',
//   },
//   {
//     id: 3,
//     image: '/static/images/blog3.png',
//     date: '16, Aug 2021',
//     title: 'Your Logistics Issues ',
//     decs:
//       'The global supply chains that so many retailers rely on is disrupted in the long time.',
//   },
// ]