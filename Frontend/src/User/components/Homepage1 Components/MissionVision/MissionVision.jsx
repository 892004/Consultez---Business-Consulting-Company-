import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import Choose from "../../../../assets/Images/choose-image1.jpg";
import { circularProgressWithCount } from "../../../utils/animation";
import { MdArrowOutward } from "react-icons/md";
import { useLayoutEffect } from "react";
import gsap from "gsap";


const MissionVision = () => {
  const circle1 = useRef(null);
  const text1 = useRef(null);
  const boxRef = useRef(null);

  const circle2 = useRef(null);
  const text2 = useRef(null);

  const [active, setActive] = useState("About Us");
  const [animate, setAnimate] = useState(false);

  const tabs = ["About Us", "Our Mission", "Our Vision"];

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    circularProgressWithCount(circle1.current, text1.current, 95, boxRef.current);
    circularProgressWithCount(circle2.current, text2.current, 50, boxRef.current);
  });

  return () => ctx.revert();
}, []);


  return (
    <section className="Mission-Vision min-h-screen mt-20 w-full flex p-10">
      
      {/* LEFT */}
      <div className="left w-[60%] p-20 flex flex-col gap-6">
        <button data-aos= "fade-right" className="w-fit px-6 py-2 rounded-full tracking-widest font-bold bg-[#C6D936]">
          MISSION VISION
        </button>

        <h1 data-aos= "fade-right" className="text-5xl font-bold leading-14">
          We Handle Complexities,
          <br />
          So You Can Drive Growth
          <br />
          And Success.
        </h1>

        {/* Tabs */}
        <div className="flex gap-10 border-b-2 border-gray-200 mt-6">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setAnimate(true);
                setTimeout(() => setAnimate(false), 300);
              }}
              className={`pb-3 font-semibold ${
                active === item
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`mt-6 transition-all duration-300 ${
            animate ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <p className="text-gray-600 leading-7">
            At vero eos accusamus dignissimos ducimus blanditiis.
          </p>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-2 gap-4 mt-6 font-bold">
          <p className="flex items-center gap-2"><FaCheck /> Optimized Sprint Planning</p>
          <p className="flex items-center gap-2"><FaCheck /> Incremental Delivery</p>
          <p className="flex items-center gap-2"><FaCheck /> Continuous Improvement</p>
          <p className="flex items-center gap-2"><FaCheck /> Delivering Innovative</p>
        </div>

        <button className="mt-6 w-50 py-3 bg-[#1A4137] text-white cursor-pointer">
          Discover More
        </button>
      </div>

      {/* RIGHT */}
      <div className="right w-[40%] relative">
        <img src={Choose} className="h-full w-full object-cover" />

        {/* 🔥 PROGRESS BOX */}
        <div ref={boxRef} className="absolute -bottom-10 -left-20 bg-[#C6D936] p-8 w-[320px]">

          {/* FIRST */}
          <div className="flex items-center gap-4">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="35" stroke="#d9e26a" strokeWidth="6" fill="none" />
              <circle
                ref={circle1}
                cx="50"
                cy="50"
                r="35"
                stroke="black"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <span className="absolute left-17.5 text-2xl"><MdArrowOutward /></span>
            <div>
              <h1 ref={text1} className="text-3xl font-bold">10%</h1>
              <p className="font-semibold">Project Done</p>
            </div>
          </div>

          {/* LINE */}
          <div className="border-t border-[#b7c92d] my-6"></div>

          {/* SECOND */}
          <div className="flex items-center gap-4">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="35" stroke="#d9e26a" strokeWidth="6" fill="none" />
              <circle
                ref={circle2}
                cx="50"
                cy="50"
                r="35"
                stroke="black"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <span className="absolute left-17.5 text-2xl"><MdArrowOutward /></span>
            <div>
              <h1 ref={text2} className="text-3xl font-bold">10%</h1>
              <p className="font-semibold">Complete Project</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;