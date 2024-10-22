import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  initialCartState,
  initializeCart,
} from "../reducer/cardReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cardState, dispatch] = useReducer(
    initialCartState,
    initializeCart
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cardState));
  }, [cardState]);

  return (
    <CartContext.Provider value={{ cart: cardState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
