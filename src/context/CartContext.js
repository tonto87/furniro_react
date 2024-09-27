import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find((product) => product.id === action.product.id);
      if (existingProduct) {
        return state.map((product) =>
          product.id === action.product.id
            ? { ...product, count: product.count + 1 }
            : product
        );
      }
      return [...state, { ...action.product, count: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== action.id);

    case 'DECREMENT_COUNT':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, count: Math.max(product.count - 1, 0) }
          : product
      ).filter(product => product.count > 0);

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
