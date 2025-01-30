import React from "react";
import "./main.css";

const Main = () => {
  return (
    <section className="main">
      <main className="main_bloc">
        <div className="main_img"></div>
        <div className="main_conteiner">
          <h2 className="main_subtitle">60% Discount</h2>
          <h1 className="main_title">
            Winter <br />
            Collection
          </h1>
          <p className="main_text">Best Cloth Collection By 2024!</p>
          <a href="/categoryList" className="main_btn">
            Shop Now
          </a>
        </div>
      </main>
    </section>
  );
};
export default Main;
