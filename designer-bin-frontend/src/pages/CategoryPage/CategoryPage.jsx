import React from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import shopData from "../ShopPage/ShopData";

const CategoryPage = ({ match }) => {
  const products = shopData.find(
    (category) => category.title.toLowerCase() === match.params.category
  ).items;
  const titleExtract = shopData.find(
    (category) => category.title.toLowerCase() === match.params.category
  ).title;

  const title = `${
    titleExtract[0].toUpperCase() + titleExtract.substring(1).toLowerCase()
  } Wear`;
  return (
    <div>
      <ProductsCategory title={title} items={products} />
    </div>
  );
};

export default CategoryPage;
