import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "../data/product";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const handleSearch = () => {
    const filteredProduct = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredProduct);
    if (filteredProduct.length > 1) {
      navigation("/categoryList", { state: { filteredProduct } });
    }
  };

  useEffect(() => {
    const handleKeyDown = (el) => {
      if (el.key === "Enter") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [query]);

  const handleChange = (el) => {
    setQuery(el.target.value);
  };
  return (
    <header>
      <div className="nav">
        <a className="nav_home" href="/">
          Store
        </a>

        <ul className="nav_list">
          <li className="nav_item">
            <a href="/">Home</a>
          </li>
          <li className="nav_item">
            <Link to="/categoryList">Catagory</Link>
          </li>
          <li className="nav_item">
            <Link to="/letest">Latest</Link>
          </li>
          {/* <li className="nav_item">
            <Link to="/blog">Blog</Link>
          </li> */}
          {/* <li className="nav_item">
            <a href="">Pages</a>
          </li> */}
          <li className="nav_item">
            <a href="#footer">Contact</a>
          </li>
        </ul>

        <ul className="nav_search">
          <li className="nav_item">
            <div className="search">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search products"
              />

              <button
                type="submit"
                onClick={handleSearch}
                class="material-symbols-outlined"
              >
                search
              </button>
            </div>
          </li>

          <li className="nav_item">
            <a className="favorite" href="">
              <div></div>
            </a>
          </li>
          <li className="nav_item">
            <a className="shoping_cart" href="">
              <div></div>
            </a>
          </li>
          <li className="nav_item">
            <a className="sign_in" href="">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
