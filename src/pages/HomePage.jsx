import React from "react";
import Service from "../components/service/service";
import CarInfo from "../components/car-info/car-info";
import InstaFollow from "../components/insta-follow/insta-follow";
import HomeBanner from "../components/home-banner/home-banner";
import Brand from "../components/brand/brand";
import Category from "../components/category/category";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Faqs from "../components/faq/Faq";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#111219]">
      <HomeBanner />
      <Brand />
      <Category />
      <Service />
      <div className=" bg-[#272933] text-white mx-auto max-w-full  pb-5  font-normal">
        <div className="container">
          <h1 className="pt-6 pb-6  xl:text-3xl lg:text-3xl md:text-2xl  sm:text-2xl ">
            {t("home.title1")}
          </h1>
          <p className=" w-full xl:text-lg lg:text-md md:text-sm sm:text-sm xl:leading-8 lg:leading-6 md:leading-6 sm:leading-5 ">
            {t("home.desc1")}
          </p>
          <h1 className="pt-6  pb-6  xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl  ">
            {t("home.title2")}
          </h1>
          <p className=" w-full xl:text-lg lg:text-md md:text-sm sm:text-sm xl:leading-8 lg:leading-6 md:leading-6 sm:leading-5">
            {t("home.desc2")}
          </p>
        </div>
      </div>
      <CarInfo />
      <div className="bg-[#1e1f27] pt-6">
        <div className="container">
          <h1 className="pt-6 text-white xl:text-3xl lg:text-3xl md:text-2xl  sm:text-2xl ">
            {t("home.LUXURY CAR RENTAL IN DUBAI")}
          </h1>
          <div className=" text-white">
            <Faqs/>
          </div>
        </div>
      </div>
      <InstaFollow />
      <div className="bg-[#1e1f27] ">
        <div className="container">
          <ul className="flex gap-[30px] text-white xl:justify-normal lg:justify-normal md:justify-normal sm:justify-center  justify-center">
            <li>
              <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold pb-[30px] ">
                {t("home.LOCATION")}
              </h1>
              <Link
                className="pb-[3px] block text-lg text-[#fff9]"
                to={"/cars"}
              >
                {" "}
                <u>{t("home.Dubai Mall")}</u>{" "}
              </Link>{" "}
              <br />
              <Link
                className="pb-[3px] block text-lg text-[#fff9]"
                to={"/cars"}
              >
                {" "}
                <u>{t("home.Sharja Airport")}</u>{" "}
              </Link>
            </li>
            <li>
              <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold pb-[30px]">
                {t("home.CITY")}
              </h1>
              <Link
                className="pb-[3px] block text-lg text-[#fff9]"
                to={"/cars"}
              >
                {" "}
                <u>{t("home.Dubai")}</u>{" "}
              </Link>{" "}
              <br />
              <Link
                className="pb-[3px] block text-lg text-[#fff9]"
                to={"/cars"}
              >
                {" "}
                <u>{t("home.Sharja")}</u>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
