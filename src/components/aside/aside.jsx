import React from "react";
import servicesicon from "../../assets/servicesicon.svg";
import carimages from "../../assets/carimages.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black text-white mx-auto max-w-full font-normal pt-6">
      <div className="container">
        <ul className="flex">
          <li className="pr-4">
            <iframe
              width="600px"
              height="470"
              src="https://www.youtube.com/embed/6Bcg46rxqAE?si=6rNBkoHdlR16ZsPs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
          <li>
            <h1 className="text-4xl pl-4 w-[400px]">
              {t("aside.SPORTS CAR RENTAL DUBAI")}
            </h1>
            <p className="text-[20px] w-[460px] pl-4">{t("aside.asidedesc")}</p>
            <Link
              to={"/cars"}
              className="ml-4 mt-4 text-[22px] w-[138px] items-center flex justify-between transform hover:translate-x-4 rounded transition duration-300"
            >
              {t("aside.ALL CARS")} <img src={servicesicon} alt="" />
            </Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="pr-4">
            <img src={carimages} alt="" className="w-[600px] h-[240px]" />
          </li>
          <li>
            <h1 className="text-4xl pl-4 w-[400px]">
              {t("aside.SUPERCAR RENTAL DUBAI")}
            </h1>
            <p className="text-[20px] w-[460px] pl-4 pt-4">
              {t("aside.Hire the latest supercar")}
            </p>
            <Link
              to={"/cars"}
              className="ml-4 mt-4 text-[22px] w-32 items-center flex justify-between transform hover:translate-x-4 rounded transition duration-300"
            >
              {t("aside.SEE ALL")} <img src={servicesicon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
