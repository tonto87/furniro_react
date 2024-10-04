import React, { useEffect, useMemo, useReducer, useState } from "react";
import Filter from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";
import data from "../../data.json";

const shopActionTypes = {
  SET_PER_PAGE: "set_per_page",
  SET_PRODUCTS: "set_products",
  SET_SORT_BY_CATEGORY: "set_sort_by",
};

const initialShopState = {
  filter: {
    perPage: 4,
    sortByCategory: "",
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

    case shopActionTypes.SET_SORT_BY_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          sortByCategory: action.payload,
        },
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


  const handleSortCategory = (selectedSort) => {
    // console.log(selectedSort);
    dispatch({
      type: shopActionTypes.SET_SORT_BY_CATEGORY,
      payload: selectedSort,
    });
  };

  const filteredProducts = useMemo(() => {
    return state.products.filter(
      (product) =>
        state.filter.sortByCategory === "" ||
        product.category === state.filter.sortByCategory
    );
  }, [state.products, state.filter.sortByCategory]);

  // console.log({sortedProducts,pros: state.products,sort: state.filter.sortBy});


  return (
    <>
      <Visit />

      <Filter
        perPageChange={handlePerPage}
        pageState={state.filter.perPage}
        setSortByCategory={handleSortCategory}
        sortByCategory={state.filter.sortByCategory}
      />
      <ShopList
        products={filteredProducts}
        pageState={state.filter.perPage}
        activePage={state.page}
      />

    </>
  );
};

export default Shop;
