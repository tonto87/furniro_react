import React from "react";
import { OurProductsStyle } from "./styles/ourproductsstyle";
import Card from "../../components/homeComponents/card";
import { useState } from "react";
import {products} from "../../data.js";


const OurProducts = ({ setCartCount }) => {
  const [cartCount, setCartCountState] = useState(0);

  const addToCart = () => {
    setCartCountState((prevCount) => prevCount + 1);
    setCartCount(cartCount + 1);
  };

  return (
    <OurProductsStyle>
      <section className="product">
        <h1 className="product__title">Our products</h1>
        <div className="product__cards">
          {products.map((product) => (
            <Card key={product.id} product={product} addToCart={addToCart} />
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
