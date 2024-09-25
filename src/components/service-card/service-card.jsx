import React from "react";
import serviceIcon from "../../assets/service-card-icon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ price, person, serviceText, serviceCardImg }) => {
  const { t } = useTranslation();

  return (
    <div className="my-[15px] xl:w-[340px] text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 rounded-md lg:w-[467px] md:w-[359px] sm:w-[297px] w-[90%] h-[100%]">
      <img
        src={serviceCardImg}
        alt=""
        className="w-[100%] rounded-t-md xl:h-[210px] lg:h-[310px] md:h-[250px] sm:h-[200px] h-[27%]"
      />
      <h1 className="text-2xl p-[10px]">{t("service-card.BASIC")}</h1>
      <div className="flex p-[10px] gap-[30px]">
        <h2 className="border border-green-500 px-[10px] rounded ">{price}</h2>
        <h2>{person}</h2>
      </div>
      <p className="text-md p-[10px] xl:h-[140px]lg:h-[120px] md:h-[100px] sm:h-[110px] h-[100px] ">
        {serviceText}
      </p>
      <h3 className="px-[10px] text-2xl font-bold">{t("service-card.Package Inclusions:")}</h3>
      <ul className="px-[10px] pb-[15px] pt-[10px] mt-[10px]">
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li1")}</p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li2")} </p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li3")}</p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li4")}</p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li5")}</p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li6")}</p>
        </li>
        <li className="flex items-center pt-[15px] xl:gap-[15px]">
          <img src={serviceIcon} alt="" />
          <p>{t("service-card.li7")}</p>
        </li> 
      <li >
      <Link to="tel:+971527030189">
          {" "}
          <button className="block   my-[12px] bg-[#fe363b;] rounded px-[53px] py-[8px] xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-[14px]">
            {t("service-card.BOOK NOW")}
          </button>{" "}
        </Link>
      </li>
      </ul>
    </div>
  );
};

export default ServiceCard;
