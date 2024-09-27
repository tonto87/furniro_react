import React from "react";
import { useCart } from "../../context/CartContext";
import Visit from "../../components/shopComponents/visit"
import Filtershop from "../../components/shopComponents/filtershop";
import Ourshop from "../../components/shopComponents/ourshop";

const Shop = ({ setCartCount }) => {  

  return (
    <>
      <Visit/>
      <Filtershop/>
      <Ourshop setCartCount={setCartCount}/>
    </>
  );
};

export default Shop;
