import React from "react";
import LeftTest from "../../../../assets/Images/testimonial-three-icon.png";
import RightProfile from "../../../../assets/Images/testimonial-three-image.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import DualCircle from '../../../../assets/Images/dual-circle.png'
import '../../../../../src/App.css'
const Testimonial = () => {
  return (
    <section className="Testimonial min-h-screen flex flex-col p-20">
      <div className="container h-190 rounded-4xl w-full bg-[#1A4137] flex">
        <div className="left h-full w-[60%]  flex flex-col px-10 py-20 gap-8">
          <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm">
            TESTIMONIAL
          </span>

          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-5xl text-white leading-14">
              What Our Customers <br />
              Say <span className="font-normal">About US</span>
            </h1>

            <div className="flex gap-3">
              <button className="swiper-btn-prev w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl">
                ‹
              </button>
              <button className="swiper-btn-next w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl">
                ›
              </button>
            </div>
          </div>

          <p className="text-xl text-white leading-12 border-b border-white/20 pb-5">
            Ascend the mountain not to plant your flag, but to embrace the{" "}
            <br /> challenge, savour the journey, and marvel at the view. Climb
            to
            <br /> experience the world, not for the world to notice you. This
            is why they
            <br /> stand out journey, and marvel at the view experience the
            world, not to
            <br /> notice
          </p>

          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-white text-xl">
              Robert J.Hare /{" "}
              <span className="text-sm font-normal">Business Owner</span>
            </h1>
            <img src={LeftTest} alt="" srcset="" />
          </div>
        </div>
        <div className="right h-full w-[40%] py-30 px-10 relative overflow-hidden ">
          <div className="container h-100 w-100 bg-white/20 rounded-4xl relative z-30">
            <img src={RightProfile} className="absolute -top-10 scale-120" />
          {/* QUOTE CIRCLE */}
          <div className="absolute top-20 -right-10 bg-[#C6D936] w-20 h-20  rounded-full flex items-center justify-center text-4xl text-[#163839]">
            <RiDoubleQuotesR />
          </div>


          <h2 className="bg-[#C6D936] absolute -bottom-25 -rotate-5 text-4xl px-12 py-8 rounded-full font-bold">"Awesome Work"</h2>
          </div>

          <img src={DualCircle} className="absolute bottom-10 -right-20 -rotate-30 scale-110 animate-slow-spin "/>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
