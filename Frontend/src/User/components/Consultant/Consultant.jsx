import React from "react";
import { FaPlus } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";
import teamShape from '../../../assets/Images/team-shape.png'

import profile1 from "../../../assets/Images/team-image1.jpg";
import profile2 from "../../../assets/Images/team-image2.jpg";
import profile3 from "../../../assets/Images/team-image3.jpg";
import profile4 from "../../../assets/Images/team-image4.jpg";

const Consultant = () => {
  const Consultant = [
    {
      id: "1",
      profilePhoto: profile1,
      Name: "Guy Hawkins",
      occupation: "Admin",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "2",
      profilePhoto: profile2,
      Name: "Jacob Jones",
      occupation: "Manager",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "3",
      profilePhoto: profile3,
      Name: "Kristin Watson",
      occupation: "Consultant",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "4",
      profilePhoto: profile4,
      Name: "Bessie Cooper",
      occupation: "Founder",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
  ];

  return (
    <section className="Consultant min-h-screen w-full mt-10 flex flex-col items-center p-20 relative ">
      
      {/* BUTTON */}
      <button className="w-fit px-6 py-2 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
        TOP CONSULTANT
      </button>

      {/* HEADING */}
      <h1 className="text-center text-5xl font-semibold leading-14 py-3">
        Enhance Your Experience with
        <br />
        Expert Consulting
      </h1>

      {/* CARDS */}
      <div className="flex flex-row items-center justify-center gap-6">
        {Consultant.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="group relative h-[460px] w-[300px] shadow-xl rounded-2xl overflow-hidden mt-8"
            >
              {/* IMAGE */}
              <img
                src={elem.profilePhoto}
                className="h-[320px] w-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4137] via-[#1A4137]/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* SOCIAL ICONS */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500 z-10">
                <div className="bg-white p-2 rounded-full">{elem.facebook}</div>
                <div className="bg-white p-2 rounded-full">{elem.instargram}</div>
                <div className="bg-white p-2 rounded-full">{elem.linkedin}</div>
                <div className="bg-white p-2 rounded-full">{elem.Be}</div>
              </div>

              {/* CONTENT */}
              <div className="content py-6 px-6 bg-white relative z-10 group-hover:bg-transparent transition duration-500">
                <p className="text-2xl font-semibold group-hover:text-white">
                  {elem.Name}
                </p>
                <p className="font-medium text-[#1A4137] text-[16px] group-hover:text-white">
                  {elem.occupation}
                </p>
              </div>

              {/* PLUS BUTTON */}
              <div className="absolute bottom-4 right-4 z-20 bg-[#1A4137] text-white p-3 rounded-full cursor-pointer transition duration-300 group-hover:bg-[#C6D936] group-hover:text-black">
                <span className="group-hover:rotate-45 transition duration-300 block">
                  {elem.plusIcon}
                </span>
              </div>
            </div>
          );
        })}
      </div>

<img src={teamShape} className="absolute bottom-0 -left-30 animate-slideLR"/>
    </section>
  );
};

export default Consultant;