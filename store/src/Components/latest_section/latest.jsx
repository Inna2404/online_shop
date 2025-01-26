// import { useState } from "react";
// import React from "react";
// import "../Category_section/category_list.css";

// const products = [
//   { id: 1, category: "men", name: "letest", price: 50 },
//   { id: 2, category: "women", name: "letest", price: 50 }
// ];

// const Letest = () => {
//   const [showMenLinks, setShowMenLinks] = useState(false);
//   const [showWomenLinks, setShowWomenLinks] = useState(false);
//   const [filter, setFilter] = useState("all");
//   const filteredProducts =
//     filter === "all"
//       ? products
//       : products.filter(
//           (product) =>
//             product.category === filter.split("-")[0] &&
//             product.name === filter.split("-")[1]
//         );
//   return (
//     <div id="letest">
//       <ul className="category_lit_list">
//         <li>
//           <a href="#" onClick={() => setShowMenLinks(!showMenLinks)}>
//             Men
//           </a>
//           {showMenLinks && (
//             <ul>
//               <li>
//                 <a href="#" onClick={() => setFilter("men-letest")}>
//                   letest
//                 </a>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <a href="#" onClick={() => setShowWomenLinks(!showWomenLinks)}>
//             Women
//           </a>
//           {showWomenLinks && (
//             <ul>
//               <li>
//                 <a href="#" onClick={() => setFilter("women-letest")}>
//                   letest
//                 </a>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//       <div className="cards">
//         {filteredProducts.map((product) => (
//           <div className="card" key={product.id}>
//             <img />
//             <div className="card_text">
//               <h4>{`${product.category.charAt(0).toUpperCase() + product.category.slice(1)} ${product.name}`}</h4>
//               <div className="card_size">
//                 <p>S</p>
//                 <p>M</p>
//               </div>
//               <h5>{product.price}</h5>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Letest;
