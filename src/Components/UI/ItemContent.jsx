import React from "react";
import "./ItemContent.css";
const ItemContent = (props) => {
  return (
    <div className="ItemContent-container">
      <h1>{props.value}</h1>
    </div>
  );
};

export default ItemContent;
