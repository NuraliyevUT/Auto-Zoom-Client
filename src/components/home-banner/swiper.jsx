import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import carImg1 from "../../assets/img/slide-car1.png";
import carImg2 from "../../assets/img/slide-car2.png";
import carImg3 from "../../assets/img/slide-car3.png";
import carImg4 from "../../assets/img/slide-car4.png";

import { Navigation, EffectCoverflow } from "swiper/modules";

const HoemSwiper = () => {
  return (
    <div className="pb-[45px] bg-home-swiper">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 50,
          modifier: 1,
        }}
        navigation={{
          prevEl: ".prev-car-swiper-btn",
          nextEl: ".next-car-swiper-btn",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
            },
          },
        }}
        className="mySwiper mb-10 max-w-[1240px]"
        modules={[Navigation, EffectCoverflow]}
      >
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg1} alt="car image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg2} alt="car image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg3} alt="car image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg1} alt="car image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg2} alt="car image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/cars"}>
            <img src={carImg4} alt="car image" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-x-40">
        <div className="prev-car-swiper-btn cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="17"
            viewBox="0 0 92 17"
            fill="none"
          >
            <path d="M91.5 16H2L17 1" stroke="white" />
          </svg>
        </div>
        <div className="next-car-swiper-btn cursor-pointer">
          <svg
            width="91"
            height="17"
            viewBox="0 0 91 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 16H89.5L74.5 1" stroke="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HoemSwiper;
