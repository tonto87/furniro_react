import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../../assets/icons/logo.svg";
import acc from "../../assets/icons/acc.svg";
import heart from "../../assets/icons/heart.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import search from "../../assets/icons/search.svg";
import { Navbar } from "./styles";
import { useCart } from "../../context/CartContext";
import CartModal from "../../components/cartModalComponents/cartModal";

export default function Header() {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsModalOpen(false);
  };

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
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </span>
        </div>
      </Navbar>

      {isModalOpen && <CartModal isOpen={isModalOpen} onClose={handleCloseCart} />}
    </>
  );
}
