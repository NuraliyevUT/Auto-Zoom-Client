import React from "react";
import services1 from "../../assets/services1.jpg";
import services2 from "../../assets/services2.jpg";
import servicesicon from "../../assets/servicesicon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black text-white mx-auto max-w-full font-sans ">
        <div className="container">
          <h1 className="pt-6   xl:text-4xl lg:text-4xl md:text-3xl">
            {t("services.title")}
          </h1>
          <ul className="flex flex-wrap  pt-4 pb-4">
            <li className=" pt-4 pb-4 xl:pr-4 lg:pr-4 md:pr-0 xl:mr-4 lg:mr-4 md:mr-4 sm:mr-0 xl:w-[320px] lg:w-[340px] md:w-[360px] sm:w-[100%]">
              <img src={services1} alt="" className="  pb-4 w-[100%] " />
              <h2 className="xl:text-xl lg:text-xl md:text-lg  ">
                {t("services.subtitle1")}
              </h2>
              <p className="xl:text-md pt-3 pb-3 lg:text-md md:text-sm">
                {t("services.description1")}
              </p>
              <Link
                to={"/service/1"}
                className=" items-center xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs w-[190px] flex gap-[10px]  transform hover:translate-x-4 rounded transition duration-300"
              >
                {t("services.LEARN MORE")} <img src={servicesicon} className="xl:w-[30px] lg:w-[25px] md:w-[22px] sm:w-[20px] w-[17px] " />
              </Link>
            </li>
            <li className=" pb-4 pt-4 xl:pr-4 lg:pr-4 md:pr-0 xl:w-[320px] lg:w-[340px] md:w-[360px] sm:w-[100%]">
              <img src={services2} alt="" className=" pb-4 w-[100%]" />
              <h2 className="xl:text-xl lg:text-xl md:text-lg  ">
                {t("services.subtitle2")}
              </h2>
              <p className="xl:text-md pt-3 pb-3 lg:text-md md:text-sm ">
                {t("services.description2")}
              </p>
              <Link
                to={"/service/2"}
                className=" items-center  xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs w-[190px] flex gap-[10px]  transform hover:translate-x-4 rounded transition duration-300"
              >
                {t("services.LEARN MORE")} <img src={servicesicon} className="xl:w-[30px] lg:w-[25px] md:w-[22px] sm:w-[20px] w-[17px] " alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Service;
