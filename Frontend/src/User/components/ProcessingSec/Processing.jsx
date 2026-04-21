import React from "react";
import '../ProcessingSec/processing.css'
import DualCircle from '../../../assets/Images/dual-circle.png'
const Processing = () => {
    const cards = [
        {
            id:"01",
            heading:"Strategic Growth",
            para:"Your Source for Market Trends & Business Intelligence"
        },
        {
             id:"02",
            heading:"Fuel Innovation",
            para:"Sparking Innovation , Shaping Tomorrow successful"
        },
        {
            id:"03",
            heading:"Financial Planning",
            para:"Helping Yout Stay on Track with Accurate Estimates"
        },
        {
            id:"04",
            heading:"Sustainable Success",
            para:"Amazing Support! with lot of eledemos to choose from top"
        }
    ]
  return (
    <section className="Processing min-h-screen w-full mt-10 flex flex-col items-center justify-start p-10 bg-[#F1F1F2] relative">
      <button className="w-fit px-6 py-2 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
        HOW IT WORKS
      </button>

      <h1 className="text-center text-5xl font-semibold leading-14 py-4">
        Connect, Collaborate, & Create
        <br />
        Limitless Opportunities.
      </h1>


      <div className="container grid grid-cols-4 py-20 px-20  items-center justify-center border border-gray-300 border-dashed w-full gap-2 rounded-xl">
        <img src={DualCircle} className="absolute left-[-15%] animate-slow-spin"/>
        {cards.map(( elem  , idx)=>{
          return(
             <div
      key={idx}
      className={`content flex flex-col gap-2 ml-10 relative ${
        idx !== cards.length - 1 ? "after-line" : ""
      }`}
    >
            <p className="text-6xl stroke-text">{elem.id}</p><br/>
            <p className="text-2xl font-semibold">{elem.heading}</p> 
            <p className="text-lg text-gray-500">{elem.para}</p>
          </div>
          )
        })}
      </div>

      <h3 className="mt-12 text-xl font-semibold ">Embrace Innovation, Adapt Quickly, and Lead with Confidence. <span className="text-[#0C6460] underline duration-400 hover:tracking-wider cursor-pointer">Consult Now</span></h3>
    </section>
  );
};

export default Processing;
