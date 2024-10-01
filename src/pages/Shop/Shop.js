import React from "react";
import FilterShop from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";

const Shop = ({ setCartCount }) => {
  return (
    <>
      <Visit />
      <FilterShop />
      <ShopList setCartCount={setCartCount} />
    </>
  );
};

export default Shop;
