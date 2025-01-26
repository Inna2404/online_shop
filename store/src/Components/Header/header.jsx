import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li className="nav_item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav_item">
            <a href="">Pages</a>
          </li>
          <li className="nav_item">
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <ul className="nav_search">
          <li className="nav_item">
            <a className="search" href="">
              Search products
              <div>
                <span class="material-symbols-outlined">search</span>
              </div>
            </a>
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
