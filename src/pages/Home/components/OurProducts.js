import React from "react";
import { OurProductsStyle } from "./styles";
import Card from "../../../atoms/Card";
import data from "../../../data.json";

const OurProducts = () => {
  return (
    <OurProductsStyle>
      <section className="product">
        <h1 className="product__title">Our products</h1>
        <div className="product__cards">
          {data.products.map((product) => (
            <Card key={product.id} product={product} />
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
