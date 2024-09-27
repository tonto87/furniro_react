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
      const isProductInCart = prevProducts.find((item) => item.id === product.id);
      if (!isProductInCart) {
        return [...prevProducts, { ...product, quantity: 1 }]; // Добавляем количество
      } else {
        return prevProducts.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
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
          {products.map((product) => (
            <Card key={product.id} product={product} onClick={addToCart} />
          ))}
        </div>

        <div className="product__button">
          <button className="product__button-btn">
            <a href="./shop.html">Show More</a>
          </button>
        </div>

        <div className="product__added">
          <h2>Added Products:</h2>
          <ul>
            {listAddedProducts.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} pcs
              </li>
            ))}
          </ul>
        </div>
      </section>
    </OurProductsStyle>
  );
};

export default OurProducts;
