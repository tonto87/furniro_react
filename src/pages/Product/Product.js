import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";
import { useCart } from "../../context/CartContext";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const { dispatch } = useCart();

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    try {
      dispatch({ type: "ADD_TO_CART", product });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <ProductStyle>
      <div className="product__details">
        <img
          className="product__img"
          src={getImagePath(product.img)}
          alt={product.name}
        />
        <div className="product__description">
          <div className="description-top">
            <h1 className="product__name">{product.name}</h1>
            <p className="product__price">{product.price}$</p>
          </div>
          <p className="product__paragraph">{product.paragraph}</p>
          <button className="product__add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </ProductStyle>
  );
};

export default Product;
