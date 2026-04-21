import React from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import '../header4/navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import '../header4/navbar.css'



const Navbar4 = () => {
  return (
    <section className="Navbar h-22 w-full border-b border-black/20 text-black flex items-center justify-between">

      <img src={Logo} className="px-10"/>

      {/* Links */}
      <ul className="relative flex items-center justify-center gap-8 text-black">
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


      <span className="search relative cursor-pointer text-3xl"><IoSearchOutline /></span>

      <div className="call flex gap-3 text-black">
        <span className="p-4 rounded-full bg-gray-200/60 text-xl font-bold">
          <IoMdCall />
        </span>
        <div className="content flex flex-col text-black">
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
