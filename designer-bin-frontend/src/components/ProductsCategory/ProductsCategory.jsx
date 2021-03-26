import React from "react";
import { Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductsCategory = ({ items, title }) => {
  return (
    <div>
      <h1 className='text-center'>{title}</h1>
      <Row>
        {items.map((item) => (
          <ProductItem key={item.id} {...item} title={title} />
        ))}
      </Row>
    </div>
  );
};

export default ProductsCategory;
