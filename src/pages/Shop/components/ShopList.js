import React, { useEffect, useState } from "react";
import { OurShopStyle } from "./styles";
import Card from "../../../atoms/Card";
import Pagination from "../../../components/Pagination";

const ShopList = ({ products, pageState }) => {
  const [selected, setSelected] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (page) => {
    setPageNumber(page);
    setSelected(products.slice((page - 1) * pageState, pageState * page));
  };

  useEffect(() => {
    handlePageNumber(pageNumber);
  }, [pageState, products]);

  return (
    <OurShopStyle>
      <section className="shop">
        <h1 className="shop__title">Our shops</h1>
        <div className="shop__cards">
          {selected.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          items={products}
          perPage={pageState}
          pageNumber={handlePageNumber}
        />
      </section>
    </OurShopStyle>
  );
};

export default ShopList;
