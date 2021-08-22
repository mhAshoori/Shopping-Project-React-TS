// imports
import React from "react";
import SwiperIL from "../../components/swipers/SwiperIL/SwpierIL";
//import ProductCard from "../../components/product-card/ProductCard";
import "./Home.css"
// assets
import RightSideImg from "../../assets/imgs/side-slides/gaming-stuff.jpg";
import LeftSideImg from "../../assets/imgs/side-slides/acccessories.jpg";
import xiaomiImg from '../../assets/imgs/home-slides/xiaomi.jpg'
import {RouteComponentProps} from 'react-router'

// interfaces


const Home = (props:RouteComponentProps) => {
  // const handleClick =()=>{
  //   props.history.push("/swiper")
  // }
  // const history=useHistory()
  // const handleClick2 =()=>{
  //   history.push("/swiper")
  // }
   
  return (
    <>
    {/* <div onClick={handleClick}>Hello World!</div>
    <div onClick={handleClick2}>Hello World 2!</div>
     */}
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
      <div className="offers w-full h-auto my-2 cursor-pointer" onClick={()=>props.history.push(`product/${'3'}?category=${'laptop'}s`)} >
        {/* <ProductCard {...props} /> */}
        
      </div>
      <div className="w-full py-3 overflow-hidden flex items-center justify-center">
        <img className="w-11/12 rounded-xl" src={xiaomiImg} alt="#" />
      </div>
    </>
  );
};

export default Home;
