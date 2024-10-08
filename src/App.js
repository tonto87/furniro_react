import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout"; // Import the Checkout component
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />{" "}
            {/* Add Checkout route */}
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
