import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Filter from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";
import data from "../../data.json";

const shopActionTypes = {
  SET_PER_PAGE: "set_per_page",
  SET_PRODUCTS: "set_products",
  SET_SORT_BY_CATEGORY: "set_sort_by",
  SET_DIRECTION_CHANGER: "set_direction_changer",
};

const initialShopState = {
  filter: {
    perPage: 4,
    sortByCategory: "",
    flexDirection: "shop__cards-row",
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
    case shopActionTypes.SET_DIRECTION_CHANGER:
      return {
        ...state,
        filter: {
          ...state.filter,
          flexDirection: action.payload,
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

  const handleDirectionChanger = (selectedChanger) => {
    dispatch({
      type: shopActionTypes.SET_DIRECTION_CHANGER,
      payload: selectedChanger,
    });
  };

  return (
    <>
      <Visit />

      <Filter
        perPageChange={handlePerPage}
        pageState={state.filter.perPage}
        setSortByCategory={handleSortCategory}
        sortByCategory={state.filter.sortByCategory}
        flexChanger={handleDirectionChanger}
        flexState={state.filter.flexDirection}
      />
      <ShopList
        products={filteredProducts}
        pageState={state.filter.perPage}
        activePage={state.page}
        flexState={state.filter.flexDirection}
      />
    </>
  );
};

export default Shop;
