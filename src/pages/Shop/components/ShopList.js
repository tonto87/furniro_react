import React from "react";
import { OurShopStyle } from "./styles";
import data from "../../../data.json";
import Card from "../../../atoms/Card";
import Pagination from "../../../components/Pagination";

const ShopList = ({ setCartCount }) => {
  return (
    <OurShopStyle>
      <section className="shop">
        <h1 className="shop__title">Our shops</h1>
        <div className="shop__cards">
          {data.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <Pagination items={data.products} perPage={4} />
      </section>
    </OurShopStyle>
  );
};

export default ShopList;
