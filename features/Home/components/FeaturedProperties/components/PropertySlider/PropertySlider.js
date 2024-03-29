import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import PropertyCard from "@/features/common/modules/PropertyCard/PropertyCard";
import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";

const PropertySlider = ({ featuredProperties }) => {
  const { isDesktop } = useIsDesktop();
  return (
    <Swiper
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={10}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      breakpoints={false}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {featuredProperties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard key={property.id} {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertySlider;