import React from "react";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import { ProductStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";
import { useCart } from "../../context/CartContext";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const { dispatch } = useCart();
=======
import { useLocation } from "react-router-dom";
import { ProductStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const Product = () => {
  const location = useLocation();
  const product = location.state?.product;

  const { dispatch } = useDispatch();
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    try {
<<<<<<< HEAD
      dispatch({ type: "ADD_TO_CART", product });
=======
      dispatch(addToCart(product));
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
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
