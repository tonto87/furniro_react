import React from 'react';
import {CartModalStyle} from "./styles/cartModalStyle";
import CartModalProduct from '../cartModalComponents/cartModalProduct';
import { useState } from "react";
import {products} from "../../data.js";

const CartModal = ({ isOpen, onClose, listProducts }) => {
  if (!isOpen) return null;

  console.log({listProducts})

  return (   
    <CartModalStyle  className="cartModal" onClick={onClose}>
      <div className="cartModal__body" onClick={e => e.stopPropagation()}>
        <div className="cartModal__body-head">
          <div className="cartModal__body-head-group">
            <h1 className="cartModal__body-head-group-heading">
              Shopping Cart
            </h1>
            <div className="cartModal__body-head-group-box">
              <button
                id="cartClose"
                className="cartModal__body-head-group-box-button"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
          </div>
          <div className="cartModal__body-head-line"></div>
        </div>
        <div className="cartModal__body-products">
          {/* Render cart items here */}
          {products.map((product) => (
            <CartModalProduct key={product.id} product={product} />
          ))}
          
        </div>
        <div className="cartModal__body-footer">
          <div className="cartModal__body-footer-subtotal">
            <h1 className="cartModal__body-footer-subtotal-heading">
              Subtotal
            </h1>
            <h1 className="cartModal__body-footer-subtotal-price">
              {/* Rs. {subtotal.toFixed(2)} */}
            </h1>
          </div>
          <div className="cartModal__body-footer-line"></div>
          <div className="cartModal__body-footer-buttons">
            <button className="cartModal__body-footer-buttons-cart">
              Cart
            </button>
            <button className="cartModal__body-footer-buttons-checkout">
              Checkout
            </button>
            <button className="cartModal__body-footer-buttons-comparsion">
              Comparison
            </button>
          </div>
        </div>
      </div>
      
      </CartModalStyle>
   
    
  );
};

export default CartModal;
