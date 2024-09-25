export const getFilterData = (url, func) => {
  fetch(`https://realauto.limsa.uz/api/${url}`)
    .then((resp) => resp.json())
    .then((data) => func(data?.data))
    .catch((error) => console.log(error));
};


export const getModeldId = (id, func) => {
  let idText = id?.length > 0 ? "brand_id=" + id?.join("&brand_id=") : ""
  
  fetch(`https://realauto.limsa.uz/api/models?${idText}`)
  .then((resp) => resp.json())
  .then((data) => func(data?.data)
  )
  .catch((error) => console.log(error));
};
