import { Box, Fade, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import BannerCard from "@/features/common/modules/BannerCard";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Box>
       <Swiper 
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 5000, disableOnInteraction: true}}
        pagination={{ clickable:"true"}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
            <BannerCard />
        </SwiperSlide>
        <SwiperSlide >
            <BannerCard />
        </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default HeroBanner;








/*<Box 
    position="relative" 
    minHeight={{base:"110vh", sm:"90vh"}}
    backgroundImage={`url('./hero/herogb.jpeg')`}
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundAttachment="fixed"
    >
      
    </Box> 
    <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.4"
        backgroundColor="whatsapp.500"
      />
      <Box display="flex" flexDirection={{base:"column", sm:"row"}}
        alignItems="center" justifyContent={{base:"flex-start", sm:"space-between"}}
        width="100%"
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="2rem"
      >
        <Box width={{base: "100%", sm:"50%"}}>
          <Text fontSize={{base: "4xl", sm: "5xl"}} lineHeight="shorter" marginBottom="1.5rem">
            Download our new <strong>property buying guide</strong> today...
          </Text>
          <Text fontSize={{base:"lg", sm:"2xl"}}>
            A free PDF with our best secret for evaluating a property purchase, calculating profit and so much more.
          </Text>
        </Box>
        <Box width={{base:"100%", sm:"auto"}} marginTop={{base:"2rem", sm:"0"}}><HeroForm /></Box>
      </Box> */