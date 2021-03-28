import React from "react";
import { Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductsCategory = ({ items, title }) => {
  return (
    <div>
      <h2 className='text-center my-5'>{title}</h2>
      <Row>
        {items ? (
          items.map((item) => (
            <ProductItem key={item.id} {...item} title={title} />
          ))
        ) : (
          <h2>Loading ...</h2>
        )}
      </Row>
    </div>
  );
};

export default ProductsCategory;
