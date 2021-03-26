import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SHOP_DATA from "./ShopData.jsx";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx";
import "./ShopPage.css";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className='ShopPage'>
      <h1 className='ShopPage-title'>Collections</h1>
      <div className='preview'>
        <Row>
          {collections.map(({ id, ...otherCollections }) => (
            <CollectionPreview key={id} {...otherCollections} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ShopPage;
