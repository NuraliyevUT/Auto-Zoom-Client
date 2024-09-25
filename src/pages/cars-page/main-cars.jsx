import { useContext, useEffect } from "react";
import CarsGrid from "../../components/cars/cars-grid";
import { CarsContext } from "../../context/CarsContext";

const MainCars = () => {
  const { cars, getCarData } = useContext(CarsContext);

  useEffect(() => {
    fetch("https://realauto.limsa.uz/api/cars?limit=300")
    .then((resp) => resp?.json())
    .then((data) => getCarData(data?.data))
    .catch((error) => console.log(error));
  }, [])

  console.log(cars);
  

  return <CarsGrid data={cars}/>;
};

export default MainCars;
