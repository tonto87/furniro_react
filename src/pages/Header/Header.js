import React from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../../assets/icons/logo.svg";
import acc from "../../assets/icons/acc.svg";
import heart from "../../assets/icons/heart.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import search from "../../assets/icons/search.svg";
import { Navbar } from "./styles";

export default function Header({ cartCount }) {
  return (
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
        <NavLink to="/">
          <img src={shoppingCart} alt="Cart" />
          <span className="cart-count">{cartCount}</span>{" "}
          {/* Количество товаров */}
        </NavLink>
      </div>
    </Navbar>
  );
}
