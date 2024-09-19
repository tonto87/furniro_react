import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./context/AppContext";
import { LangProvider } from "./context/LangContext";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <LangProvider>
      <AppProvider>
        <Router>
          <GlobalStyle>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
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
