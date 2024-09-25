import React, { useContext } from "react";
import HeaderCategory from "./header-category";
import CategoryCard from "../category-card/category-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryContext } from "../../context/CategoryContext";

const Category = () => {
  const lang = localStorage.getItem("i18nextLng") || "en";
  const category = useContext(CategoryContext);

  return (
    <div className="py-10 bg-[#272933]">
      <div className="container">
        {category &&
          category?.category?.map((elem, index) => {
            return (
              <div key={index}>
                <HeaderCategory
                  title={lang === "en" ? elem?.name_en : elem?.name_ru}
                  id={elem?.id}
                />
                <Swiper
                  slidesPerView={3}
                  loop={true}
                  spaceBetween={30}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    900: {
                      slidesPerView: 3,
                    },
                  }}
                  className="mySwiper py-5"
                >
                  {elem?.cars?.map((item) => {
                    return (
                      <SwiperSlide key={item?.id}>
                        <CategoryCard item={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
