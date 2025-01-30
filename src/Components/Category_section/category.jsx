import React from "react";
import CollectionImg from "./img";
import "../../App.css";

const Catagory = () => {
  return (
    <section className="section_category">
      <h2 className="section_category_title">Shop by Catagory</h2>
      <div className="category_wrap">
        <a>
          <div className="category_block_wrap">
            <CollectionImg />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Catagory;
