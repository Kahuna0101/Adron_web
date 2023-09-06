import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { home1 } from "./HeroConst";
import CountUp from "react-countup";
import { ArrowDownIcon } from "@chakra-ui/icons";
import WordAnimation from "./WordAnimation";

const Hero = () => {
  return (
    <Box
      position="relative"
      color="white"
      paddingBottom="2rem"
      backgroundColor="#131110"
    >
      <Box
        position="absolute"
        width="20rem"
        height="20rem"
        background="rgba(255, 255, 255, 0.522)"
        filter="blur(100px)"
        borderRadius="100px"
      />
      <Box
        display="flex"
        gap={20}
        padding={{ base: "3rem", md: "9rem" }}
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {/*Left side*/}
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="2rem"
        >
          <Box position="relative" zIndex="1">
            <Box
              height={{ base:"3rem", md:"4rem"}}
              width={{ base:"3rem", md:"4rem"}}
              background="#4ade1f"
              borderRadius="999px"
              position="relative"
              right={{ base: "-58%", md: "-58%" }}
              top={{ base:"44px", md:"73px"}}
              zIndex="-1"
            />
            <Text fontWeight={600} fontSize={{ base:"45px", md:"80px"}} lineHeight={{base:"3rem", md:"5rem"}}>
              At Adron <br />Homes We're
            </Text>
            <WordAnimation />
          </Box>

          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
            fontSize="1.1rem"
            color="grey"
          >
            <Text textAlign="center">Find a variety of properties that suit you very easily</Text>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Flex fontSize="2rem" gap={1}>
                <CountUp start={9500} end={10000} duration={4} />
                <Text color="#4ade1f">+</Text>
              </Flex>
              <Text fontSize="1.1rem" color="#8c8b8b">
                Sold Products
              </Text>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Flex fontSize="2rem" gap={1}>
                <Text>90</Text>
                <Text color="#4ade1f">%</Text>
              </Flex>
              <Text fontSize="1.1rem" color="#8c8b8b">
                Happy Clients
              </Text>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Flex fontSize="2rem" gap={1}>
                <CountUp end={11} />
              </Flex>
              <Text fontSize="1.1rem" color="#8c8b8b" textAlign="center">
                Years in the <br /> Real-Estate Business
              </Text>
            </Box>
          </Box>
          <Box
            height="3rem"
            width="8rem"
            fontWeight={600}
            fontSize={15}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            background="#4ade1f"
            borderRadius="9px"
            position="relative"
            right={{base:"-30%", md:"-40%", lg:"-87%"}}
            top={{base:"107vh", md:"98vh", lg:"109px"}}
            animation="bounce 2s infinite"
            sx={{
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-20px)",
                },
              },
            }}
          >
            PROMOS
            <ArrowDownIcon fontSize={18} />
          </Box>
        </Box>

        {/*Right side*/}
        <Box
          display="flex"
          gap="2rem"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{ base: "22rem", md: "30rem" }}
            height={{ base: "35rem", md: "45rem" }}
            overflow="hidden"
            borderRadius="15rem 15rem 0 0"
            border="8px solid rgba(255, 255, 255, 0.12)"
            backgroundImage={home1}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;