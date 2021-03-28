import React, { useEffect, useState } from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import axios from "axios";

const CategoryPage = ({ match }) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/${match.params.category}`);
      setShopData(data);
    };

    fetchData();
  }, [match.params.category]);

  const products = shopData.items;
  const title = shopData.title;

  return (
    <div>
      <ProductsCategory items={products} title={title} />
    </div>
  );
};

export default CategoryPage;
