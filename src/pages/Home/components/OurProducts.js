import React, { useState } from "react";
import { OurProductsStyle } from "./styles";
import Card from "../../../atoms/Card";
import data from "../../../data.json";

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
        return [...prevProducts, { ...product, quantity: 1 }];
      } else {
        return prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });

    setCartCount(cartCount + 1);
  };

  return (
    <OurProductsStyle>
      <section className="product">
        <h1 className="product__title">Our products</h1>
        <div className="product__cards">
          {data.products.map((product) => (
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
