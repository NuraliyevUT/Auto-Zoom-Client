import React from "react";
import filterIcon from "../../assets/icon/filter.svg";
import { TbChevronsLeft } from "react-icons/tb";
import FilterComponent from "./filter-component";
import { useTranslation } from "react-i18next";

const FilterSidebar = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <>
      {!isOpen ? (
        <div
          className="absolute top-10 z-40 2md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <img src={filterIcon} alt="filter icon" />
        </div>
      ) : (
        <div
          className="absolute top-10 z-40 2md:hidden text-white text-xl bg-slate-600 rounded-[2px] p-3"
          onClick={() => setIsOpen(false)}
        >
          <TbChevronsLeft />
        </div>
      )}

      <div
        className={`${
          isOpen ? "flex" : "hidden 2md:flex"
        } relative z-40 py-[50px] w-full h-max 2md:w-[455px] bg-[#272933]`}
      >
        <div className="container py-5">
          <h2 className="mb-5 text-white tracking-[1.6px] text-[28px]">
            {t("Filter By")}
          </h2>

          <FilterComponent setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
