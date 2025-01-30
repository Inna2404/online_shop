import React from "react";
import "./block.css";
const Block = () => {
  return (
    <section id="block" className="blog_section">
      <h3>A little history about us</h3>
      <div className="blog_wrapper">
        <div className="blog_img"></div>
        <div>
          <h1 className="blog_title">logo</h1>
          <p className="blog_text">
            We are a young company. A little history about us.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sit amet enim dictum, eleifend lorem sit amet, pharetra
            purus. Nunc pharetra lacus sed ipsum ultrices, ac luctus quam
            sagittis.
            <br /> Duis eget lacinia lorem. Donec eget vestibulum lectus. Nullam
            id ex ut neque fringilla rhoncus. Morbi dictum efficitur mi.
          </p>
          <p className="blog_text">
            We are a young company. A little history about us.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sit amet enim dictum, eleifend lorem sit amet, pharetra
            purus. Nunc pharetra lacus sed ipsum ultrices, ac luctus quam
            sagittis.
            <br /> Duis eget lacinia lorem. Donec eget vestibulum lectus. Nullam
            id ex ut neque fringilla rhoncus. Morbi dictum efficitur mi.
            Curabitur lobortis.
          </p>
          <p className="blog_text blog_uperrcase">Morbi dictum efficitur mi.</p>
        </div>
      </div>
    </section>
  );
};
export default Block;
