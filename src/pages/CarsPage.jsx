import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/cars/filter-sidebar";
import { Outlet } from "react-router-dom";

const CarsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isOpen]);

  return (
    <div className="bg-[#1e1f27] min-h-[100vh] flex">
      <FilterSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen ? "hidden 2md:flex" : "flex justify-center 2md:justify-start items-start w-full"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default CarsPage;
