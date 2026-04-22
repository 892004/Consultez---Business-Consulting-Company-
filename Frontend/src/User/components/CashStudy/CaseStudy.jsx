import React from "react";
import Case1 from "../../../assets/Images/case-image1.jpg";
import Case2 from "../../../assets/Images/case-image2.jpg";
import Case3 from "../../../assets/Images/case-image3.jpg";
import Case4 from "../../../assets/Images/case-image4.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CaseStudy = () => {
  const caseCards = [
    {
      id: 1,
      backGroudImg: Case4,
      category: "Digital Agency",
      para: "Transforming Legacy Systems",
    },
    {
      id: 2,
      backGroudImg: Case1,
      category: "Cyber Security",
      para: "Revolutionizing Brand Strategy",
    },
    {
      id: 3,
      backGroudImg: Case2,
      category: "IT Solution",
      para: "Technology and artificial Maintenance",
    },
    {
      id: 4,
      backGroudImg: Case3,
      category: "Business Consultation",
      para: "Business Strategy to Cut Costs by 30%",
    },
     // 🔥 duplicate
  {
    id: 5,
    backGroudImg: Case4,
    category: "Digital Agency",
    para: "Transforming Legacy Systems",
  },
  {
    id: 6,
    backGroudImg: Case1,
    category: "Cyber Security",
    para: "Revolutionizing Brand Strategy",
  },
  ];

  return (  
    <section className="Case-study min-h-screen w-full  p-10 flex flex-col items-center justify-start">
      <button className="w-fit px-6 py-2 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936] ">
        CASE STUDY
      </button>

      <h3 className="text-center text-5xl font-semibold leading-14 mt-10">
        Showcasing Project & Solutions
        <br />
        for Clients case study.
      </h3>

     <div className="w-full mt-5 cursor-pointer">
        
<Swiper
  slidesPerView={4}
  spaceBetween={2}
  loop={true}
  speed={2000}   // smooth continuous feel
  autoplay={{
    delay: 0,   // 🔥 IMPORTANT (continuous banane ke liye)
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
>
          {caseCards.map((elem, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="relative flex items-start justify-center group">
                  <img
                    src={elem.backGroudImg}
                    className="w-full object-cover transition-all duration-300 group-hover:grayscale"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-50 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <FiArrowUpRight className="text-2xl text-[#1A4137] transition-all duration-300 hover:rotate-45" />
                    </div>
                  </div>

                  {/* content-1 */}
                  <div
                    className={`content-1 absolute left-10 w-70 py-10 bg-white/90 px-3 rounded-xl 
                    ${idx === 1 || idx === 3 ? "bottom-20" : "bottom-10"} 
                    transition-all duration-300 group-hover:opacity-0`}
                  >
                    <p className="font-semibold text-[#1A4137]">{elem.category}</p>
                    <p className="font-semibold text-[22px] leading-8">
                      {elem.para}
                    </p>
                  </div>

                  {/* content-2 */}
                  <div
                    className="content-2 absolute bottom-0 left-0 w-full h-[70%] p-6 
                    bg-gradient-to-t from-[#1A4137]/100 via-[#1A4137]/80 to-transparent 
                    text-white opacity-0 transition-all duration-300 group-hover:opacity-100 
                    flex flex-col justify-end"
                  >
                    <p className="font-semibold">{elem.category}</p>
                    <p className="font-semibold text-[24px]">{elem.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default CaseStudy;