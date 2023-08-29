import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import BannerCard from "@/features/common/modules/BannerCard";

const HeroSlide = ({ promos }) => {
  const filteredPromos = promos.filter((promo) =>
    promo.tags.includes("promos")
  );

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: "true" }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {filteredPromos.map((promo) => (
          <SwiperSlide key={promo.id}>
            <BannerCard key={promo.id} {...promo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlide;
