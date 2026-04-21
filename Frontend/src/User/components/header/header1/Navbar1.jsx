import React from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Navbar1 = ({ hideTopbar }) => {
  return (
    <section className="h-[88px] w-full border-b border-gray-300 px-10 bg-white flex items-center justify-between shadow-2xl">

      {/* LEFT: Logo */}
      <img src={Logo} alt="" />

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-10">

        {/* MENU */}
        <ul className="flex items-center gap-10">
          <Link className="flex items-center gap-2 text-[16px]">
            Home <FaAngleDown className="text-[12px]" />
          </Link>
          <Link className="flex items-center gap-2 text-[16px]">
            Page <FaAngleDown className="text-[12px]" />
          </Link>
          <Link className="flex items-center gap-2 text-[16px]">
            Services <FaAngleDown className="text-[12px]" />
          </Link>
          <Link className="flex items-center gap-2 text-[16px]">
            Portfolio <FaAngleDown className="text-[12px]" />
          </Link>
          <Link className="flex items-center gap-2 text-[16px]">
            News <FaAngleDown className="text-[12px]" />
          </Link>
          <Link className="text-[16px]">Contact</Link>
        </ul>

        {/* PHONE + BUTTON (only when NOT scrolled) */}
        {!hideTopbar && (
          <div className="flex items-center px-6 gap-6">
            <div className="flex items-center px-6 gap-3">
              <span className="p-4 rounded-full bg-[#C6D936] text-xl">
                <IoMdCall />
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-[#0C6460]">PHONE :</span>
                <span className="font-bold text-[#011f1d]">
                  +00 2222 222 00
                </span>
              </div>
            </div>

            <button className="px-8 py-3 bg-[#1A4137] text-white font-medium cursor-pointer">
              Contact Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar1;