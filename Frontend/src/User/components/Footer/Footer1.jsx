import React, { useState } from "react";
import logo from "../../../assets/Images/logo-light.png";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaVimeoV } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import footerImg from "../../../assets/Images/footer-one-shape.png";
import { MdArrowOutward } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer1 = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <section className="Footer min-h-[650px] w-full bg-[#163839]  flex">
      {/* Vertical Logo Strip */}
      <div className="left-container relative w-[110px] border-r border-white/20 flex flex-col items-center justify-center gap-70">
        {/* Top Logo */}
        <img src={logo} className="rotate-[-90deg] scale-200" />

        {/* menu */}
        <button
          onClick={() => setOpenMenu(true)}
          className="text-white text-3xl cursor-pointer"
        >
          <CgMenuGridO />
        </button>

        {/* overlay */}

        {/* Dark Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[99] transition-all duration-500
 ${OpenMenu ? "opacity-100 visible" : "opacity-0 invisible"}
 `}
          onClick={() => setOpenMenu(false)}
        ></div>

        {/* Offcanvas Panel */}
      <div
 className={`
 fixed top-0 right-0 h-screen w-[330px] bg-[#1d1d1d] z-[100]
 transform transition-transform duration-500
 ${OpenMenu ? "translate-x-0" : "translate-x-full"}
 `}
>
          {/* Close */}
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-8 right-10 text-white text-xl cursor-pointer px-2 bg-white/30"
          >
            ×
          </button>

          <div className=" text-white mt-3 py-3.5">
            <div className="border-b  border-white/20 pb-3 px-4">
              <img src={logo} className="w-45" />
            </div>

            <div className="content mt-5 px-5 border-b border-white/20">
              <h2 className="text-2xl font-bold mb-3">About Us</h2>
              <p className="text-white/70 pb-5 w-full">
                Consultez is the go-to hub for <br /> early adopters and
                innovation <br /> enthusiasts, offering cutting <br />
                technology widely.
              </p>
            </div>

            <div className="p-2 mr-20">
              <div className="py-5 space-y-8 ">
                <div className="flex flex-row items-start justify-center gap-2">
                  <span className="text-4xl">
                    <IoCallOutline />
                  </span>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-[#C6D936] text-sm mb-2">CALL NOW</p>
                    <h3 className="text-lg font-medium">+92 (8800) - 98670</h3>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <span className="text-4xl">
                      <MdOutlineMailOutline />
                    </span>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-[#C6D936] text-sm mb-2">SEND EMAIL</p>
                      <h3 className="text-lg font-medium">help@company.com</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <span className="text-4xl">
                      <LuAlarmClock />
                    </span>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-[#C6D936] text-sm mx-2">HOURS</p>

                      <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium">
                          Mon - Sat 8:00 - 6:30,
                        </h3>
                        <p className="text-lg font-medium">Sunday - CLOSED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-footer absolute bottom-0 border h-12 w-full border-white/20 flex flex-row items-center justify-evenly text-white text-xl">
                <span className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><RiTwitterXLine /></span>
                <span className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><FaFacebookF /></span>
                <span className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><FaPinterest /></span>
                <span className="mr-5 duration-300 hover:text-[#1A4137]"><FaInstagram /></span>
          </div>
        </div>
      </div>

      <div className="left w-[70%] bg-[#163839] flex flex-col">
        <div className="left-top relative h-30 w-full border-b border-white/20 flex flex-row items-center justify-around ">
          {/* Call */}
          <div className="call flex flex-row items-center text-white text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full">
              <IoIosCall />
            </span>

            <div className="call-conatent">
              <p>Call Us:</p>
              <p className="font-bold ">+1-2345-2345-54</p>
            </div>
          </div>

          {/* Email */}
          <div className="call flex flex-row items-center text-white text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full">
              <MdEmail />
            </span>

            <div className="call-conatent">
              <p>Email Us:</p>
              <p className="font-bold ">info@help.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="call flex flex-row items-center text-white text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full">
              <MdLocationPin />
            </span>

            <div className="call-conatent">
              <p>Hours:</p>
              <p className="font-bold ">Daily : 8 AM to 5PM</p>
            </div>
          </div>
        </div>

        <div className="left-middle h-110   w-full flex flex-row items-start justify-around p-20 ">
          {/* Services */}
          <div className="service">
            <h3 className="text-white text-2xl font-semibold">Services</h3>
            <ul className="text-white flex flex-col gap-5 py-8">
              <li>Digital Marketing</li>
              <li>Innovation Space </li>
              <li>Competitive Analysis</li>
              <li>Market Research</li>
              <li>HR Management</li>
            </ul>
          </div>

          {/* pages  */}
          <div className="Pages">
            <h3 className="text-white text-2xl font-semibold">Pages</h3>
            <ul className="text-white flex flex-col gap-5 py-8">
              <li>Our Blog</li>
              <li>Success Stories</li>
              <li>Customer Review</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Sign up for  news letter */}
          <div className="Sign-up ">
            <h3 className="text-white text-2xl font-semibold">
              Signup Newsletter
            </h3>

            <div className="py-6 flex flex-col gap-5">
              <input
                type="text"
                className="bg-white px-4 font-medium text-lg py-3 rounded-full"
                placeholder="Email Address"
              />
              <button className="py-3 w-70 px-19 bg-[#C6D936] rounded-full cursor-pointer flex flex-row items-center gap-2">
                Sign Up Now <LiaAngleRightSolid />
              </button>
            </div>

            <div className="social-icons flex flex-row text-white gap-5 text-lg">
              <span className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaFacebookF />
              </span>
              <span className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <RiTwitterXLine />
              </span>
              <span className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaVimeoV />
              </span>
              <span className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaPinterestP />
              </span>
            </div>
          </div>
        </div>

        <div className="left-bottom w-full border-t border-white/10 flex items-start justify-start p-10 ">
          <span className="text-white/60">
            @ Copyright 2025. All Right by{" "}
            <span className="text-[#d5ad4b] hover:underline cursor-pointer">
              Kodesolution
            </span>
          </span>
        </div>
      </div>

      <div className="right w-[30%] bg-[#D4F25A] relative flex items-start justify-center">
        <img
          src={footerImg}
          className="h-full w-full object-cover absolute top-0"
        />
        <div className="content p-8">
          <h1 className="text-black text-center text-4xl font-bold py-10">
            Have a Project in
            <br /> your Mind?
          </h1>
          <div className="contactus group relative flex items-center justify-center gap-2 h-60 w-60 overflow-hidden bg-[#1A4137] ml-5 rounded-full text-xl text-white font-bold z-50 cursor-pointer">
            Contact us
            <MdArrowOutward className="transition-transform duration-500 group-hover:rotate-[406deg] " />
            <div
              className="
      bottom-round
      h-20 
      w-20 
      bg-[#C6D936] 
      rounded-full
      absolute 
      bottom-0 
      right-0
      transition-all
      duration-500
      group-hover:h-60
      group-hover:w-60
      group-hover:-z-10
  "
            ></div>
          </div>
        </div>
        <div className="hours flex flex-col absolute bottom-30 text-lg text-center">
          <p className="text-[#1A4137] font-bold">09 : 00 AM - 10 : 30 PM</p>
          <span className="text-[#1A4137] ">Saturday - Thursday</span>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
