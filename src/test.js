import React, { useState, useEffect } from "react";
import { OurProductsStyle } from "./styles/ourproductsstyle";
import Card from "../../components/homeComponents/card";
import { products } from "../../data.js";
import { Link } from "react-router-dom"; // Import Link for navigation

const OurProducts = ({ setCartCount }) => {
  const [cartCount, setCartCountState] = useState(0);
  const [listAddedProducts, setListAddedProduct] = useState([]);

  const addToCart = (addedProduct) => {
    setCartCountState((prevCount) => prevCount + 1);
    setListAddedProduct((prevProducts) => [...prevProducts, addedProduct]);
    setCartCount((prevCount) => prevCount + 1); // Sync with parent
  };

  useEffect(() => {
    console.log(listAddedProducts);
  }, [listAddedProducts]);

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
          <Link to="/shop" className="product__button-btn">
            Show More
          </Link>
        </div>
      </section>
    </OurProductsStyle>
  );
};

export default OurProducts;
