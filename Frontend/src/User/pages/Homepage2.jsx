import React, { useState } from "react";
import "../../../src/App.css";
import BannerShape from "../../assets/Images/banner-two-shape.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "../../../src/App.css";
import circleBg from "../../assets/Images/banner-two-circle.png";
import profileImg from "../../assets/Images/banner-two-image.png";
import Shape from "../../assets/Images/banner-two-star.png";

const Homepage2 = () => {
  const [openVideo, setopenVideo] = useState(false);
  return (
    <>
      <section className="Homepage min-h-screen w-full flex flex-row items-center justify-center relative bg-[#F8F5F2]">
        <div className="left h-full w-[50%] relative flex items-center justify-start p-30">
          <img src={BannerShape} className="absolute left-0 top-10" />

          <div className="content flex flex-col items-start gap-3 z-30">
            <p className="w-60 py-2 font-semibold text-sm bg-[#C6D936] flex items-center justify-center rounded-full ">
              Innovation and Creativity
            </p>
            <h1 className="text-7xl leading-20">
              <span className="font-bold">Business</span>Consultant <br />
              <span className="font-bold">& Growth Solution</span>
            </h1>

            <p className="text-lg font-medium text-gray-500">
              Consultez is the place where early adopters and innovation
              enthusiasts
              <br /> discover vibrant, imaginative technology before it reaches
            </p>

            <div className="bottom flex flex-row items-center gap-10">
              <button className="flex items-center justify-center px-10 py-3 rounded-full bg-[#1A4137] text-white gap-2 cursor-pointer">
                Get Started <FaAngleRight />
              </button>

              <div className="relative flex items-center justify-center w-20 h-20">
                {/* Large Ring */}
                <span className="absolute w-20 h-20 rounded-full border border-gray-300 pulse1"></span>

                {/* Medium Ring */}
                <span className="absolute w-16 h-16 rounded-full border border-gray-300 pulse2"></span>

                {/* Small Ring */}
                <span className="absolute w-12 h-12 rounded-full border border-gray-300 pulse3"></span>

                {/* Play Button */}
                <button
                  onClick={() => setopenVideo(true)}
                  className="relative z-10 text-sm border p-3 rounded-full flex items-center justify-center cursor-pointer bg-white"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>

        {openVideo && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
            <button
              onClick={() => setopenVideo(false)}
              className="absolute top-8 right-10 text-white text-4xl cursor-pointer"
            >
              ×
            </button>
            <div className="w-full h-full max-w-[90%]">
              <iframe
                width="1000"
                height="500"
                src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mt-30 ml-50"
              ></iframe>
            </div>
          </div>
        )}

        <div className="right h-full w-[50%] p-30 flex items-center justify-center relative">
          <img src={circleBg} className="animate-slow-spin scale-125" />
          <img
            src={profileImg}
            className="absolute left-20 scale-90 animate-slideLR"
          />
          <img
            src={Shape}
            className="absolute top-20 left-0 animate-zizo will-change-transform"
          />
          <img
            src={Shape}
            className="absolute top-20 right-10 animate-zizo will-change-transform"
          />
        </div>
      </section>
    </>
  );
};

export default Homepage2;
