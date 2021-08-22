import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import ProductDetails from "../../../ProductDetails";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

//export default function App(props:{imgs:string[]}) {
  export default function App(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 py-1"
      >
        {props.imgs.map((item, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <img key={index} src={item} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {props.imgs.map((item, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <img key={index} src={item} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
