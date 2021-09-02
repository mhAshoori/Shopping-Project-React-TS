// imports
import React from "react";
import SwiperIL from "../../components/swipers/SwiperIL/SwpierIL";
//import ProductCard from "../../components/product-card/ProductCard";
import "./Home.css";
// assets
import RightSideImg from "../../assets/imgs/side-slides/gaming-stuff.jpg";
import LeftSideImg from "../../assets/imgs/side-slides/acccessories.jpg";
import xiaomiImg from "../../assets/imgs/home-slides/xiaomi.jpg";

import { RouteComponentProps } from "react-router";
import SwiperResponsive from "../../components/swipers/responsive/SwiperResponsive";

// interfaces

const Home = (props: RouteComponentProps) => {
  // Extracting discounted products

  return (
    <div className="flex flex-col gap-5 justify-center">
      {/* Swiper & Sides */}
      <div className=" flex flex-row justify-center items-center ">
        <div className=" w-11/12 flex flex-row items-center justify-center">
          <div className="hidden md:block md:w-1/6 overflow-hidden rounded-xl ">
            <img src={RightSideImg} alt="" />
          </div>
          <div className="w-11/12 md:w-4/6 mx-6 overflow-hidden rounded-xl">
            <SwiperIL />
          </div>
          <div className="hidden md:block md:w-1/6 overflow-hidden rounded-xl">
            <img src={LeftSideImg} alt="" />
          </div>
        </div>
      </div>
      {/* Special Offer */}
      <div
        className="flex flex-col items-center justify-center gap-y-3 w-11/12 self-center h-auto my-2 
            border border-solid border-gray-300 rounded-lg"
      >
        <p className="mt-7 text-4xl">تخفیف های باور نکردنی</p>
        {/* Cards Container  */}
        <div className=" w-11/12 h-auto p-3">
          <SwiperResponsive />
        </div>
      </div>
      {/* Xiaomi wide image  */}
      <div className="w-full py-3 overflow-hidden flex items-center justify-center">
        <img className="w-11/12 rounded-xl" src={xiaomiImg} alt="#" />
      </div>
    </div>
  );
};

export default Home;
