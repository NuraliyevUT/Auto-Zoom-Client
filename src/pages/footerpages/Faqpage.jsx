import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Faqs from "../../components/faq/Faq";

const Faqpage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1e1f27] text-white pb-14 pt-5">
      <div className="container">
        <div className="flex items-center gap-x-2 text-[#fff9] text-sm py-4">
          <Link to={"/"}>{t("LUXURY CAR RENTAL IN DUBAI")}</Link> /{" "}
          <Link to={"/blog"}>{t("footer.FAQ")}</Link>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl my-6">
          {t("FREQUENTLY ASKED QUESTIONS")}
        </h1>
        <div className="bg-[#1e1f27] text-white">
          <Faqs/>
        </div>
      </div>
    </div>
  );
};

export default Faqpage;
