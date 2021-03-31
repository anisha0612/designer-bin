import React, { useEffect, useState } from "react";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory.jsx";
import axios from "axios";

const CategoryPage = ({ match }) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/${match.params.category}`);
      // console.log(data);
      setShopData(data);
    };

    fetchData();
  }, [match]);

  // const title = shopData.title;

  return (
    <div>
      <ProductsCategory items={shopData} />
    </div>
  );
};

export default CategoryPage;
