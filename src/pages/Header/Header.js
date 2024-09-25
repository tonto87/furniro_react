import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../../assets/icons/logo.svg";
import acc from "../../assets/icons/acc.svg";
import heart from "../../assets/icons/heart.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import search from "../../assets/icons/search.svg";
import { Navbar } from "./styles";
import CartModal from "../../components/cartModalComponents/cartModal";

export default function Header({ cartCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]); // Manage cart items here

  const handleOpenCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsModalOpen(false);
  };

  // Calculate subtotal
  // const calculateSubtotal = () => {
  //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  return (
    <>
      <Navbar>
        <NavLink to="/" className="logo">
          <img src={logoimg} alt="Logo" />
          Funiro
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>        
        </div>

        <div className="nav-icons">
          <NavLink to="/loginSignup">
            <img src={acc} alt="Account" />
          </NavLink>
          <NavLink to="/">
            <img src={search} alt="Search" />
          </NavLink>
          <NavLink to="/">
            <img src={heart} alt="Wishlist" />
          </NavLink>
          <span onClick={handleOpenCart} style={{ cursor: 'pointer' }} aria-label="Cart">
            <img src={shoppingCart} alt="Cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </span>
        </div>
      </Navbar>

      {isModalOpen && (
        <CartModal 
          isOpen={isModalOpen} 
          onClose={handleCloseCart} 
          // subtotal={calculateSubtotal()} // Pass the calculated subtotal
        />
      )}
    </>
  );
}
