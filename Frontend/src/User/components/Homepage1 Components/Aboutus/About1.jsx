import React, { useState } from "react";
import AboutImg1 from "../../../../assets/Images/about-image1.jpg";
import AboutImg2 from "../../../../assets/Images/about-image2.jpg";
import aboutInfo from "../../../../assets/Images/about-info.png";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { LiaPencilRulerSolid } from "react-icons/lia";
import Aboutuser from '../../../../assets/Images/about-user.png'
import Sign from '../../../../assets/Images/signature.png'
const About1 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const maxMove = 10;

    const x = Math.max(
      Math.min((e.clientX - (rect.left + rect.width / 2)) / 50, maxMove),
      -maxMove,
    );

    const y = Math.max(
      Math.min((e.clientY - (rect.top + rect.height / 2)) / 50, maxMove),
      -maxMove,
    );

    setPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="Aboutus min-h-screen w-full p-8 flex items-center justify-center"
    >
      {/* LEFT SIDE */}
      <div className="left relative h-full w-[40%] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
        {/* ✅ AboutImg1 with effect */}
        <div className="relative h-[96%] w-[96%] group overflow-hidden rounded-xl">
          <img
            src={AboutImg1}
            className="h-full w-full object-cover transition-all duration-500"
            style={{
              transform: `translate(${-pos.x}px, ${-pos.y}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />

          {/* B/W overlay */}
          <div
            className="absolute top-0 left-0 w-full h-0 
                          bg-black/30 backdrop-grayscale 
                          group-hover:h-full 
                          transition-all duration-1000"
          ></div>
        </div>

        {/* SMALL FLOATING BOX */}
        <div
          className="absolute h-[320px] w-[280px] bg-white rounded-xl -bottom-20 -right-10 p-2 shadow-lg"
          style={{
            transform: `translate(${-pos.x}px, ${-pos.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="relative h-full w-full group overflow-hidden rounded-lg">
            <img
              src={AboutImg2}
              className="h-full w-full object-cover transition-all duration-500"
            />

            {/* B/W overlay */}
            <div
              className="absolute top-0 left-0 w-full h-0 
                            bg-black/30 backdrop-grayscale 
                            group-hover:h-full 
                            transition-all duration-1000"
            ></div>
          </div>

          {/* INFO IMAGE */}
          <img
            src={aboutInfo}
            className="absolute top-[120px] -left-[120px] rounded-xl animate-slideLR"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right h-full w-1/2 relative px-20 py-4 flex flex-col items-start justify-start gap-4">
        <button className="bg-[#C6D936] px-10 py-2 rounded-full font-semibold text-sm">
          ABOUT US
        </button>
        <p className="text-5xl font-bold leading-15">
          The Journey Behind Our <br />
          Business Success
        </p>

        <span className="text-xl text-gray-600">
          Consultez is the go-to hub for early adopters and innovation <br />
          enthusiasts, offering cutting-edge technology
        </span>

        {/* Creative Solution  */}
        <div className="creative-solution flex flex-row gap-1 cursor-pointer group">
          <span
            className="text-7xl transform transition duration-500 
                   group-hover:rotate-y-[360deg]"
          >
            <HiOutlineLightBulb />
          </span>

          <div className="creative-content flex flex-col gap-2">
            <span className="text-xl font-semibold">Creative Solutions</span>
            <p className="text-xl text-gray-600">
              In today's competitive business landscape, the need <br />
              for efficient IT solutions has been more critical.
            </p>
          </div>
        </div>

        {/*Actionable Solutions */}
        <div className="creative-solution flex flex-row gap-1 cursor-pointer group">
          <span
            className="text-7xl transform transition duration-500 
                   group-hover:rotate-y-[360deg]"
          >
            <LiaPencilRulerSolid />
          </span>

          <div className="creative-content flex flex-col gap-2">
            <span className="text-xl font-semibold">Actionable Solutions</span>
            <p className="text-xl text-gray-600">
              Innovation is the key to staying ahead in a changing
              <br /> world. We harness cutting-edge technology
            </p>
          </div>
        </div>

        {/* Business Success */}
        <div className="bussiness-success">
          <span className="text-xl font-semibold">Business Success</span>

          {/* Track (background line) */}
          <div className="w-xl h-3 mt-5 bg-gray-300 rounded-full overflow-hidden">
            {/* Fill (progress) */}
            <div className="h-full w-[75%] bg-[#07504d] rounded-full"></div>
          </div>
        </div>



        <div className="flex flex-row items-center justify-center gap-50 mt-12">
           <button className="py-4 w-60 bg-[#1A4137] text-white font-medium cursor-pointer">Find Services</button>

           <div className="user flex flex-row items-center justify-center gap-4">
            <div className=" px-1 py-1 w-15 rounded-full bg-[#C6D936]">
                <img src={Aboutuser} className="rounded-full" /> 
            </div>

                <div className="user-info flex flex-col gap-2">
                  <img src={Sign}  />
                  <span className="text-[#07504d]">Founder</span>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
