import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../../assets/images/slider.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="md:h-[682px] h-[300px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        style={{
          "--swiper-navigation-color": "#0000",
          "--swiper-pagination-color": "#0000",
        }}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={false}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg before:bg-gradient-to-r before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full"
          //   style={{
          //     'background-image':
          //     'url("asset/images/slider/slider1.jpg")',
          //   }}
          data-swiper-parallax="-23%"
        >
          <img src={slider} alt="" className="w-4/5 md:h-[682px] h-[300px]" />
        </div>
        <SwiperSlide>
          <div
            className="title flex justify-start font-satisfy md:text-[80px] text-[40px]"
            data-swiper-parallax="-300"
          >
            Ingredients
          </div>
          <div
            className="subtitle flex justify-start md:text-[17px] text-[10px]"
            data-swiper-parallax="-200"
          >
            We use only the best ingredients from all over the world to
            carefully create an amazing dish for you
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title flex justify-start font-satisfy md:text-[80px] text-[40px]"
            data-swiper-parallax="-300"
          >
            Art Of Cooking
          </div>
          <div
            className="subtitle flex justify-start md:text-[17px] text-[10px]"
            data-swiper-parallax="-200"
          >
            Powerful and Complete Food and Restaurant Menus
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title flex justify-start font-satisfy md:text-[80px] text-[40px]"
            data-swiper-parallax="-300"
          >
            Delicious
          </div>
          <div
            className="subtitle flex justify-start md:text-[17px] text-[10px]"
            data-swiper-parallax="-200"
          >
            We made great food.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
