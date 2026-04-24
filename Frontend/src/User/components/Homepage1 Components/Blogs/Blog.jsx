import React from "react";
import Blogbg1 from "../../../../assets/Images/blog-image1.jpg";
import Blogbg2 from "../../../../assets/Images/blog-image2.jpg";
import Blogbg3 from "../../../../assets/Images/blog-image3.jpg";
import '../../../../../src/app.css'

import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

/* Swiper Import */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const BlogCard = [
    {
      id: "1",
      BlogBg: Blogbg1,
      name: "Beckhum .H",
      heading: "The Entrepreneur Guide To Work-Life Balance",
    },
    {
      id: "2",
      BlogBg: Blogbg2,
      name: "Robert .Q",
      heading: "How Scale Your Business Without Losing Quality",
    },
    {
      id: "3",
      BlogBg: Blogbg3,
      name: "Devoid .H",
      heading: "Complete Guide Business Insurance Perfect",
    },
    {
      id: "4",
      BlogBg: Blogbg1,
      name: "Beckhum .H",
      heading: "The Entrepreneur Guide To Work-Life Balance",
    },
    {
      id: "5",
      BlogBg: Blogbg2,
      name: "Robert .Q",
      heading: "How Scale Your Business Without Losing Quality",
    },
  ];

  return (
    <section className="Blog min-h-screen w-full p-20 bg-[#fbf9f9]">
      <div className="heading flex items-center justify-between">
        <div className="left flex flex-col gap-3">
          <button className="w-fit px-6 py-2 rounded-full tracking-widest font-bold bg-[#C6D936]">
            NEW & BLOGS
          </button>

          <h1 className="text-5xl font-bold">Our News & Blogs</h1>
        </div>

        <div className="right">
          <button className="px-8 py-4 font-medium bg-[#1A4137] text-white">
            All News & Blogs
          </button>
        </div>
      </div>

      {/* Swiper Added */}
      <div className="mt-8  pb-2 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
 clickable:true,
 el: ".custom-pagination",
 bulletClass: "custom-bullet",
 bulletActiveClass: "custom-bullet-active",
}}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-20"
        >
          {BlogCard.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <div className="py-10 flex items-center relative group cursor-pointer">
                  
                  {/* Image */}
                  <img
                    src={elem.BlogBg}
                    className="
                      h-100 
                      w-100 
                      object-cover
                      transition-all 
                      duration-500
                      group-hover:grayscale
                    "
                  />

                  {/* Content Box */}
                  <div
                    className="
                      w-85
                      h-40
                      bg-white
                      absolute
                      left-7
                      -bottom-10
                      rounded-2xl
                      shadow-xl
                      flex
                      flex-col
                      items-start
                      justify-start
                      p-4
                      gap-2
                      transition-all
                      duration-500
                      group-hover:bg-[#163839]
                      group-hover:text-white
                    "
                  >
                    <div className="flex items-center justify-center gap-10">
                      <p className="flex items-center gap-2 transition duration-500 group-hover:text-white">
                        <FaRegCircleUser />
                        {elem.name}
                      </p>

                      <p className="flex items-center gap-2 transition duration-500 group-hover:text-white">
                        <FaRegComments />
                        Comments (03)
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold leading-9 transition duration-500 group-hover:text-white">
                        {elem.heading}
                      </h1>
                    </div>

                    <div>
                      <button className="flex items-center gap-2 font-medium transition duration-500 group-hover:text-white">
                        Read More
                        <IoArrowForwardCircle className="text-[#1A4137] group-hover:text-white transition duration-500" />
                      </button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination mt-12 flex justify-center items-center gap-4"></div>
      </div>
    </section>
  );
};

export default Blog;