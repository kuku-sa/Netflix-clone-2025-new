import React from "react";

import LowerHeader from"../../components/LowerHeader/LowerHeader.jsx";
import Carousel from"../../components/Carousel/Carousel.jsx";
import Category from "../../components/Category/Category.jsx";
import Product from "../../components/Product/Product.jsx";

export default function Landing() {
  return (
    <div>
      
      <LowerHeader />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

