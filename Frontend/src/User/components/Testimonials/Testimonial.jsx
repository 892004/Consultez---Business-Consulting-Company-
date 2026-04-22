import React, { useRef } from "react";
import TestimonialBg from "../../../assets/Images/testimonial-shape.png";
import Test1 from "../../../assets/Images/testimonial-image1.jpg";
import Test2 from "../../../assets/Images/testimonial-image2.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const Testimonials = [
    {
      id: "1",
      profile: Test1,
      para: "Ascend the mountain not to plant your flag, but to embrace the challenge,save our the journey, and marvel at the view.Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
      name: "Jacob Jones",
      occupation: "Business Owner",
    },
    {
      id: "2",
      profile: Test2,
      para: "Ascend the mountain not to plant your flag, but to embrace the challenge,save our the journey, and marvel at the view.Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
      name: "Dianne Russell",
      occupation: "CEO & Founder",
    },
  ];

  return (
    <section className="Testimonial min-h-screen w-full relative mt-20 overflow-hidden">
      {/* BG IMAGE */}
      <img
        src={TestimonialBg}
        className="absolute top-0 h-full w-full object-cover"
      />

      {/* SWIPER */}
      <Swiper
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Testimonials.map((elem, idx) => {
          return (
            <SwiperSlide key={elem.id}>
              <div className="container flex flex-row items-center justify-between relative z-10 p-30">
                {/* LEFT IMAGE */}
                <div className="relative">
                  <img
                    src={elem.profile}
                    alt=""
                    className="w-[300px] h-[300px] rounded-full object-cover"
                  />

                  {/* QUOTE CIRCLE */}
                  <div className="absolute top-0 right-0 bg-[#C6D936] w-20 h-20  rounded-full flex items-center justify-center text-4xl text-[#163839]">
                    <RiDoubleQuotesR />
                  </div>

                  {/* STARS */}
                  <div className="mt-6 ml-16 border border-gray-200 rounded-full px-6  text-2xl py-2 flex gap-1 w-fit text-[#FF8C22]">
                    ★ ★ ★ ★ ★
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="content flex flex-col w-[60%]">
                  <p className="text-3xl font-medium leading-relaxed text-gray-600">
                    {elem.para}
                  </p>

                  <div className="flex flex-row items-center justify-between">
                    <h1 className="mt-6 text-2xl font-semibold">
                      {elem.name} /{" "}
                      <span className="text-gray-500 text-sm">
                        {elem.occupation}
                      </span>
                    </h1>

                    <div className="flex items-center gap-5">
                      <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="px-4 py-4 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <IoIosArrowRoundBack className="text-xl" />
                      </button>

                      <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="px-4 py-4  rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <IoIosArrowRoundForward className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
