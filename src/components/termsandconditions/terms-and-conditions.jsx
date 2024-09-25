import React from "react";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1e1f27] text-white py-12 px-4 sm:px-8 lg:px-24 xl:px-32 2xl:px-48">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-left">
        {t("terms.header")}
      </h1>

      <p className="mb-6 text-sm sm:text-base lg:text-lg">{t("terms.desc")}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            {t("terms.subtitle1")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">{t("terms.desc1")}</p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            {t("terms.subtitle2")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            {t("terms.desc2")}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            {t("terms.subtitle3")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            {t("terms.desc3")}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
          {t("terms.subtitle4")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
          {t("terms.desc4")}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
          {t("terms.subtitle5")}
          </h2>
          <ul className="list-disc ml-4 sm:ml-8 text-sm sm:text-base lg:text-lg">
            <li>
              {t("terms.li1")}
            </li>
            <li>
            {t("terms.li2")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
