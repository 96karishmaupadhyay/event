import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import img1 from "../../assets/eventoffer1.png";
import img2 from "../../assets/eventoffer2.png";
import img3 from "../../assets/eventoffer1.png";

const ImageSlider = () => {
  const sliderImages = [img1, img2, img3, img1, img2];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="container image-slider-section">

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1} 
        loop={false}      
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Dots */}
      <div className="custom-dots d-flex justify-content-center mt-3">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)} // ✅ correct slideTo
            className={`dot ${activeIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;
