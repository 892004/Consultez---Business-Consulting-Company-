import React from "react";
import AboutusBanner from "../../assets/Images/banner-image1.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import { Link } from "react-router-dom";
import { FaAngleRight, FaEnvelope, FaRegPaperPlane, FaRegUser, FaUser } from "react-icons/fa6";
import contact1 from "../../assets/Images/contact1.svg";
import contact2 from "../../assets/Images/contact2(1).svg";
import contact3 from "../../assets/Images/contact3.svg";
import { CiEdit } from "react-icons/ci";


const Contactus = () => {
  const card = [
    {
      id: 1,
      img: contact1,
      heading: "Address Line",
      para: "Bowery St, New York , 37 USA",
      para2: "NY 10013 , USA",
    },
    {
      id: 2,
      img: contact2,
      heading: "Calling Line",
      para: "+1255-568-6523 4347-221",
      para2: "+1255-568-6523",
    },
    {
      id: 3,
      img: contact3,
      heading: "Mail Address",
      para: "email@example.com",
      para2: "info@yourdomain.com",
    },
  ];
  return (
    <section className="Aboutus relative flex flex-col">
      <div className="container h-90 w-full overflow-hidden relative">
        <img
          src={AboutusBanner}
          className="h-full w-full object-cover object-top"
        />

        <img src={Pattern} className="absolute top-0 right-0" />

        <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
          <div className="flex flex-row items-center gap-1 mt-6">
            <Link to="/" className="text-[#BED034]">
              Home
            </Link>

            <span className="text-white flex items-center gap-1">
              <FaAngleRight />
              Contact Us
            </span>
          </div>
          <h1 className="font-bold text-6xl text-white">Contact Us</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-10">
        {card.map((elem, idx) => {
          return (
            <div className="flex flex-col items-center justify-center bg-white h-90 shadow-xl mt-10 duration-500 hover:bg-[#1A4137] group">
              <img
                src={elem.img}
                className="h-20 w-20 transition-all group-hover:brightness-0 duration-900 group-hover:invert group-hover:rotate-y-360"
              />
              <h2 className="mt-6 text-2xl font-bold group-hover:text-white">{elem.heading}</h2>
              <p className="text-center mt-3 text-lg text-gray-500 group-hover:text-white">
                {elem.para}
              </p>
              <p className="text-center text-lg text-gray-500 group-hover:text-white">{elem.para2}</p>
            </div>
          );
        })}
      </div>

      <div className="container min-h-screen flex flex-row p-10">
        <div className="left flex flex-col w-[50%] p-10">
            <h1 className="text-5xl font-bold">Get In Touch</h1>
            <p className="text-lg text-gray-600 leading-8 mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus<br/>
odio feugiat arc dolor.</p>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52259856.193627745!2d100!3d29.000000000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e1!3m2!1sen!2sbd!4v1779267736796!5m2!1sen!2sbd"
  width="full"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="mt-10"
></iframe>  
        </div>

        <div className="right w-[50%] flex flex-col p-10">
            <h1 className="text-5xl font-bold">Fill Up The Form</h1>
            <p className="text-lg text-gray-500 mt-4">Your email address will not be published. Required fields are marked *</p>

<div className="mt-10 w-full relative">
   <span className="absolute top-5"><FaRegUser /></span>
   <input type="text" placeholder="Your Name*" className="border-b px-10 py-4 outline-none w-full border-gray-400"  required/>   
</div>
<div className="mt-10 w-full relative">
   <span className="absolute top-5"><FaEnvelope /></span>
   <input type="text" placeholder="Email Address*" className="border-b px-10 py-4 outline-none w-full border-gray-400"  required/>   
</div>
<div className="mt-10 w-full relative">
   <span className="absolute top-5 text-2xl"><CiEdit /></span>
   <input type="text" placeholder="Enter Your Message here" className="border-b px-10 py-4 pb-20 outline-none w-full border-gray-400"  required/>   
</div>


<button className="text-white bg-[#1A4137] w-50 py-4 flex items-center justify-center mt-20 cursor-pointer gap-2"><FaRegPaperPlane />Get In Touch</button>

        </div>    
      </div>
    </section>
  );
};

export default Contactus;
