import React, { useState, useEffect , useRef } from "react";
import {fadeUp , slideLeft} from '../utils/animation';
import homepage1Banner from "../../assets/Images/banner-image1.jpg";
import homepage2Banner from "../../assets/Images/banner-image2.jpg";
import homepage3Banner from "../../assets/Images/banner-image3.jpg";
import BannerShape from "../../assets/Images/banner-shape.png";
import bannerArray from "../../assets/Images/banner-arry.png";
import "../../../src/App.css";
import About1 from "../components/Aboutus/About1";
import Services from "../components/All-Services/Services";
import MissionVision from '../components/MissionVision/MissionVision';
import GrowthRate from "../components/GrowthRate/GrowthRate";
import Processing from "../components/ProcessingSec/Processing";
import CaseStudy from "../components/CashStudy/CaseStudy";

const Homepage1 = () => {
  const ref = useRef();

  useEffect(()=>{
    fadeUp(ref.current);
    slideLeft(ref.slideLeft);
  },[])
  const HeroSec = [
    {
      id: 1,
      title: "GROWTH , INNOVATION , AND SUCCESS",
      heading: (
        <>
          <span className="font-bold text-8xl">Transforming</span>
          <br />
          <span className="font-light text-8xl">Business Growth</span>
          <br /> <span className="font-bold text-8xl"> Drive Success</span>
        </>
      ),
      btn: "Free Consultation",
      rightPara: (
        <>
          <span>
            Take your brand to new heights <br /> Agency offering everything
            <br /> from strategy business
          </span>
        </>
      ),
      img: homepage1Banner,
    },
    {
      id: 2,
      title: "GROWTH , INNOVATION , AND SUCCESS",
      heading: (
        <>
          <span className="font-bold text-8xl">Transforming</span>
          <br />
          <span className="font-light text-8xl">Business Growth</span>
          <br /> <span className="font-bold text-8xl"> Drive Success</span>
        </>
      ),
      btn: "Free Consultation",
      rightPara: (
        <>
          <span>
            Take your brand to new heights <br /> Agency offering everything
            <br /> from strategy business
          </span>
        </>
      ),
      img: homepage2Banner,
    },
    {
      id: 3,
      title: "GROWTH , INNOVATION , AND SUCCESS",
      heading: (
        <>
          <span className="font-bold text-8xl">Transforming</span>
          <br />
          <span className="font-light text-8xl">Business Growth</span>
          <br /> <span className="font-bold text-8xl"> Drive Success</span>
        </>
      ),
      btn: "Free Consultation",
      rightPara: (
        <>
          <span>
            Take your brand to new heights <br /> Agency offering everything
            <br /> from strategy business
          </span>
        </>
      ),
      img: homepage3Banner,
    },
  ];

  const [index, setIndex] = useState(0);
  const current = HeroSec[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HeroSec.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    
    <section  className="Homepage h-screen w-full relative">
      <img src={current.img} className="block h-full w-full object-cover" />

      <img src={BannerShape} className="absolute top-0 right-0" />
      <img
        src={bannerArray}
        className="absolute top-50 left-10 opacity-100 z-50 animate-slideLR "
        />
      <div
        className="absolute top-0 left-0 h-full w-full 
        bg-gradient-to-r 
        from-[#1A4137]/90 
        via-[#1A4137]/60 
        to-transparent 
        z-0"
        ></div>

      <div ref={ref} className="absolute top-0 left-10  h-full w-full flex items-center justify-between px-10 text-white">
        <div>
          <p  className="font-bold text-[#C6D936] underline opacity-full">
            {current.title}
          </p>
          <h1 className="text-4xl font-semibold">{current.heading}</h1>
          <button className="mt-4 px-6 py-3 bg-[#C6D936] text-black font-medium cursor-pointer">
            {current.btn}
          </button>
        </div>

        <div  className="absolute right-30 bottom-50 ">
          <p className="font-bold text-[20px]">{current.rightPara}</p>
        </div>
      </div>

    </section>
    <About1 />
    <Services />
    <MissionVision />
    <GrowthRate  />
    <Processing />
    <CaseStudy />
  </>
  );
};

export default Homepage1;
