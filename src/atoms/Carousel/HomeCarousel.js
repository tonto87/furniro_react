import React, { useState, useEffect } from 'react';
import { HomeCarouselStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";

const images = [
  getImagePath("image1.png"),
  getImagePath("image2.png"),
  getImagePath("image3.png"),
  getImagePath("image4.png"),
  getImagePath("image4.png"),
  getImagePath("image6.png"),
  getImagePath("image7.png"),
  getImagePath("image8.png"),
  getImagePath("image9.png"),

];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / imagesPerPage));
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / imagesPerPage)) % Math.ceil(images.length / imagesPerPage));
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);

  };

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const start = currentIndex * imagesPerPage;
  const displayedImages = images.slice(start, start + imagesPerPage);

  return (
    <HomeCarouselStyle>
      <div className="slider">
        <button className='pbutton carouselbutton' onClick={prevSlide} aria-label="Previous slide">❮</button>
        {/* <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onError={(e) => e.target.src = getImagePath("fallback")} /> */}
        <div className="image-container">
          {displayedImages.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${start + index + 1}`} onError={(e) => e.target.src = getImagePath("fallback")} />
          ))}
        </div>
        
        <button className='nbutton carouselbutton' onClick={nextSlide} aria-label="Next slide">❯</button>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index)} className={currentIndex === index ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </HomeCarouselStyle>
  );
};

export default HomeCarousel;
