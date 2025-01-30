import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import "./modal.css";
const Modal = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <div id="modal" className="modal_product-detalis">
        <div className="product-details_imgs">
          <div className="product-details_imgs__mini">
            <img width={80} height={95} />
            <img width={80} height={95} />
            <img width={80} height={95} />
            <img width={80} height={95} />
          </div>
          <img
            className="product_main_img"
            width={600}
            height={700}
            color="000"
          />
        </div>
        <div className="product-detalis">
          <h3>
            {product.category} - {product.name}{" "}
          </h3>
          <h4 className="product-detalis_price">{product.price}</h4>
          <div className="line"></div>
          <p className="product-detalis_size">size</p>
          <div className="product-detalis_size_block">
            {product.sizes.map((size) => (
              <p key={size}>{size}</p>
            ))}
          </div>
          <p className="product-detalis_color">colors</p>
          <div className="product-detalis_imgs">
            <img width={50} height={50} color="000" />
            <img width={50} height={50} color="000" />
          </div>

          <div className="product-detalis_btns">
            <button className="product-detalis_btn">Add to cart</button>
            <button className="product-detalis_btn">Buy one click</button>
          </div>
        </div>
      </div>

      <div className="modal_product-description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Nulla sapiente voluptatum cupiditate ea, fugiat autem earum molestiae
          dignissimos praesentium voluptates quae necessitatibus, cum corrupti
          ab atque laudantium!
          <br />
          At, nam ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Rerum totam consequatur dolore repudiandae.
          <br /> Rerum sint officia saepe? Explicabo commodi quis ipsam, fugiat
          accusantium laborum ut quia atque ex ad veniam sit et magnam in saepe
          cupiditate magni voluptas perspiciatis numquam dolor incidunt?
          <br />
          Officiis nihil, ratione consequuntur voluptatum asperiores sint
          deleniti.
        </p>
      </div>
      <div className="line_description"></div>

      <section className="similar">
        <h3>similar goods</h3>
        <div className="similar_conteiner__img">
          <img width={400} height={400} color="000" />{" "}
          <img width={400} height={400} color="000" />{" "}
          <img width={400} height={400} color="000" />{" "}
          <img width={400} height={400} color="000" />{" "}
        </div>
      </section>
      <div className="modal_product-btns">
        <div className="modal_product-user">
          <div className="btns_active">
            <button>reviews</button>
            <div className="btns-line"></div>
            <form>
              <h2>Add review</h2>

              <p>Your rating</p>
              <div>
                <p>Your feedback</p>
                <textarea
                  type="text"
                  className="feetback"
                  // maxLength={150}
                ></textarea>
              </div>
              <div>
                <p>Name</p>
                <input type="text" required></input>
              </div>
              <div>
                <p>Email</p>
                <input type="email" required></input>
              </div>
              <button></button>
            </form>
          </div>
          <div className="btns_active">
            <button>question</button>
            <div className="btns-line"></div>
          </div>
        </div>
        <button className="modal_product-add_rewiew">add review</button>
        {/* <button className="modal_product-add_question">add question</button> */}
      </div>
    </>
  );
};
export default Modal;
