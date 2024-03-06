import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop
      modules={[Navigation]}
      navigation
      className="main-carousel my-5"
    >
      <SwiperSlide>
        <img
          className="w-100 object-fit-cover h-100"
          src="assets/banner1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-100 object-fit-cover h-100"
          src="assets/banner2.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-100 object-fit-cover h-100"
          src="assets/banner3.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
