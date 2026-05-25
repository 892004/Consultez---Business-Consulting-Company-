import React, { useEffect } from "react";
import serviceBG from "../../../../assets/Images/service-shape.png";
import serviceLine from "../../../../assets/Images/service-line.png";
import BannerArray from "../../../../assets/Images/service-arry-color.png";
import ServiceCard from "./ServiceCard";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import high from "../../../../assets/Images/high.png";
import party from "../../../../assets/Images/party.png";
import BusinessGrowth from "../../../../assets/Images/businessGrowth.png";
import ServiceBg from "../../../../assets/Images/service-item-shape.png";
import ServiceImg1 from "../../../../assets/Images/service-image1.jpg";
import ServiceImg2 from "../../../../assets/Images/service-image2.jpg";
import ServiceImg3 from "../../../../assets/Images/service-image3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Services = () => {
  
  const serviceCards = [
    {
      id: 1,
      icons: <img src={high} className="h-30 w-30 object-contain" />,
      no: "01",
      serviceLeftBg: ServiceBg,
      heading: "Market Research",
      para: "Sed ut perspiciatis unde is voluptatem accusant",
      btn: <RiArrowRightUpLongLine />,
      serviceRighgImg: ServiceImg1,
    },
    {
      id: 2,
      icons: <img src={party} className="h-30 w-30 object-contain" />,
      no: "02",
      serviceLeftBg: ServiceBg,
      heading: "Financial Consulting",
      para: "Sed ut perspiciatis unde is voluptatem accusant",
      btn: <RiArrowRightUpLongLine />,
      serviceRighgImg: ServiceImg2,
    },
    {
      id: 3,
      icons: <img src={BusinessGrowth} className="h-30 w-30 object-contain" />,
      no: "03",
      serviceLeftBg: ServiceBg,
      heading: "Branding Consulting",
      para: "Sed ut perspiciatis unde is voluptatem accusant",
      btn: <RiArrowRightUpLongLine />,
      serviceRighgImg: ServiceImg3,
    },
  ];
  return (
    <section
      className="services relative h-[130vh] w-full mt-30 flex flex-row overflow-hidden translate-y-[2px]"
    >
      <div className="left h-full w-[60%] relative">
        <button data-aos = 'fade-right' className="py-2 px-10 rounded-full bg-[#C6D936] mx-35 my-30 absolute font-semibold tracking-widest text-sm">
          SERVICE AREA
        </button>
        <h2 data-aos = 'fade-right'  className="mx-35 my-42 absolute text-5xl font-bold leading-16">
          Empowering Your Brand <br />
          Innovative Solution
        </h2>
        <img src={serviceBG} className="h-full w-full object-cover" />
        <div className="h-full w-full bg-gray-500 absolute top-0 opacity-10 "></div>
      </div>

      <div className="absolute h-150 w-320 top-80 left-30 right-50  z-30 p-5">
        <Swiper
          modules={[Autoplay]}
          speed={2000} // 👉 animation smooth & slow
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          grabCursor={true} // 👉 mouse drag smooth feel
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
        >
          {serviceCards.map((item) => (
            <SwiperSlide key={item.id}>
              <ServiceCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="right h-full w-[40%] bg-[#1A4137] p-10 relative">
        <button data-aos = 'fade-left'  className="py-4 px-14 font-medium bg-[#C6D936] mx-35 my-30 absolute">
          All Services
        </button>
        <img
          src={serviceLine}
          className="absolute right-0 animate-slideUpDown"
        />
        <img src={BannerArray} className="absolute right-20 animate-slideLR " />
      </div>
    </section>
  );
};

export default Services;
