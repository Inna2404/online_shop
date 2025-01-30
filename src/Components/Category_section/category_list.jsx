import React, { useEffect, useState } from "react";
import "./category_list.css";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/product.jsx";

const CategoryList = () => {
  const [showMenLinks, setShowMenLinks] = useState(false);
  const [showWomenLinks, setShowWomenLinks] = useState(false);
  const [filter, setFilter] = useState("all");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/letest") {
      setFilter("letest");
    }
  }, [location]);

  const filteredProducts = location.state?.filteredProduct
    ? location.state.filteredProduct
    : filter === "all"
      ? products
      : filter === "letest"
        ? products.filter((product) => product.name === "letest")
        : products.filter(
            (product) =>
              product.category === filter.split("-")[0] &&
              product.name === filter.split("-")[1]
          );

  return (
    <section>
      <div className="category_list_wrapper">
        <ul className="category_lit_list">
          <li>
            <a
              href="#"
              onClick={() => setShowMenLinks(!showMenLinks)}
              className={filter.includes("Men") ? "active" : ""}
            >
              Men
            </a>
            {showMenLinks && (
              <ul className="category_list_men">
                <li>
                  <a href="#" onClick={() => setFilter("Men-tshirt")}>
                    t-shirt
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-blouse")}>
                    blouse
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-jeans")}>
                    jeans
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-trousers")}>
                    trousers
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-outerwear")}>
                    outerwear
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-headdress")}>
                    headdress
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Men-shoes")}>
                    shoes
                  </a>
                </li>
                <li>
                  <Link
                    to="#"
                    className={filter === "letest" ? "active" : ""}
                    onClick={() => setFilter("Men-letest")}
                  >
                    letest
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              onClick={() => setShowWomenLinks(!showWomenLinks)}
              className={filter.includes("Women") ? "active" : ""}
            >
              Women
            </a>
            {showWomenLinks && (
              <ul className="category_list_women">
                <li>
                  <a href="#" onClick={() => setFilter("Women-tshirt")}>
                    t-shirt
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-blouse")}>
                    blouse
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-jeans")}>
                    jeans
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-trousers")}>
                    trousers
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-dress")}>
                    dress
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-skirt")}>
                    skirt
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-outerwear")}>
                    outerwear
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-headdress")}>
                    headdress
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setFilter("Women-shoes")}>
                    shoes
                  </a>
                </li>
                <li>
                  <Link to="#" onClick={() => setFilter("Women-letest")}>
                    letest
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="cards">
        {filteredProducts.map((product) => (
          <Link
            className="card"
            key={product.id}
            to={`/product/${product.id}`}
            // to={`/product/${products.category}/${products.name}`}
          >
            <img />
            <div className="card_text">
              <h4>{`${product.category.charAt(0).toUpperCase() + product.category.slice(1)} ${product.name}`}</h4>
              <div className="card_size">
                {product.sizes.map((size) => (
                  <p key={size}>{size}</p>
                ))}
              </div>
              <h5>{product.price}</h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoryList;
