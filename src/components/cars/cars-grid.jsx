import React, { useState } from "react";
import CarCard from "./car-card";

const CarsGrid = ({data}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-y-6 gap-x-3 py-10">
      {data?.map((car, index) => (
        <div key={index} className="flex items-start">
          <CarCard car={car} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </div>
      ))}
    </div>
  );
};

export default CarsGrid;
