import React from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import shopData from "../ShopPage/ShopData";

const WomenPage = () => {
  const womenProducts = shopData.find(
    (category) => category.title.toLowerCase() === "women"
  ).items;
  const title = "Women Wear";
  return (
    <div>
      <ProductsCategory title={title} items={womenProducts} />
    </div>
  );
};

export default WomenPage;
