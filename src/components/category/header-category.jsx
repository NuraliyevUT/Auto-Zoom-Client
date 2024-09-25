import React from "react";
import LinkNavigate from "../../shared/link";
import { useTranslation } from "react-i18next";

const HeaderCategory = ({ title, id }) => {
  const { t } = useTranslation();

  return (
    <div className="text-white flex justify-between items-center mb-5">
      <h2 className="text-[35px] uppercase">
        {title} {t("RENTAL DUBAI")}
      </h2>
      <LinkNavigate link={`/cars/${id}`} content={"see all"} />
    </div>
  );
};

export default HeaderCategory;
