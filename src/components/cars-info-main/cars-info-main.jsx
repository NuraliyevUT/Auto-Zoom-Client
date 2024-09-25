import React, { useEffect, useState } from "react";
import {
  atIcon,
  calendarIcon,
  carIcon,
  colorIcon,
  dvigatelIcon,
  fullIcon,
  peopleIcon,
  petrolIcon,
  spidometrIcon,
  timerIcon,
} from "./import-icon";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CustomSkeleton from "../../shared/custom-skeleton";
import { useTranslation } from "react-i18next";

const TOKEN = "7160474181:AAH3gUma-7m7XvwY0AYTbcKFaXjWLJ2MmUg";
const CHAT_ID = 467533539;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const CarsInfoMain = ({ data }) => {
  const [mainImg, setMainImg] = useState();
  let lang = localStorage.getItem("i18nextLng") || "en";
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    handleImageLoad();
  }, [loading]);

  const changeImg = (index) => {
    setMainImg(data?.car_images[index]);
  };

  useEffect(() => {
    setMainImg(data?.car_images?.at(-1));
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendData = (data) => {
    const messageContent = `Name: ${data?.name}\nPhone: +${data?.phone}\nGuests: ${data?.period}\nDate: ${data?.details}`;

    fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageContent,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.ok) {
          toast.success("Success!");
        } else {
          toast.error("Error!");
        }
      })
      .catch((error) => toast.error(error));
  };

  const {t} = useTranslation()

  return (
    <div className="text-white pt-[50px] mb-[100px]">
      <h2 className="text-[36px] 2sm:text-[50px] font-bold tracking-[-0.02em] mb-[38px] uppercase">
        {data?.brand?.title} {data?.model?.name} ({data?.color})
      </h2>
      <div className="flex flex-col lg:flex-row gap-x-6 justify-start">
        <div className="max-w-[682px]">
          <div className="flex flex-col-reverse md:flex-row gap-y-5 gap-x-5">
            <div className="flex  md:flex-col gap-x-5 gap-y-2">
              {data?.car_images?.map((el, index) => {
                return (
                  <CustomSkeleton loading={loading} width={150} height={80} key={index}>
                    <article
                      className="w-[150px] h-[80px] cursor-pointer"
                      onClick={() => changeImg(index)}
                    >
                      <img
                        src={`https://realauto.limsa.uz/api/uploads/images/${el?.image?.src}`}
                        alt="car image"
                        onLoad={handleImageLoad}
                        className="w-full h-full object-cover"
                      />
                    </article>
                  </CustomSkeleton>
                );
              })}
            </div>

            <div>
              <div className="w-full md:w-[493px] h-[400px] sm:h-[500px]">
                <CustomSkeleton loading={loading} width={493} height={500}>
                  <img
                    src={`https://realauto.limsa.uz/api/uploads/images/${
                      mainImg ? mainImg?.image?.src : ""
                    }`}
                    onLoadCapture={handleImageLoad}
                    alt="car image"
                    className="w-full h-full object-center"
                  />
                </CustomSkeleton>
              </div>
            </div>
          </div>

          <div className="py-[25px]">
            <h3 className="text-[28px] font-bold mb-[25px]">
              Good to know about {data?.brand?.title} {data?.model?.name} (
              {data?.color})
            </h3>
            <div className="py-[10px]">
              <p className="text-[#fff9] text-[12px] mb-2">
                {t("Kilometrage limit per day")}
              </p>
              <h4 className="font-bold">
                {data?.max_speed} {t("KM (Every extra km will be charged 20 AED/km)")}
              </h4>
            </div>
            <div className="py-[10px]">
              <p className="text-[#fff9] text-[12px] mb-2">
                {t("Car rental deposit amount")}
              </p>
              <h4 className="font-bold">
                {data?.max_speed} {t("KM (The deposit is refunded within 28 days)")}
              </h4>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col 2sm:flex-row lg:flex-col xl:flex-row gap-y-5 2sm:justify-between gap-x-5 border-b-[1.3px] pb-5 mb-5">
            <div>
              <h3 className="text-[26px] mb-[5px]">
                AED {data?.price_in_aed}{" "}
                <span className="text-[22px] text-[#ffffff85]">
                  / $ {data?.price_in_usd}
                </span>
              </h3>
              <p className="text-[16px] mb-[5px] text-[#ffffff7e]">per day</p>
              <h4 className="text-[18px] font-normal line-through flex items-center">
                AED <span className="text-[15px] text-[#ffffff85]"> / $</span>
              </h4>
            </div>
            <div className="w-[330px]">
              <div className="w-full flex flex-col 2sm:flex-row justify-between mb-5">
                <p className="text-[#ffffff7e] text-[13px]">{t("Deposit")}</p>
                <h4 className="text-[15px] font-bold">
                  AED 0{" "}
                  <p className="text-[#ffffff7e] text-[12px]">
                    AED 0 {t("for credit cards payment")}
                  </p>
                </h4>
              </div>
              <div className="w-full flex flex-col 2sm:flex-row justify-between">
                <p className="text-[#ffffff7e] text-[13px]">
                  {t("Premium protection")}
                </p>
                <h4 className="text-[15px] font-bold">
                  AED 0{" "}
                  <p className="text-[#ffffff7e] text-[12px]">
                    AED 0 {t("AED 0 for credit cards payment")}
                  </p>
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-10 justify-start lg:justify-between border-b-[1.3px] pb-5">
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={calendarIcon} alt="car character" />
              {data?.year}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={timerIcon} alt="car character" />
              {data?.seconds}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={spidometrIcon} alt="car character" />
              {data?.max_speed}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={peopleIcon} alt="car character" />
              {data?.max_people}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={colorIcon} alt="car character" />
              {data?.color}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={dvigatelIcon} alt="car character" />
              {data?.motor}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={atIcon} alt="car character" />
              {data?.transmission}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={fullIcon} alt="car character" />
              {data?.drive_side}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={petrolIcon} alt="car character" />
              {data?.petrol}
            </article>
            <article className="flex flex-col items-center justify-center w-[100px] text-center">
              <img src={carIcon} alt="car character" />
              {lang === "en"
                ? data?.category?.name_en
                : data?.category?.name_ru}
            </article>
          </div>

          <div className="flex gap-x-5 justify-center py-10">
            <Link
              to={"https://wa.me/971527030189"}
              className="bg-[#5aec5a] h-[60px] hover:opacity-60 text-white flex items-center justify-center rounded-[15px] border-[1.4px] border-black text-[35px] w-[75px]"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to={"https://t.me/+971527030189"}
              className="bg-[#2374f8] h-[60px] hover:opacity-60 text-white flex items-center justify-center rounded-[15px] border-[1.4px] border-black text-[35px] w-[75px]"
            >
              <FaTelegramPlane />
            </Link>
            <Link
              to={"tel:+971527030189"}
              className="bg-[#ffb630] h-[60px] hover:opacity-60 text-white flex items-center justify-center rounded-[15px] border-[1.4px] border-black text-[35px] w-[75px]"
            >
              <FaPhone />
            </Link>
          </div>

          <div className="flex justify-center mb-[100px]">
            <form
              className="p-10 max-w-[400px] border border-[#c3c3c3]"
              onSubmit={handleSubmit(sendData)}
            >
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="w-full text-black outline-0 bg-[#838383bd] border-[1.5px] border-[#c3c3c3] text-xl p-5"
                />
                {errors.name && (
                  <p className="text-red-700">{t("This field is required")}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                  })}
                  placeholder="Phone"
                  className="w-full text-black outline-0 bg-[#838383bd] border-[1.5px] border-[#c3c3c3] text-xl p-5"
                />
                {errors.phone && (
                  <p className="text-red-700">{t("This field is required")}</p>
                )}
              </div>
              <input
                type="text"
                {...register("period")}
                placeholder="Period"
                className="w-full text-black outline-0 bg-[#838383bd] border-[1.5px] border-[#c3c3c3] mb-5 text-xl p-5"
              />
              <input
                type="text"
                {...register("detail")}
                placeholder="Details"
                className="w-full text-black outline-0 bg-[#838383bd] border-[1.5px] border-[#c3c3c3] mb-5 text-xl p-5"
              />
              <button
                type="submit"
                className="py-[15px] px-[25px] font-semibold text-xl bg-[#fc473e] border border-[#fff0]"
              >
                send
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-y-1 text-[#a4a4a4] text-[14px]">
            <p>{t("The price doesn't include additional 5% VAT.")}</p>
            <p>
              {t("There is a 3% transaction fee when paying by credit/debit card.")}
            </p>
            <p>
              {t("There is a 7% transaction fee when paying with American Express.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsInfoMain;
