import React from "react";
import Fbx from "./components/Fbx";
import { AboutStyle } from "./styles";
import ImageSlider from "../../atoms/Carousel/HomeCarousel";



const About = () => {


  return (
    <AboutStyle>
      <Fbx></Fbx>
      <ImageSlider />
      
    </AboutStyle> 
  );
};

export default About;
