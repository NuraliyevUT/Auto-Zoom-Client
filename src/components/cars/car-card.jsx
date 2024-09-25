import React from "react";
import { Link } from "react-router-dom";
import CustomSkeleton from "../../shared/custom-skeleton";
import { useTranslation } from "react-i18next";


const CarCard = ({ car, isLoading, setIsLoading }) => {
  const { t } = useTranslation();

  let newImg = car?.car_images?.find((item) => item?.is_main);

  setIsLoading(false)

  return (
    <Link to={`/carsinfo/${car?.id}`} className="w-[290px] h-[400px] flex flex-col justify-between bg-gradient-to-r from-[#29292944] to-[#95979727] p-4 rounded-lg text-white min-w-[250px] transition hover:bg-card-hover border-2 border-[#ffffff2f] lg:mx-5">
      {isLoading ? (
        <CustomSkeleton height={200} width="100%" />
      ) : (
        <img
          src={`https://realauto.limsa.uz/api/uploads/images/${newImg?.image?.src}`}
          alt={car?.model?.title}
          className="w-full h-[200px] object-contain rounded-md"
        />
      )}

      <div>
        <h3 className="mt-4 text-lg font-semibold border-b-2 border-[#ffffff2f]">
          {isLoading ? (
            <CustomSkeleton width="80%" />
          ) : (
            `${car?.brand?.title} ${car?.model?.name}`
          )}
        </h3>

        <p className="text-gray-400">
          {isLoading ? (
            <CustomSkeleton width="50%" />
          ) : (
            `AED ${car?.price_in_aed} / $${car?.price_in_usd}`
          )}
        </p>
        <p className="text-[#b3b2b2] text-sm">{t("per day")}</p>
      </div>

      <div className="flex justify-between mt-4">
        {isLoading ? (
          <>
            <CustomSkeleton width={100} height={36} />
            <CustomSkeleton width={100} height={36} />
          </>
        ) : (
          <>
            <Link
              to="https://wa.me/971527030189"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-4 py-2 rounded-full"
            >
              WhatsApp
            </Link>
            <Link
              to="https://t.me/+971527030189"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded-full"
            >
              Telegram
            </Link>
          </>
        )}
      </div>
    </Link>
  );
};

export default CarCard;
