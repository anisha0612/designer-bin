import React from "react";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem.jsx";

// * @desc Component is a part of Category page which maps through
// * all the items in the category and sends data to Product Item Component

const ProductsCategory = ({ items, title }) => {
  return (
    <div>
      <h2 className='text-center my-5'>{title}</h2>
      <Row>
        {items ? (
          items.map((item) => <ProductItem key={item._id} {...item} />)
        ) : (
          <h2>Loading ...</h2>
        )}
      </Row>
    </div>
  );
};

ProductsCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};
export default ProductsCategory;
