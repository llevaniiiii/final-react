import { Swiper, SwiperSlide } from "swiper/react";
import "./HemopgSecondSwiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import room1 from "./images/room1.jpg"
import room2 from "./images/room2.jpg"
import room3 from "./images/room3.jpg"

// import required modules
import { Pagination, Navigation } from "swiper";

export default function swiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            src={room1} alt="room"
            className="swiper-img" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={room2} alt="room"
            className="swiper-img" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={room3} alt="room"
            className="swiper-img" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
