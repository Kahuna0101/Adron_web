import AboutCard from "@/features/common/modules/AboutCard";
import { Box, Flex, Text } from "@chakra-ui/react";
import { hero } from "../Hero/HeroConst";
import { abouts } from "./AboutUsConst";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box position="relative">
      <Box
        width="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        margin="0 auto"
        padding={{ base: "3rem", md: "9rem" }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          padding="15px"
          mb="3rem"
        >
          <Flex flexDirection="column" width={{ base: "100%", md: "40%" }}>
            <Text
              fontSize="5xl"
              fontWeight="600"
              mt="0"
              mb=".5rem"
              lineHeight="1.4"
              color={{base:"#fff", md:"#1e2022"}}
            >
              Adron Homes helps you make better property decisions
            </Text>
            <Text fontSize="medium" fontWeight="bold" color={{base:"#fff", md:"gray.500"}}>
              Adron has Nigeria's largest collection of exquisite estates,
              empowering you to find the right area for you to move to. With
              tens of thousands of local community topics and discussions, find
              the answers to all your questions about an area, or ask the
              locals.
            </Text>
            <Flex flexDirection={{ base: "column", xl: "row" }} mt="6" gap="3">
              {abouts.map((about) => (
                <AboutCard key={about.id} {...about} />
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box
        position="absolute"
        top="0"
        right="0"
        width={{base:"100%", md:"50%"}}
        height="100%"
        backgroundSize="cover"
        zIndex="-1"
      >
      <Image 
        src='/hero/hero2.jpeg'
        alt="Adron Monument"
        fill={true}
      />
      </Box>
    </Box>
  );
};

export default AboutUs;