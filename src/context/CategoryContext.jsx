import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://realauto.limsa.uz/api/cars/category")
      .then((resp) => resp.json())
      .then((data) => setCategory(data?.data))
      .catch((error) => console.log(error));
  }, []);

  return <CategoryContext.Provider value={{ category }}>{children}</CategoryContext.Provider>;
};
