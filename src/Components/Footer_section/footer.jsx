import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer_wrap">
        <div className="footer_menu">
          <a href="tel:+375291112233" target="_bank" class="footer_block">
            <p>+375 (29) 111-22-33</p>
            <p>Call Us</p>
          </a>
          <a
            href="https://www.google.com.ua/maps/@40.7598182,-73.9796803,17.75z?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
            target="_bank"
            className="footer_block"
          >
            <p>Store Shop</p>
            <p>meet us</p>
          </a>
          <a
            href="https://mail.google.com"
            target="_bank"
            className="footer_block"
          >
            <p>store@compani.com</p>
            <p>write us</p>
          </a>
        </div>
      </div>

      <div className="networks">
        <div className="networks_imgs">
          <a
            href="https://web.telegram.org/"
            target="_bank"
            className="networks_link"
          >
            <svg
              class="networks_img"
              width="24"
              height="24"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 1L1 8.5L8 9.5M20 1L17.5 16L8 9.5M20 1L8 9.5M8 9.5V15L11.2488 11.7229"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_bank"
            className="networks_link"
          >
            <svg
              className="networks_img"
              width="24"
              height="24"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_bank"
            className="networks_link"
          >
            <svg
              className="networks_img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a href="https://x.com/" target="_bank" className="networks_link">
            <svg
              className="networks_img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
                stroke-width="1.5"
              ></path>
              <path
                d="M20 3L4 21"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="networks_text">
          <p>© Copyright 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
