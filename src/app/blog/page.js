'use client'
import CommonBanner from '@/components/global/CommonBanner'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegClock } from 'react-icons/fa6'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGetBlogs = () => {
    setLoading(true)
    axios('https://starconcord.onrender.com/api/blogList', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        setBlogs(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  useEffect(() => {
    handleGetBlogs()
  }, [])

  return (
    <div className="container w-full mx-auto lg:space-y-20 space-y-7">
      <CommonBanner
        image="/static/images/common.jpg"
        title="Blog"
        page="Blog"
      />
      <div className="px-10 pb-20 space-y-10">
        <div className="grid items-start justify-center gap-5 lg:grid-cols-3">
          {loading ? (
            <div className="flex justify-center w-64 mx-auto mt-28">
              <p>Loading...</p>
            </div>
          ) : blogs.length > 0 ? (
            <>
              {blogs.map((item) => (
                <Link
                  href={`/blog-detail/${item._id}`}
                  state={{ id: item._id }}
                  key={item._id}
                >
                  <div className="space-y-3" key={item._id}>
                    <Image
                      src={`https://starconcord.onrender.com/uploads${item?.blogImage}`}
                      alt="offer1"
                      loading="lazy"
                      width={400}
                      quality={100}
                      height={400}
                      className="z-0 object-cover rounded-xl"
                    />
                    <div className="flex items-center gap-2">
                      <FaRegClock className="text-[#6C6C6C] text-lg" />
                      <p className="text-[#6C6C6C] text-lg">
                        {(new Date(item?.createdAt), 'dd, MMM yyyy')}
                      </p>
                    </div>
                    <p className="text-2xl font-bold">{item?.title}</p>
                    <p className="text-[#6C6C6C]">{item?.sortDescription}</p>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="flex justify-center w-64 mx-auto mt-28">
              <p>No Blogs...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
