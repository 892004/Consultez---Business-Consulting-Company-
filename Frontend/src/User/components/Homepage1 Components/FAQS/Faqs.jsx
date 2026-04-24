import React, { useState } from "react";
import faqleft from "../../../../assets/Images/faq-image1.jpg";
import Map from "../../../../assets/Images/faq-map.png";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Faqs = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How Can Business Consulting Benefit My Company?",
    },
    {
      question: "What Are the Costs of Your Consulting Services?",
    },
    {
      question: "How Do You Measure the Success of a Project?",
    },
    {
      question: "Do You Provide Remote Consulting Services?",
    },
    {
      question: "What Industries Do You Specialize In?",
    },
  ];

  const paragraph =
    "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder text.";

  return (
    <section className="FAQS min-h-screen w-full flex flex-row">
      
      {/* LEFT */}
      <div className="left w-[35%]">
        <img
          src={faqleft}
          className="h-full w-full object-cover grayscale-100 hover:grayscale-0"
        />
      </div>

      {/* RIGHT */}
      <div className="right w-[65%] bg-[#163839] relative p-5 flex items-start">

        {/* MAP BG */}
        <img src={Map} className="h-full w-full object-cover" />

        {/* LEFT CONTENT (same tera) */}
        <div className="content absolute top-0 py-40 px-10 flex flex-col items-start justify-center gap-6">
          <button className="w-fit px-10 py-1 rounded-full tracking-widest font-medium text-sm bg-[#C6D936]">
            FAQ'S
          </button>

          <h1 className="text-5xl font-bold leading-14 text-white">
            Frequently
            <br />
            Asked Questions
          </h1>

          <p className="text-white">
            Consultez is the hub for early adopters and <br /> innovation
            enthusiasts, offering vibrant, <br />
            imaginative technology before it becomes
            <br /> mainstream.
          </p>

          <button className="px-10 py-3 bg-white text-[#163839] font-medium text-sm cursor-pointer">
            Get A Quate
          </button>
        </div>

        {/* FAQ ACCORDION (RIGHT SIDE) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[50%] flex flex-col gap-4">

          {faqs.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden">

              {/* HEADER */}
              <div
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className={`flex justify-between items-center px-5 py-4 cursor-pointer transition
                ${activeIndex === index ? "bg-[#00715D]" : "bg-[#123334]"}`}
              >
                <h3 className="text-white text- font-bold">
                  {item.question}
                </h3>

                {activeIndex === index ? (
                  <FiChevronDown className="text-white" />
                ) : (
                  <FiChevronRight className="text-white" />
                )}
              </div>

              {/* CONTENT */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-40 p-5 bg-[#0F2E2F]" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {paragraph}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Faqs;