import React, { useState, useEffect } from "react";
import Logo2 from "../../../../assets/Images/logo-2.png";
import LogoDark from "../../../../assets/Images/logo.png"; // add dark logo if you have it
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Navbar6 = () => {
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
  className={`Navbar6 fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center justify-between
  ${
    scrolled
      ? "w-full rounded-none h-22 px-30 bg-white shadow-lg border-b border-gray-200"
      : "w-[92%] top-8 rounded-full h-18 px-10 bg-[#063232] border border-white/20"
  }`}
>

      {/* Logo */}
    <img
  src={scrolled ? LogoDark : Logo2}
  alt=""
/>

      {/* Links */}
      <ul
        className={`relative flex items-center justify-center gap-8 transition-colors duration-500
            ${scrolled ? "text-gray-800" : "text-white"}`}
      >
        {/* Home Page Drop down */}
        <Link className="homepage relative text-[16px] flex items-center justify-center gap-2 transition-colors">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
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

        {/* Page Drop down */}
        <Link className="page relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          {scrolled ? "Pages" : "Page"}{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
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

        {/* Service Drop Down */}
        <Link className="service relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
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

        {/* Portfolio Drop Down */}
        <Link className="portfolio relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
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

        {/* News Drop down  */}
        <Link className="news relative text-[16px] flex items-center justify-center gap-2 transition-colors">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
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
        <Link className="text-[16px]  transition-colors">Contact</Link>
      </ul>

   {
  !scrolled && (
    <div className="btn translate-x-8">
      <button className="bg-[#E34B1B] px-10 py-4 rounded-full text-white cursor-pointer">
        Get Quote Now
      </button>
    </div>
  )
}
    </section>
  );
};

export default Navbar6;
