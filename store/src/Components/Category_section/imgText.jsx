import React from "react";
import "../../App.css";
// "Women`S"
// const titles = ["Owmen`S", "Winter Cloth", "Man`S"];

const ImgText = ({ title }) => {
  return (
    <div className="category_block">
      <h2 className="category_title">{title}</h2>
      <button className="category_btn">Best New Deals</button>
      <p className="category_text">New Collection</p>
    </div>
  );
};
export default ImgText;
