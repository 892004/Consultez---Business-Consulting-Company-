import React, { useRef, useLayoutEffect } from "react";
import GrowthBg from "../../../assets/Images/growth-bg.jpg";
import gsap from "gsap";
import { circularProgressWithCount } from "../../utils/animation";
import GrowthShape from  '../../../assets/Images/growth-shape.png'

const GrowthRate = () => {
  const sectionRef = useRef(null);

  const c1 = useRef(null);
  const t1 = useRef(null);

  const c2 = useRef(null);
  const t2 = useRef(null);

  const c3 = useRef(null);
  const t3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      circularProgressWithCount(c1.current, t1.current, 90, sectionRef.current);
      circularProgressWithCount(c2.current, t2.current, 95, sectionRef.current);
      circularProgressWithCount(c3.current, t3.current, 75, sectionRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="Growth-Rate mt-6 relative flex flex-col h-screen w-full items-start justify-center"
    >
      {/* BACKGROUND */}
      <img src={GrowthBg} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 left-0 h-full w-full z-0 bg-[#1A4137]/70"></div>     
   <div
  className="absolute top-0 left-0 w-full h-full z-0
  bg-gradient-to-r 
  from-[#0f2f2a]/90 
  via-[#0f2f2a]/0 
  to-transparent"
/>
<img src={GrowthShape} className="absolute top-30 animate-slideUpDown " />

      {/* CONTENT */}
      <div className="content absolute p-20 w-full z-10">
        <button className="w-fit px-6 py-1 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
          GROWTH RATE
        </button>

        <div className="flex items-center justify-between border-b border-white/20 pb-6">
          <h1 className="text-5xl text-white font-bold leading-14 py-3">
            Building Connections For Grow <br />
            Limitless Opportunities.
          </h1>

          <button className="mt-6 px-6 py-3 bg-white text-black cursor-pointer">
            Discover More
          </button>
        </div>

        {/* 🔥 PROGRESS SECTION */}
        <div className="grid grid-cols-3 gap-10 mt-10 text-white">

          {/* CARD 1 */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <svg width="110" height="110">
                <circle
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#fff"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  ref={c1}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t1}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 className="font-bold text-lg">Scalable Solutions</h2>
              <p className="text-lg text-gray-300 mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <svg width="110" height="110">
                <circle cx="55" cy="55" r="45" stroke="#fff" strokeWidth="7" fill="none" />
                <circle
                  ref={c2}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t2}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 className="font-bold text-lg">Automation Features</h2>
              <p className="text-lg text-gray-300 mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <svg width="110" height="110">
                <circle cx="55" cy="55" r="45" stroke="#fff" strokeWidth="7" fill="none" />
                <circle
                  ref={c3}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t3}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 className="font-bold text-lg">24/7 Support</h2>
              <p className="text-lg text-gray-300 mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthRate;