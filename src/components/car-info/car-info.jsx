import React from "react";
import servicesicon from "../../assets/servicesicon.svg";
import carimages from "../../assets/carimages.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CarInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#111219] text-white mx-auto max-w-full font-normal pt-6">
      <div className="container">
        {/* First Section */}
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li className="md:w-1/2 mb-4 md:mb-0">
            <iframe
              className="w-full h-[270px] md:h-[470px]"
              src="https://www.youtube.com/embed/6Bcg46rxqAE?si=6rNBkoHdlR16ZsPs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
          <li className="md:w-1/2">
            <h1 className=" xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl ">
              {t("car-info.SPORTS CAR RENTAL DUBAI")}
            </h1>
            <p className=" w-full xl:text-lg lg:text-md md:text-sm sm:text-sm xl:leading-10 lg:leading-8 md:leading-6 sm:leading-5">
              {t("car-info.description")}
            </p>
            <Link
              to={"/cars"}
              className=" mt-4 items-center  xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs w-[210px] flex gap-[10px] transform hover:translate-x-4 rounded transition duration-300"
            >
              {t("car-info.ALL CARS")}{" "}
              <img src={servicesicon} alt=""  className="xl:w-[30px] lg:w-[25px] md:w-[22px] sm:w-[20px] w-[17px] "/>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col md:flex-row md:space-x-4 mt-8">
          <li className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={carimages}
              alt=""
              className="w-full h-[240px] object-cover"
            />
          </li>
          <li className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl  md:pl-0">
              {t("car-info.SUPERCAR RENTAL DUBAI")}
            </h1>
            <p className="text-base md:text-[20px]  md:pl-0 mt-2 md:mt-4">
              {t("car-info.Hire the latest supercar")}
            </p>
            <Link
              to={"/cars"}
              className=" mt-4 items-center  xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs w-[210px] flex gap-[10px] transform hover:translate-x-4 rounded transition duration-300"
            >
              {t("car-info.SEE ALL")}{" "}
              <img src={servicesicon} alt="" className="xl:w-[30px] lg:w-[25px] md:w-[22px] sm:w-[20px] w-[17px] " />
            </Link>
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarInfo;
