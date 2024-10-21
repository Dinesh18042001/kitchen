"use client";
import React from "react";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DalCard from "./Cards/DalCard";

const ProductsOption = () => {
  const options = {
    items: 3,
    dots: false,
    loop: true,
    margin: 10,
    autoplay: true,              
    autoplayTimeout: 3000,        
    autoplayHoverPause: true, 
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1024: {
        items: 6,
      },
    },
  };

  return (
    <>
      <div className="product-section mt-4">
      <div className="container">
        <div className="text-center">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <img src="/products/Biryani.webp" alt="" />
              </div>
            </div>

            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/Burger.webp" alt="" /></a>
              </div>
            </div>
            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/chaap.webp" alt="" /></a>
              </div>
            </div>
            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/Chhole.webp" alt="" /></a>
              </div>
            </div>
            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/dal.webp" alt="" /></a>
              </div>
            </div>
            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/dosa.webp" alt="" /></a>
              </div>
            </div>

            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/fries.webp" alt="" /></a>
              </div>
            </div>

            <div className="item">
              <div className="product-item d-flex justify-content-center align-items-center">
                <a href="#"><img src="/products/Idli.webp" alt="" /></a>
              </div>
            </div>

          </OwlCarousel>
        </div>
      </div>
    </div>
    <DalCard/>
    </>
  
  );
};

export default ProductsOption;
