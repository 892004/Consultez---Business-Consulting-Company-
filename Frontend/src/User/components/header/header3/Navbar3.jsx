import React from 'react'
import Logo from "../../../../assets/Images/logo.png";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";


const Navbar3 = () => {
  return (
    <section className="Navbar px-10 py-10 flex items-center justify-around">
            {/* Logo */}
              <img src={Logo} alt="" srcset="" />
        

        {/* Links */}
      <ul className="flex items-center justify-center gap-8 bg-white px-20 py-5 rounded-full">
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


        <div className="call flex items-center justify-center gap-3">
              <span className="p-4 rounded-full bg-[#C6D936] text-xl font-bo"><IoMdCall /></span>
              <div className="content flex flex-col">
                <span className="text-sm text-[#0C6460]">PHONE :</span>
                <span className="font-bold text-[#011f1d]">+00 1900 000 00</span>
              </div>
        </div>

        <p className='flex items-center justify-center gap-2 underline'>Get An Quote<FaAngleRight /></p>
    </section>
  )
}

export default Navbar3