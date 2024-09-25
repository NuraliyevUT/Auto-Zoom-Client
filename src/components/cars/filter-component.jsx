import React, { useContext, useEffect, useState } from "react";
import { getFilterData, getModeldId } from "./filter";
import { CarsContext } from "../../context/CarsContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const FilterComponent = ({ setIsOpen }) => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng") || "en";
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [collectionBrandId, setCollectionBrandId] = useState([]);
  const [collectionCategorydId, setCollectionCategoryId] = useState([]);
  const [collectionModelId, setCollectionModelId] = useState("");

  const { getCarData } = useContext(CarsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getFilterData("brands", setBrandData);
    getFilterData("categories", setCategoryData);
    getFilterData("models", setModelData);
  }, []);

  const handleCheckboxChange = (id, type) => {
    if (type === "brand") {
      setCollectionBrandId((prevCollectionBrandId) => {
        if (prevCollectionBrandId.includes(id)) {
          // If it's already in the collection, remove it
          return prevCollectionBrandId.filter((item) => item !== id);
        } else {
          // Otherwise, add it
          return [...prevCollectionBrandId, id];
        }
      });
    } else {
      setCollectionCategoryId((prevCollectionBrandId) => {
        if (prevCollectionBrandId.includes(id)) {
          // If it's already in the collection, remove it
          return prevCollectionBrandId.filter((item) => item !== id);
        } else {
          // Otherwise, add it
          return [...prevCollectionBrandId, id];
        }
      });
    }
  };

  const isChecked = (id, type) => {
    if (type === "brand") {
      return collectionBrandId.includes(id);
    } else {
      return collectionCategorydId.includes(id);
    }
  };

  useEffect(() => {
    getModeldId(collectionBrandId, setModelData);
  }, [collectionBrandId]);

  const getCars = (e) => {
    e.preventDefault();
    let brandUrl =
      collectionBrandId?.length > 0
        ? "brand_id=" + collectionBrandId?.join("&brand_id=")
        : "";
    let categoryUrl =
      collectionCategorydId?.length > 0
        ? "category_id=" + collectionCategorydId?.join("&category_id=")
        : "";
    let modelUrl = collectionModelId ? "model_id=" + collectionModelId : "";
    let url = [categoryUrl, brandUrl, modelUrl].join("&");

    fetch(`https://realauto.limsa.uz/api/cars?${url}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data?.success === true) {
          getCarData(data?.data);
        }
      })
      .catch((error) => console.log(error));

    navigate("/cars");
    setIsOpen(false);
  };

  const onReset = () => {
    setCollectionBrandId([])
    setCollectionCategoryId([])
    setCollectionModelId([])
  }

  return (
    <form onSubmit={getCars}>
      <div className="mb-10">
        <h3 className="text-[22px] text-white font-light mb-[25px]">
          {t("Car type")}
        </h3>

        <div className="flex flex-col gap-y-[14px]">
          {categoryData?.map((elem) => (
            <label
              key={elem?.id}
              className="flex gap-x-[15px] cursor-pointer text-[18px] text-white"
            >
              <input
                type="checkbox"
                checked={isChecked(elem?.id, "category")}
                onChange={() => handleCheckboxChange(elem?.id, "category")}
              />{" "}
              <span>{lang === "en" ? elem?.name_en : elem?.name_ru}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-[22px] text-white font-light mb-[25px]">{t("Brand")}</h3>

        <div className="flex flex-col gap-y-[14px]">
          {brandData?.map((elem) => (
            <label
              key={elem?.id}
              className="flex gap-x-[15px] cursor-pointer text-[18px] text-white"
            >
              <input
                type="checkbox"
                checked={isChecked(elem?.id, "brand")}
                onChange={() => handleCheckboxChange(elem?.id, "brand")}
              />
              <span>{elem?.title}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-white font-light mb-10">{t("Model")}</h3>

        <div className="flex flex-col gap-y-[14px]">
          <select
            onClick={(e) => setCollectionModelId(e.target.value)}
            className="border-[1.5px] border-[#c4c4c4] outline-0 text-black rounded-[7px] py-[15px] px-[25px] text-[16px]"
          >
            <option value="" className="text-[12px]">
              All
            </option>
            {modelData?.map((elem) => (
              <option key={elem?.id} value={elem?.id} className="text-[12px]">
                {elem?.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between gap-x-10 mt-10">
        <button onClick={onReset} className="bg-transparent border-[1.3px] border-white transition hover:bg-[#009a00] rounded-[10px] text-white cursor-pointer text-[19px] tracking-[2px] outline-0 py-5 px-10">
          {t("Reset")}
        </button>
        <button
          type="submit"
          className="bg-[#009a00] border-[1.3px] border-[#009a00] transition hover:bg-transparent rounded-[10px] text-white cursor-pointer text-[19px] tracking-[2px] outline-0 py-5 px-10"
        >
          {t("Submit")}
        </button>
      </div>
    </form>
  );
};

export default FilterComponent;
