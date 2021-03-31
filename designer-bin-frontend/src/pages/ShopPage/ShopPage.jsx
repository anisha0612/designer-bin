import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx";
import "./ShopPage.css";

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api`);
      setShopData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='ShopPage'>
      <h1 className='ShopPage-title'>Collections</h1>
      <div className='preview'>
        <Row>
          {shopData.map(({ _id, ...otherCollections }) => (
            <CollectionPreview key={_id} {...otherCollections} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ShopPage;
