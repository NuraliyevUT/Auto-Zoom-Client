import React, { useContext, useEffect, useState } from "react";
import CarsGrid from "../../components/cars/cars-grid";
import { CarsContext } from "../../context/CarsContext";
import { useParams } from "react-router-dom";

const CarParam = () => {
  const { cars, getCarData } = useContext(CarsContext);
  const {param} = useParams()

  const getData = () => {
    let url = "https://realauto.limsa.uz/api/cars?limit=300"

     if(param?.includes("model")){
      url = url + "&brand_id=" + param?.replace("model", "")  
    }else{
      url = url + "&category_id=" + param
    }

    fetch(url)
    .then((resp) => resp?.json())
    .then((data) => getCarData(data?.data))
    .catch((error) => console.log(error));
    
  }

  useEffect(() => {
    getData()
  }, [param]);

  return <CarsGrid data={cars}/>;
};

export default CarParam;
