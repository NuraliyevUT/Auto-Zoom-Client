import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarsInfoMain from "../components/cars-info-main/cars-info-main";
import { CategoryContext } from "../context/CategoryContext";
import CategoryCard from "../components/category-card/category-card";
import { useTranslation } from "react-i18next";

const CarsInfo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [carData, setCarData] = useState([]);

  const category = useContext(CategoryContext)

  const newCategory = category?.category?.map(elem => elem?.cars)?.flat() 

  useEffect(() => {
    fetch(`https://realauto.limsa.uz/api/cars/${id}`)
      .then((resp) => resp.json())
      .then((data) => setCarData(data?.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="bg-[#1e1f27]">
      <div className="container">
        <CarsInfoMain data={carData}/>

        <h2 className="mb-[25px] text-white text-[1.5em] font-bold">{t("SIMILAR OFFERS")}</h2>

        <div className="grid w-max grid-cols-1 2sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 pb-14">
          {newCategory?.map((elem) => {
            return <CategoryCard item={elem} key={elem?.id} extraClass={"bg-card-background "}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default CarsInfo;
