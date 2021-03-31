import React from "react";
import { Row } from "react-bootstrap";
import CollectionItem from "../CollectionItem/CollectionItem.jsx";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h4 className='collection-preview-title'>{title}</h4>
      <Row>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItems }) => (
            <CollectionItem key={id} {...otherItems} id={id} />
          ))}
      </Row>
    </div>
  );
};

export default CollectionPreview;
