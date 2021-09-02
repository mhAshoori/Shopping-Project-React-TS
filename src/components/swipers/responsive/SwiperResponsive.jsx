import React from "react";

//importing discounts
import ProductsObject from "../../../ProductDetails";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
/* import "swiper/css";
import "swiper/css/pagination";
 */
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import ProductCard from "../../product-card/ProductCard";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SwiperResponsive(props) {
  const discounts = Object.values(ProductsObject)
    .map((item) => item.filter((item) => item.discount[0] === true))
    .flat();
  // const history =useHistory();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1360: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper "
      >
        {discounts.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard key={index} cardInputs={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
