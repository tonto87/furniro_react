import React from "react";
import Fbx from "./components/Fbx";
import { AboutStyle } from "./styles";
import Carousel from "../../atoms/Carousel/HomeCarousel";



const About = () => {


  return (
    <AboutStyle>
      {/* <Fbx></Fbx> */}
      <Carousel />
      
    </AboutStyle> 
  );
};

export default About;
