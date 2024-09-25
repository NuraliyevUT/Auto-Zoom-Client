import { createContext, useState } from "react";

export const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState({});

  const getBrandData = () => {
    fetch("https://realauto.limsa.uz/api/brands/")
      .then((resp) => resp.json())
      .then((data) => {
        if(data.success){
          setBrand(data.data)
        }
      })
      .catch((error) => console.log(error));
  };

  return <BrandContext.Provider value={{ brand, getBrandData }}>{children}</BrandContext.Provider>;
};
