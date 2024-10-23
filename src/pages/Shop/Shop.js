import React, { useEffect, useMemo, useReducer } from "react";
import Filter from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";
import data from "../../data.json";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPerPage, setSortByCategory, setDirection, setPriceFilter } from "../../store/filterSlice";

const shopActionTypes = {
<<<<<<< HEAD
  SET_PER_PAGE: "set_per_page",
  SET_PRODUCTS: "set_products",
  SET_SORT_BY_CATEGORY: "set_sort_by",
  SET_DIRECTION_CHANGER: "set_direction_changer",
  SET_PRICE_FILTER: "set_price_filter", // добавляем действие для фильтра по цене
};

const initialShopState = {
  filter: {
    perPage: 4,
    sortByCategory: "",
    flexDirection: "shop__cards-row",
    minPrice: 0, // минимальная цена
    maxPrice: 1000, // максимальная цена
  },
=======
  SET_PRODUCTS: "set_products"
};

const initialShopState = {
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
  products: [],
  page: 1,
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case shopActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
<<<<<<< HEAD
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
    case shopActionTypes.SET_PRICE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          minPrice: action.payload.minPrice,
          maxPrice: action.payload.maxPrice,
        },
      };
=======

>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
    default:
      break;
  }
};

const Shop = () => {
<<<<<<< HEAD
=======
  const filterDispatch = useDispatch();
  const filters = useSelector((state) => state.filters)
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
  const [state, dispatch] = useReducer(shopReducer, initialShopState);
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const perPage = searchParams.get("perPage");

    if (perPage) {
      filterDispatch(setPerPage(+perPage));
    }
  }, []);

  useEffect(() => {
    dispatch({ type: shopActionTypes.SET_PRODUCTS, payload: data.products });
  }, [data]);

  const handlePerPage = (perPageFilter) => {
    filterDispatch(setPerPage(perPageFilter));
  };

  const handleSortCategory = (selectedSort) => {
<<<<<<< HEAD
    dispatch({
      type: shopActionTypes.SET_SORT_BY_CATEGORY,
      payload: selectedSort,
    });
=======
    filterDispatch(setSortByCategory(selectedSort));
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    filterDispatch(setPriceFilter({ minPrice, maxPrice }));
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    dispatch({
      type: shopActionTypes.SET_PRICE_FILTER,
      payload: { minPrice, maxPrice },
    });
  };

  const filteredProducts = useMemo(() => {
    return state.products.filter(
      (product) =>
<<<<<<< HEAD
        (state.filter.sortByCategory === "" ||
          product.category === state.filter.sortByCategory) &&
        product.price >= state.filter.minPrice &&
        product.price <= state.filter.maxPrice
    );
  }, [
    state.products,
    state.filter.sortByCategory,
    state.filter.minPrice,
    state.filter.maxPrice,
  ]);

  const handleDirectionChanger = (selectedChanger) => {
    dispatch({
      type: shopActionTypes.SET_DIRECTION_CHANGER,
      payload: selectedChanger,
    });
=======
        (filters.sortByCategory === "" ||
        product.category === filters.sortByCategory) &&
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice
    );
  }, [
    state.products,
    filters.sortByCategory,
    filters.minPrice,
    filters.maxPrice,
  ]);

  const handleDirectionChanger = (selectedChanger) => {
    filterDispatch(setDirection(selectedChanger));
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
  };

  return (
    <>
      <Visit />
      <Filter
        perPageChange={handlePerPage}
        pageState={filters.perPage}
        setSortByCategory={handleSortCategory}
<<<<<<< HEAD
        sortByCategory={state.filter.sortByCategory}
        flexChanger={handleDirectionChanger}
        flexState={state.filter.flexDirection}
        onPriceChange={handlePriceChange} // передаем функцию фильтрации по цене
=======
        sortByCategory={filters.sortByCategory}
        flexChanger={handleDirectionChanger}
        flexState={filters.flexDirection}
        onPriceChange={handlePriceChange}
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
      />
      <ShopList
        products={filteredProducts}
        pageState={filters.perPage}
        activePage={state.page}
<<<<<<< HEAD
        flexState={state.filter.flexDirection}
=======
        flexState={filters.flexDirection}
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
      />
    </>
  );
};

export default Shop;
