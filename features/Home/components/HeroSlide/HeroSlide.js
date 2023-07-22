import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper";
import BannerCard from "@/features/common/modules/BannerCard";
import { Box } from "@chakra-ui/react";
import { hero } from "../Hero/HeroConst";

const HeroSlide = () => {
  return (
    <>
       <Swiper 
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 5000, disableOnInteraction: true}}
        pagination={{ clickable:"true"}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
        <img src={hero} width="100%" />
        </SwiperSlide>
        <SwiperSlide >
            <BannerCard />
        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default HeroSlide;
