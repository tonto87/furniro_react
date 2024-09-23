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
import NotFound from "./pages/NotFound";
import { AppProvider } from "./context/AppContext";
import { LangProvider } from "./context/LangContext";
import { GlobalStyle } from "./styles";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <LangProvider>
      <AppProvider>
        <Router>
          <GlobalStyle>
            <Header cartCount={cartCount} />
            <Routes>
              <Route path="/" element={<Home setCartCount={setCartCount} />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GlobalStyle>
        </Router>
      </AppProvider>
    </LangProvider>
  );
};

export default App;
