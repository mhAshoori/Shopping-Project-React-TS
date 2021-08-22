// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./SwiperIL.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Assets 
import Img1 from "../../../assets/imgs/home-slides/androidbox.jpg"
import Img2 from "../../../assets/imgs/home-slides/discounts.jpg"
import Img3 from "../../../assets/imgs/home-slides/headset.jpg"
import Img4 from "../../../assets/imgs/home-slides/laptop.jpg"
import Img5 from "../../../assets/imgs/home-slides/phones.jpg"
import Img6 from "../../../assets/imgs/home-slides/powerbanks.jpg"

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function SwiperIL() {
  const Imgs=[Img1,Img2,Img3,Img4,Img5,Img6];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
       
        {
          Imgs.map((item,index) =>{
            return(
              <SwiperSlide><img src={item} alt="" /></SwiperSlide>
            )
          } )
        }
        
      </Swiper>
    </>
  );
}
