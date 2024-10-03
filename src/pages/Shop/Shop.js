import React, { useEffect, useReducer, useState } from "react";
import Filter from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";
import data from "../../data.json";

const shopActionTypes = {
  SET_PER_PAGE: "set_per_page",
  SET_PRODUCTS: "set_products",
};

const initialShopState = {
  filter: {
    perPage: 4,
  },
  products: [],
  page: 1,
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case shopActionTypes.SET_PER_PAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          perPage: action.payload,
        },
      };
    case shopActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };

    default:
      break;
  }
};

const Shop = ({}) => {
  const [state, dispatch] = useReducer(shopReducer, initialShopState);

  useEffect(() => {
    dispatch({ type: shopActionTypes.SET_PRODUCTS, payload: data.products });
  }, [data]);

  const handlePerPage = (perPageFilter) => {
    dispatch({ type: shopActionTypes.SET_PER_PAGE, payload: perPageFilter });
  };

  return (
    <>
      <Visit />
      <Filter perPageChange={handlePerPage} pageState={state.filter.perPage} />
      <ShopList products={state.products} pageState={state.filter.perPage} />
    </>
  );
};

export default Shop;
