import React from "react";
import consultBG from "../../../../assets/Images/consult-bg.jpg";
import consultShape from "../../../../assets/Images/consult-shape.png";
import '../../../../../src/App.css'
import { MdArrowOutward } from "react-icons/md";

const Consulting = () => {
  return (
    <section className="relative w-full min-h-[550px] w-full flex items-start justify-center relative overflow-hidden">

        <div className="h-[500px] w-full relative">
          <img src={consultBG} className="h-full w-full object-cover"/>
                    <div
        className="absolute top-0 left-0 h-full w-full 
        bg-gradient-to-r 
        from-[#1A4137]/100 
        via-[#1A4137]/60 
        to-transparent 
        z-0"
        ></div>

        <img src={consultShape} className="absolute top-0 -left-40 animate-slow-spin2"/>


        <div className="content absolute top-30 left-110 flex flex-col  items-center gap-5 justify-center ">
              <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
            CONSULTING
 </span>

          <h1 className="text-5xl font-bold text-center leading-14 text-white">The Future Of Corporate And <br/>Business Solution</h1>

          <div className="btn flex flex-row items-center gap-5 ">
                <button className="px-8 py-4 bg-[#1A4137] rounded-full flex items-center gap-2 text-white">Discover More <MdArrowOutward /></button>
                <button className="px-8 py-4 bg-[#C6D936] rounded-full flex items-center gap-2 text-[#1A4137] font-medium">Get A Quote <MdArrowOutward /></button>  
          </div>
        </div>
        </div>
    </section>
  );
};

export default Consulting;