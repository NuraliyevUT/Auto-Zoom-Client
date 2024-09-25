import { createContext, useEffect, useState } from "react";

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [extraData, setExtraData] = useState([])

  const getCarData = (data) => {
    setCars(data);
    setExtraData(data)
  };

  const filterData = (search) => {
    if(!search){
      setCars(extraData)
      return;
    }

    const filterData = extraData?.filter((elem) => elem?.brand?.title?.toLowerCase()?.includes(search?.toLowerCase()) || elem?.model?.name?.toLowerCase()?.includes(search?.toLowerCase()))

    setCars(filterData)
  }

  return (
    <CarsContext.Provider value={{ cars, getCarData, filterData }}>
      {children}
    </CarsContext.Provider>
  );
};
