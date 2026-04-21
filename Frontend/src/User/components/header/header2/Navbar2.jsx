import React from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { TbAlignRight } from "react-icons/tb";

const Navbar2 = () => {
  return (
    <section className="Navbar h-22 w-full border-b border-gray-300 p-12 flex items-center justify-around bg-[#F8F5F2]">
      {/* Logo */}
      <img src={Logo} alt="" srcset="" />

      {/* Links */}
      <ul className="flex items-center justify-center gap-10">
        <Link className="text-[16px] flex items-center justify-center gap-2">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
        </Link>
        <Link className="text-[16px] flex items-center justify-center gap-2">
          Page{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
        </Link>
        <Link className="text-[16px] flex items-center justify-center gap-2">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
        </Link>
        <Link className="text-[16px] flex items-center justify-center gap-2">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
        </Link>
        <Link className="text-[16px] flex items-center justify-center gap-2">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
        </Link>
        <Link className="text-[16px]">Contact</Link>
      </ul>

      <div className="contact-btn translate-x-20">
        <button className="px-8 py-3  border rounded-full border-[#1A4137] cursor-pointer text-[#1A4137]  font-medium">
          Contact Now
        </button>
      </div>

      {/* Hamburger */}
        <span className="px-3 py-3  text-2xl text-[#1A4137] border rounded-full  duration-500 border-[#1A4137] bg-[#C6D936] hover:bg-[#1A4137] hover:text-white cursor-pointer">
          <TbAlignRight />
        </span>
    </section>
  );
};

export default Navbar2;
