import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { imges } from "./images/data";
import './Carousel.module.css';

function CarouselEffect() {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imges.map((imagesrc, index) => (
  <div key={index}>
    <img src={imagesrc} alt={`Slide ${index + 1}`} />
  </div>
))}

      
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
