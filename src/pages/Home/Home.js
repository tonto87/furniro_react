import { React } from "react";
import Discovery from "./components/Discovery";
import Browsetherange from "./components/BrowseTheRange";
import OurProducts from "./components/OurProducts";
import Inspirations from "./components/Inspirations";
import Funiro from "./components/Funiro";

const Home = ({ setCartCount }) => {
  return (
    <>
      <Discovery />
      <Browsetherange />
      <OurProducts setCartCount={setCartCount} />
      <Inspirations />
      <Funiro />
    </>
  );
};

export default Home;
