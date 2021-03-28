import React from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import shopData from "../ShopPage/ShopData";

const KidsPage = () => {
  const kidsProducts = shopData.find(
    (category) => category.title.toLowerCase() === "kids"
  ).items;
  const title = "Kids Wear";
  return (
    <div>
      <ProductsCategory title={title} items={kidsProducts} />
    </div>
  );
};

export default KidsPage;
