import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import room from "../imgs/room.jpeg"

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
            src={room}
            className="swiper-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={room}
            className="swiper-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={room}
            className="swiper-img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
