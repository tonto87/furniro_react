import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./pages/Footer/Footer";
import CartModal from './components/cartModalComponents/cartModal';
import NotFound from "./pages/NotFound";
import { AppProvider } from "./context/AppContext";
import { LangProvider } from "./context/LangContext";
import { GlobalStyle } from "./styles";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const subtotal = 520000;
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
    <LangProvider>
      <AppProvider>
        <Router>
          <GlobalStyle>
            <Header cartCount={cartCount} openCart={openCart}/>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} subtotal={subtotal} />
            <Routes>
              <Route path="/" element={<Home setCartCount={setCartCount} />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/loginSignup" element={<LoginSignup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </GlobalStyle>
        </Router>
      </AppProvider>
    </LangProvider>
  );
};

export default App;
