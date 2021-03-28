import React from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import shopData from "../ShopPage/ShopData";

const MensPage = () => {
  const menProducts = shopData.find(
    (category) => category.title.toLowerCase() === "mens"
  ).items;

  const title = "Mens Wear";
  return (
    <div>
      <ProductsCategory title={title} items={menProducts} />
    </div>
  );
};

export default MensPage;
