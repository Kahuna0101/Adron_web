import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";

const PropertyThumbnailSlider = ({ photos }) => {
  const [thumbSwiper, setThumbSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="images" width={700} height={50} style={{ objectFit: 'contain'}}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider marginY="1rem" />
      <Swiper
        onSwiper={setThumbSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="images" width={700} height={50} style={{ objectFit: 'contain'}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PropertyThumbnailSlider;
