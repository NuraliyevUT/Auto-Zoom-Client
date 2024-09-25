import React from "react";
import LinkNavigate from "../../shared/link";
import HoemSwiper from "./swiper";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px]">
      <div className="container">
        <div className="text-white flex flex-col items-center pb-20">
          <h1 className="max-w-[600px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[27px] text-[23px]  tracking-[3px] xl:leading-[50px] lg:leading-[45px] md:leading-[35px] sm:leading-[35px] leading-[35px] text-center mb-2 merriweather-bold">
            {t("homebanner.title")}
          </h1>
          <h2 className="max-w-[780px] text-[18px] tracking-[1.3px] text-center xl:mb-[43px] lg:mb-[38px] md:mb-[33px] sm:mb-[28px] mb-[23px] text-[#fff9]">
            {t("homebanner.subtitle")}
          </h2>

          <LinkNavigate link={"/"} content={t("homebanner.linktitle")} />
        </div>
      </div>
      <HoemSwiper />
    </section>
  );
};

export default HomeBanner;
