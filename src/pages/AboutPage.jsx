import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about md:py-[50px] py-[30px] text-white">
      <div className="container sm:px-5 px-2">
        <div>
          <Link className="text-[#fff] text-[14px]" to="/">
            {t("aboutpage.Luxury Cars for Rent in Dubai")} / aboutUs2
          </Link>
          <h1 className="md:text-[32px] md:my-[50px] sm:my-[30px] sm:text-[28px] text-[25px] my-[20px] font-bold leading-[130%] uppercase">
            {t("navbar.about")}
          </h1>
        </div>
        <div>
          <h2 className="xl:text-[30px] lg:text-[27px] md:text-[25px] sm:text-[22px] text-[20px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px]  py-[0px] leading-[40px]">
            {t("aboutpage.subtitle")}
          </h2>
          <p className="md:mb-[35px] sm:mb-[20px] mb-[10px]  text-[#cacaca] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] py-[10px]">
            {t("aboutpage.desc")}
          </p>
          <h3 className="text-[28px] sm:mb-[10px] mb-[5px] py-[10px] capitalize">
            {t("aboutpage.question")}
          </h3>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.eleganttitle")}
            </h4>{" "}
            <p className="text-[#d8d8d8] inline">
              {t("aboutpage.elegantdesc")}
            </p>
          </div>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.worrytitle")}
            </h4>{" "}
            <p className="text-[#d8d8d8] inline">{t("aboutpage.worrydesc")}</p>
          </div>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.trusttitle")}
            </h4>{" "}
            <p className="text-[#d8d8d8] inline">{t("aboutpage.trustdesc")}</p>
          </div>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.servicetitle")}
            </h4>{" "}
            <p className="text-[#d8d8d8] inline">
              {t("aboutpage.servicedesc")}
            </p>
          </div>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.missiontitle")}
            </h4>{" "}
            <br />
            <p className="text-[#d8d8d8] inline mb-5">
              {t("aboutpage.missiondesc")}
            </p>
          </div>
          <div className="leading-[30px] py-[10px]">
            <h4 className="inline-block text-[21px] font-semibold mr-[5px]">
              {t("aboutpage.contacttitle")}
            </h4>{" "}
            <br />
            <p className="text-[#d8d8d8] inline mb-5">
              {t("aboutpage.contactdesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
