import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from "./../../assets/img/h4-slide.png";
import slide2 from "./../../assets/img/h4-slide2.png";
import slide3 from "./../../assets/img/h4-slide3.png";
import "./../../css/style.css";

const Slider = () => {
  const imgSlider = [slide1, slide2, slide3];
  return (
    <div className="slider-area">
      <>
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={true}
          pagination={false}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imgSlider.map((img, i) => (
            <SwiperSlide key={i}>
              <img className="d-block w-100" src={img} alt="First slide" />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
