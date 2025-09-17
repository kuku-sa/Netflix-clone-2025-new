import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css"; // make sure the file exists
import { imges } from "./images/data"; // your images array

function CarouselEffect() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        interval={4000}
        transitionTime={800}
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
