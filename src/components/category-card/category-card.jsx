import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSkeleton from "../../shared/custom-skeleton";
import { useTranslation } from "react-i18next";

const CategoryCard = ({ item, extraClass }) => {
  const [loading, setLoading] = useState(true);
  
  let newImg = item?.car_images?.find((img) => img?.is_main);
  const { t } = useTranslation();

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(handleImageLoad(), 2000)
  }, [loading])

  return (
    <article
      className={`${
        extraClass ? extraClass : ""
      } hover:bg-card-hover w-max p-5 rounded-[20px]`}
    >
      <Link to={`/carsinfo/${item?.id}`} className="text-white w-[265px]">
        <div className="w-[265px] h-[290px] flex items-center justify-center">
          <CustomSkeleton loading={loading} height={290} borderRadius={10}>
            <img
              src={`https://realauto.limsa.uz/api/uploads/images/${newImg?.image?.src}`}
              onLoad={handleImageLoad}
              alt={item?.brand?.title}
              className={`object-cover`}
              style={loading ? {display: "none"} : {display: "block"}}
            />
          </CustomSkeleton>
        </div>

        <h3
          className={`border-b-[1.3px] border-[#ffffff63] text-[19px] font-normal tracking-[2px] mb-[10px] p-[7px] ${
            loading ? "pl-0" : ""
          }`}
        >
          {loading ? <CustomSkeleton width={200} /> : `${item?.brand?.title} ${item?.model?.name}`}
        </h3>

        <h4 className="mb-[10px] text-[20px] font-semibold">
          
          {loading ?<CustomSkeleton width={100} /> : (
            <>
              AED {item?.price_in_aed}{" "}
              <span className="text-[18px] text-[#9e9a9a] font-light">
                / $ {item?.price_in_usd}
              </span>
            </>
          )}
        </h4>

        <p className="text-[#b3b2b2] text-[14px]">
          {loading ? <CustomSkeleton width={80} /> : t("per day")}
        </p>
      </Link>
    </article>
  );
};

export default CategoryCard;
