import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About, { Title } from "./pages/About";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./context/AppContext";
import { LangProvider } from "./context/LangContext";

const App = () => {
  return (
    <LangProvider>
      <AppProvider>
        <Router>
          <div>
            <nav>
              <Title>Test</Title>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </LangProvider>
  );
};

export default App;
