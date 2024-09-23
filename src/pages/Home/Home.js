import { React, useState } from "react";
import Discovery from "../../components/homeComponents/discovery";
import Browsetherange from "../../components/homeComponents/browsetherange";
import OurProducts from "../../components/homeComponents/ourproducts";
import Inspirations from "../../components/homeComponents/inspirations";
import Funiro from "../../components/homeComponents/funiro";

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
