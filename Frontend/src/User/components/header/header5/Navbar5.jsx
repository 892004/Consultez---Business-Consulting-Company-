import React, { useState, useEffect } from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import "../header4/navbar.css";
import { IoSearchOutline } from "react-icons/io5";

const Navbar5 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`Navbar fixed top-0 left-0 right-0 z-50 w-full border-b border-black/20 text-black flex items-center justify-between transition-all duration-300 ${scrolled ? "h-22 bg-white shadow-md px-30" : "h-22 bg-white"}`}
    >
      <img src={Logo} className="px-10" />

      {/* Links */}
      <ul className="relative flex items-center justify-center gap-8 text-black">
        <Link className="homepage relative text-[16px] flex items-center justify-center gap-2">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Home page dp */}
          <div
            className="home-dp absolute w-60  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
          transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/"
            >
              Home Page 1
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage2"
            >
              Home Page 2
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage3"
            >
              Home Page 3
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage4"
            >
              Home Page 4
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage5"
            >
              Home Page 5
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage6"
            >
              Home Page 6
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage7"
            >
              Home Page 7
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/single-style"
            >
              Single Style
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/dark-style"
            >
              Dark Style{" "}
            </Link>
            <Link
              className="duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/RTL-style"
            >
              RTL Style
            </Link>
          </div>
        </Link>
        <Link className="page relative text-[16px] flex items-center justify-center gap-2">
          Page{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Page dp */}
          <div
            className="page-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
          transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/about"
            >
              About
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/faqs"
            >
              Faq
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/team"
            >
              Team
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/testimonial"
            >
              Testimonials
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/error"
            >
              404
            </Link>
          </div>
        </Link>
        <Link className="service relative  text-[16px] flex items-center justify-center gap-2">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Service Drop down */}
          <div
            className="service-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
            transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/about"
            >
              Services
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/faqs"
            >
              Services details
            </Link>
          </div>
        </Link>
        <Link className="portfolio relative text-[16px] flex items-center justify-center gap-2">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Portfolio dp */}
          <div
            className="portfolio-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
          transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/about"
            >
              Portfolio
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/faqs"
            >
              Portfolio details
            </Link>
          </div>
        </Link>
        <Link className="news relative text-[16px] flex items-center justify-center gap-2">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* News Drop down  */}
          <div
            className="news-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
           transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/about"
            >
              News Grid
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/faqs"
            >
              News details
            </Link>
          </div>
        </Link>
        <Link className="text-[16px]">Contact</Link>
      </ul>

      {/* Search - always visible */}

      <span
        className={`search relative cursor-pointer text-3xl transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
      >
        <IoSearchOutline />
      </span>

      {/* Phone - hide on scroll */}
      <div
        className={`call flex gap-3 text-black transition-all duration-300 ${scrolled ? "hidden" : "flex"}`}
      >
        <span className="p-4 rounded-full bg-gray-200/60 text-xl font-bold">
          <IoMdCall />
        </span>
        <div className="content flex flex-col text-black">
          <span className="text-sm">PHONE :</span>
          <span className="font-bold">+00 2222 222 00</span>
        </div>
      </div>

      {/* Button - hide on scroll */}
      <button
        className={`flex items-center justify-center gap-2 cursor-pointer h-full w-50 bg-[#C6D936] transition-all duration-300 ${scrolled ? "hidden" : "flex"}`}
      >
        Get Quote Now
      </button>
    </section>
  );
};

export default Navbar5;
