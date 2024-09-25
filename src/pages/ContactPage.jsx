import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1e1f27] text-white w-full">
      <div className="container">
        <Link
          to={"/"}
          className="xl:pt-[80px] lg:pt-[70px] md:pt-[50px] sm:pt-[40px] pt-[30px] block text-[#fff9] text-sm"
        >
          {t("Luxury Cars for Rent in Dubai / Contacts")}
        </Link>
        <h1 className="xl:text-3xl lg:text-3xl  md:text-2xl sm:text-xl text-xl xl:py-[35px] lg:py-[30px] md:py-[20px] sm:py-[10px] py-[10px]">
          {t("HAVE ANY QUESTIONS?")}
        </h1>
        <h3 className="xl:text-lg lg:text-lg md:text-md sm:text-md text-sm pt-[10px]  xl:pb-[40px] lg:pb-[30px]  md:pb-[20px] sm:pb-[10px] pb-[10px] text-[#fff9]">
          {t("We would love to help")} <br />
          {t(
            "Auto Zoom Car Rental Dubai, is the best luxury car rental Dubai based company."
          )}
        </h3>

        <h2 className=" xl:pl-[26px] lg:pl-[26px] md:pl-[26px] sm:pl-[26px] pl-0 xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl xl:pt-[30px] lg:pt-[25px] md:pt-[17px] sm:pt-[10px] pt-10px  xl:pb-[10px] lg:pb-[10px] md:pb-[10px] sm:pb-[10px] pb-[10px]">
          {t("Head office")}
        </h2>
        <ul>
          <li className="flex gap-[10px] py-[3px] xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm items-center">
            <CiLocationOn className="text-[22px]" />
            <h3>
              {t("Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates")}
            </h3>
          </li>
          <li className="flex gap-[10px] py-[3px] xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm items-center">
            <MdLocalPhone className="text-[18px]" />
            <Link to="tel:+971 52 7030189">+971 52 7030189</Link>
          </li>
          <li className="flex gap-[10px] py-[3px] xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm items-center">
            <IoMailOpenOutline className="text-[18px]" />
            <Link to="mailto:office@autozoomrental.com">
              office@autozoomrental.com
            </Link>
          </li>
        </ul>
        <hr className="my-[15px] border-[1.4px]" />
        <div className="w-full py-[20px]">
          <iframe
            className="rounded"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1725861322364!5m2!1sen!2sus"
            width="100%"
            height="320"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
