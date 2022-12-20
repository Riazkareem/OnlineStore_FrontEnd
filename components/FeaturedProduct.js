import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedProductItem from "./FeaturedProductItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";

// import required modules
import { Navigation } from "swiper";

import "swiper/css";

function FeaturedProduct() {
  SwiperCore.use([Autoplay]);
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="font-nunito font-bold text-2xl text-[#00205b] pt-10">
          Featured Products
        </h1>
        <div className="py-8 mb-5">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
            }}
            autoplay={{
              delay: 2000,
            }}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            // slidesPerView={5}
            // spaceBetween={20}
            // slidesPerGroup={1}
            //loop={true}
            // className="mySwiper"
          >
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="font-nunito font-bold text-2xl text-[#00205b] pt-10">
          Household Staff Picks
        </h1>
        <div className="py-8 mb-10">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
            }}
            autoplay={{
              delay: 2000,
            }}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            // slidesPerView={5}
            // spaceBetween={20}
            // slidesPerGroup={1}
            //loop={true}
            // className="mySwiper"
          >
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedProductItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
