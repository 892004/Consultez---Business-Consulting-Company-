import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../../assets/Images/logo-light.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import '../header4/navbar.css'

const Navbar4 = () => {
  return (
    <section className="Navbar h-22 w-full border-b border-white/20 bg-[#1A4137] flex items-center justify-between">
      <p className="relative text-white flex items-center justify-center gap-2 text-xl font-medium px-5 cursor-pointer ">
        <AiOutlineMenu className="text-xl" />
        Menu
      </p>

      <img src={Logo} alt="" srcset="" />

      {/* Links */}
      <ul className="relative flex items-center justify-center gap-8 text-white">
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

      <div className="call flex gap-3 text-white">
        <span className="p-4 rounded-full bg-white/10 text-xl font-bold">
          <IoMdCall />
        </span>
        <div className="content flex flex-col text-white">
          <span className="text-sm">PHONE :</span>
          <span className="font-bold">+00 2222 222 00</span>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 cursor-pointer h-full w-50 bg-[#C6D936]">
        Get Quote Now
      </button>
    </section>
  );
};

export default Navbar4;
