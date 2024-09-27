import React, { useState, useEffect } from "react";
import { Ourshopstyle } from "./styles/ourshopstyle";
import Card from "../../components/homeComponents/card";
import { products } from "../../data.js";

const Ourshop = ({ setCartCount }) => {
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
    <Ourshopstyle>
     <section class="shop">
        <h1 class="shop__title">Our shops</h1>
        <div class="shop__cards">
        {products.map((product) => (
            <Card key={product.id} product={product} onClick={addToCart} />
          ))}
        
        </div>
        <div id="myDIV" class="shop__nextButton">
          <button class="shop__nextButton-btn active"><a href="">1</a></button>
          <button class="shop__nextButton-btn"><a href="">2</a></button>
          <button class="shop__nextButton-btn"><a href="">3</a></button>
          <button class="shop__nextButton-btn"><a href="">next</a></button>
        </div>
      </section>
    </Ourshopstyle>
  );
};

export default Ourshop;
