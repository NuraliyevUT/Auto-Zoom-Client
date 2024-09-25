import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";

import { BrandContext } from "../../context/BrandContext";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import Loader from "../../shared/loader";

const SwiperBrand = () => {
  const { brand, getBrandData } = useContext(BrandContext);

  useEffect(() => {
    getBrandData();
  }, []);

  return brand?.length > 0 ? (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      autoplay={true}
      grid={{
        rows: 2,
        fill: "row"
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        300: { slidesPerView: 1 },
        400: { slidesPerView: 2 },
        700: { slidesPerView: 3 },
        868: { slidesPerView: 4 },
        1100: { slidesPerView: 6 },
      }}
      modules={[Pagination, Autoplay, Grid]}
      className="mySwiper pb-10"
    >
      {brand?.map((elem) => (
        <SwiperSlide
          key={elem?.id}
          className="h-[180px] bg-swiper-slide-border p-[2px]"
        >
          <div className="w-full h-[176px] bg-[#111219] hover:bg-swiper-slide-border-hover transition flex items-center justify-center">
            <Link
              to={`/cars/${elem?.id}model`}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={`https://realauto.limsa.uz/api/uploads/images/${elem?.image_src}`}
                alt={elem.title || "Car Image"}
                className="w-[60px]"
              />
              <h3 className="text-[#7e7e7e] text-[18px] text-center">
                {elem?.title}
              </h3>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    
    <Loader/>
  );
};

export default SwiperBrand;
