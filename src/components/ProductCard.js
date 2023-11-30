import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  const { resData } = props;
  const { image, title, price, category, rating } = resData;
  return (
    <div className="sub-container">
      <div>
        <img src={image} alt="product-img" className="product-img" />
      </div>
      <div className="container-text">
        <p>{title}</p>
        <p>{price}</p>
        <p>{category}</p>

        <p>{rating.rate}</p>
      </div>
    </div>
  );
};

export default ProductCard;
