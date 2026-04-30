import React from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const Navbar3 = ({ hideTopbar }) => {
  return (
<section className={`px-10 flex items-center transition-all duration-300 ${
  hideTopbar ? "justify-between h-22 gap-10 bg-white" : "justify-around py-10 bg-[#FAF0E7]"
}`}>
      {/* Logo */}
      <img src={Logo} alt="" srcset="" />
      {/* Links */}
  <ul
  className={`flex items-center gap-8 transition-all duration-300 ${
    hideTopbar
      ? "ml-auto bg-transparent px-0 py-0 rounded-none"
      : "bg-white px-20 py-5 rounded-full"
  }`}
>

        {/* Home-page Drop dowm */}
        <Link className="homepage relative text-[16px] flex items-center justify-center gap-2">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>

          <div
            className="home-dp absolute w-60  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl"
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






      {/* Page Drop Down */}
        <Link className="page relative text-[16px] flex items-center justify-center gap-2">
          Page{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>

          <div
              className="page-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl"
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




















        {/* Service Drop-Down */}

        <Link className="service relative text-[16px] flex items-center justify-center gap-2">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
           <div
              className="service-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl"
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





        {/* Portfolio drop down */}
        <Link className="portfolio relative text-[16px] flex items-center justify-center gap-2">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
                     <div
              className="portfolio-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl"
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



        {/* NEWS drop down */}
        <Link className="news relative text-[16px] flex items-center justify-center gap-2">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
           <div
              className="news-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl"
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
<div className={`call flex items-center gap-3 transition-all duration-300 ${
  hideTopbar ? "opacity-0 invisible w-0 overflow-hidden" : "opacity-100"
}`}>
        <span className="p-4 rounded-full bg-[#C6D936] text-xl font-bo">
          <IoMdCall />
        </span>
        <div className="content flex flex-col">
          <span className="text-sm text-[#0C6460]">PHONE :</span>
          <span className="font-bold text-[#011f1d]">+00 1900 000 00</span>
        </div>
      </div>

      <p className={`flex items-center gap-2 underline transition-all duration-300 ${
  hideTopbar ? "opacity-0 invisible w-0 overflow-hidden" : "opacity-100"
}`}>
        Get An Quote
        <FaAngleRight />
      </p>
    </section>
  );
};

export default Navbar3;
