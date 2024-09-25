import React, { useState, useEffect } from "react";
import { OurProductsStyle } from "./styles/ourproductsstyle";
import Card from "../../components/homeComponents/card";
import { products } from "../../data.js";

const OurProducts = ({ setCartCount }) => {
  const [cartCount, setCartCountState] = useState(0);
  const [listAddedProducts, setListAddedProduct] = useState([]);
  const addToCart = (product) => {
    setCartCountState((prevCount) => prevCount + 1);

    setListAddedProduct((prevProducts) => {
      const isProductInCart = prevProducts.find(
        (item) => item.id === product.id
      );
      if (!isProductInCart) {
        return [...prevProducts, product];
      }
      return prevProducts;
    });

    setCartCount(cartCount + 1);
  };

  return (
    <OurProductsStyle>
      <section className="product">
        <h1 className="product__title">Our products</h1>
        <div className="product__cards">
          {products.map((product) => (
            <Card key={product.id} product={product} onClick={addToCart} />
          ))}
        </div>
        <div className="product__button">
          <button className="product__button-btn">
            <a href="./shop.html">Show More</a>
          </button>
        </div>
      </section>
    </OurProductsStyle>
  );
};

export default OurProducts;
