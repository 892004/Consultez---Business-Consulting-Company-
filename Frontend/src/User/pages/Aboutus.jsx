import React from "react";
import AboutusBanner from "../../assets/Images/banner-image1.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import Aboutus3 from "../components/Homepage 3 Components/Aboutus3/Aboutus3";
import Service from "../components/Homepage 4 components/Services/Service";
import GrowthRate from "../components/Homepage1 Components/GrowthRate/GrowthRate";
import Processing from "../components/Homepage1 Components/ProcessingSec/Processing";
import CaseStudy from "../components/Homepage1 Components/CashStudy/CaseStudy";
import Funface from "../../assets/Images/funface-four-shape.png";
import Process from "../components/Homepage 4 components/Process/Process";
import TeamMember from "../components/Homepage 3 Components/TeamMember/TeamMember";
import Testimonials from "../components/Homepage2 components/Testimonials/Testimonials";
import Contactus from "../components/Homepage2 components/Contact us/Contactus";
import Blogs from "../components/Homepage2 components/Blogs/Blogs";

const Aboutus = () => {
  return (
    <>
      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />
          <img src={Pattern} className="absolute top-0 right-0" />
          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/0 absolute top-0 flex flex-col py-30 px-30 gap-5">
            <div className="flex flex-row items-center gap-1">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                About Us
              </span>
            </div>
            <h1 className="font-bold text-6xl text-white">About Us</h1>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <Aboutus3 />
        <Service />
        <GrowthRate />
        <div className="container flex items-stretch justify-between px-10 py-16 mt-5">
          {/* Left Heading */}
          <h1 className="font-bold text-5xl leading-[1.1] text-[#06210B]">
            We Help Real <br />
            People Do More <br />
            Business Plan
          </h1>

          {/* Box 1 */}
          <div className="flex flex-col justify-start items-start border-r border-black/10 pr-16 min-h-[260px]">
            <img src={Funface} alt="" className="mb-8" />

            <h1 className="font-bold text-5xl leading-none text-[#06210B]">
              90%
            </h1>

            <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
              Clients Satisfactions
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col justify-start items-start border-r border-black/10 px-16 min-h-[260px]">
            <img src={Funface} alt="" className="mb-8" />

            <h1 className="font-bold text-5xl leading-none text-[#06210B]">
              40%
            </h1>

            <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
              Decrease Expense
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col justify-start items-start pl-16 min-h-[260px]">
            <img src={Funface} alt="" className="mb-8" />

            <h1 className="font-bold text-5xl leading-none text-[#06210B]">
              7M
            </h1>

            <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
              Money Flow Users
            </p>
          </div>
        </div>
        <Process />
        <TeamMember />
        <div className="">
          <Testimonials />
        </div>
        <Contactus />
        <Blogs />
      </div>
    </>
  );
};

export default Aboutus;
