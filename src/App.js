import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./pages/Footer/Footer";
import CartModal from "./components/cartModalComponents/cartModal";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle>
          <Header />
          <CartModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/loginSignup" element={<LoginSignup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </GlobalStyle>
      </Router>
    </CartProvider>
  );
};

export default App;
