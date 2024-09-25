import React, { useEffect, useState } from "react";
import logo from "../../assets/logo3.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [categoriesData, setCategoriesData] = useState([]);

  let lang = localStorage.getItem("i18nextLng") || "en";

  const getCategories = () => {
    fetch("https://realauto.limsa.uz/api/categories")
      .then((resp) => resp.json())
      .then((data) => setCategoriesData(data.data))
      .catch((error) => error.message);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <footer className="md:pt-[50px] md:pb-[103px] sm:pt-10 sm:pb-16 pt-5 pb-10 bg-[#111219] text-white">
      <div className="container sm:px-5 px-2">
        <ul className="flex justify-between flex-wrap list-none">
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 sm:items-start items-center mb-6">
            <Link to={"/"} className="h-20 flex items-center">
              <img
                className="w-[160px] hover:opacity-85"
                src={logo}
                alt="logo"
              />
            </Link>
            <div>
              <h1 className="merriweather-bold md:text-[32px] md:pt-[30px] sm:text-[29px] pt-7 text-[27px] -tracking-[0.02em]  uppercase max-w-[265px]">
                {t("footer.header")}
              </h1>
              <p className="text-[#fff9] text-[14px] leading-[150%] mt-[40px] mb-[14px] max-w-[265px]">
                {t("footer.description")}
              </p>
            </div>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <Link className="text-[18px] uppercase hover:opacity-85" to="/">
              {t("navbar.cars")}
            </Link>
            <ul>
              {categoriesData &&
                categoriesData?.map((category) => (
                  <li className="mt-[23px]" key={category?.id}>
                    <Link
                      className="text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]"
                      to={`/cars/${category?.id}`}
                    >
                      {lang === "en" ? category?.name_en : category?.name_ru}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <ul className="flex flex-col justify-between">
              <Link
                className="text-[18px] uppercase hover:opacity-85"
                to="/blog"
              >
                {t("navbar.blog")}
              </Link>
              <li className="mt-12">
                <Link
                  className="text-[18px] uppercase hover:opacity-85"
                  to="/service"
                >
                  {t("navbar.service")}
                </Link>
              </li>
              <li className="flex flex-col mt-12">
                <Link
                  className="text-[18px] uppercase hover:opacity-85"
                  to="/contact"
                >
                  {t("navbar.contact")}
                </Link>
                <span className="text-[14px] text-[#fff9]">
                  {t("footer.Elite 3 Sports City,")} <br />{" "}
                  {t("footer.Dubai 26W8 24J, United")} <br />{" "}
                  {t("footer.Arab Emirates")}
                  <br />
                  +971 52 7030189
                  <br />
                  {t("footer.Working hours:")} 24/7{" "}
                </span>
              </li>
            </ul>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <Link
              className="text-[18px] uppercase hover:opacity-85"
              to="/about"
            >
              {t("navbar.about")}
            </Link>
            <ul>
              <li className="mt-[23px]">
                <Link
                  className="text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]"
                  to="/"
                >
                  {t("footer.Our Team")}
                </Link>
              </li>
              <li className="mt-[23px]">
                <Link
                  className="text-[14px] text-[#fff9] uppercase hover:text-white transition-all duration-[0.3s]"
                  to="/faq"
                >
                  {t("footer.FAQ")}
                </Link>
              </li>
              <li className="xl:mt-[110px] lg:mt-[110px] md:mt-[20px] sm:mt-[20px] mt-2">
                <Link className="text[18px] hover:opacity-85" to="/">
                  {t("footer.Follow Us")}
                </Link>
                <div className="flex items-center gap-[10px] pt-5">
                  <Link
                    className="text-[#fff9]"
                    to="https://www.instagram.com/autozoomrental"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="text-[#fff9]"
                    to="https://www.facebook.com"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                  <Link className="text-[#fff9]" to="https://www.youtube.com">
                    <FaYoutube />
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex md:justify-between md:mt-2 justify-center mt-4 flex-wrap ">
          <Link
            className="md:mb-0 md:px-6 md:py-5 md:text-[16px] sm:mb-10 px-5 py-4 text-[14px] mb-7 uppercase inline-block border border-solid border-[#fff] rounded-[15px] outline-0 bg-transparent hover:bg-[#fe363b] hover:border-transparent transition-all duration-[0.3s]"
            to="tel:+971527030189"
          >
            {t("footer.GET BEST OFFER")}
          </Link>
          <div className="md:ml-0 sm:ml-2 w-[70%] border-t border-solid border-[#fff3] flex justify-between pt-6">
            <p className="sm:mr-0 mr-4 text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]">
              © 2024 {t("footer.Auto Zoom Car Rental.")} <br />{" "}
              {t("footer.United Arab Emirates.")}
            </p>
            <Link
              className="text-[14px] text-[#fff9] capitalize md:mr-28 mr-0 hover:text-white transition-all duration-[0.3s]"
              to="/terms"
            >
              {t("footer.Terms and Conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
