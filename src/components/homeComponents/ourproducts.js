import React, { useState, useEffect } from "react";
import { OurProductsStyle } from "./styles/ourproductsstyle";
import Card from "../../components/homeComponents/card";
import { products } from "../../data.js";


const OurProducts = ({ setCartCount,addedProduct }) => {
  const [cartCount, setCartCountState] = useState(0);
  const [listAddedProducts, setListAddedProduct] = useState([]);



  const addToCart = (addedProduct) => {
    setCartCountState((prevCount) => prevCount + 1);
    setListAddedProduct((prevProducts) => [...prevProducts, addedProduct]);
    
    console.log(listAddedProducts)
  };

  useEffect(() => {
    
  }, [addedProduct]);

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
