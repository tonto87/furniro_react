import React from "react";
import { OurProductsStyle } from "./styles/ourproductsstyle";
import Card from "../../components/homeComponents/card";

const OurProducts = () => {
  return (
    <OurProductsStyle>      
     <section className="product">
        <h1 className="product__title">Our products</h1>
        <div className="product__cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
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
