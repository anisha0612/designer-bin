import React, { useState } from "react";
import { Row } from "react-bootstrap";
import MenuItem from "../MenuItem/MenuItem.jsx";

const Directory = () => {
  const [section] = useState([
    {
      id: 1,
      title: "Women",
      imgSrc: `https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`,
      linkUrl: "women",
    },
    {
      id: 2,
      title: "Men",
      imgSrc: `https://images.unsplash.com/photo-1550246140-18d9dd4a6438?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbiUyMGNsb3RoZXMlMjBtb2RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
      linkUrl: "men",
    },
    {
      id: 3,
      title: "Kids",
      imgSrc: `https://images.unsplash.com/photo-1544413164-5f1b361f5b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`,
      linkUrl: "kids",
    },
  ]);
  return (
    <>
      <Row className='Directory'>
        {section.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </Row>
    </>
  );
};

export default Directory;
