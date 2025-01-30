import first from "../../img/first.webp";
import second from "../../img/second.png";
import third from "../../img/third.jpg";
import "../../App.css";
import ImgText from "./imgText";
import { Link } from "react-router-dom";

const imgs = [third, third, second, second, second, second];
const titles = [
  "Winter Cloth",
  "Women Shoes",
  "Sweter",
  "Jeans",
  "Sweter",
  "Sweter"
];

const CollectionImg = () => {
  return (
    <>
      {imgs.map((img, index) => (
        <div
          className={`category_block_img_text ${
            index === 0
              ? "item1"
              : index === 1
                ? "item2"
                : index === 2
                  ? "item3"
                  : index === 3
                    ? "item4"
                    : index === 4
                      ? "item5"
                      : "item6"
          }`}
          key={index}
        >
          <img
            className="collection_img"
            src={img}
            alt={`Image ${index + 1}`}
          />
          <ImgText title={titles[index]} />
        </div>
      ))}
    </>
  );
};

export default CollectionImg;
