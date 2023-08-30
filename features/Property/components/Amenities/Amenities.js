import TextContentBox from "@/features/common/modules/TextContentBox/TextContentBox";
import { Flex, Center, Divider, Text } from "@chakra-ui/react";
import React from "react";

import { FaRulerCombined, FaBed, FaBath } from "react-icons/fa";
const Amenities = () => {
  return (
    <TextContentBox title="Amenities">
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        fontSize="xl"
        color="gray.500"
        fontWeight="bold"
        gap="1rem"
        justifyContent="space-around"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="0.3rem"
        >
          <Text>BEDS</Text>
          <Flex alignItems="center" gap="0.5rem">
            <FaBed />
          </Flex>
        </Flex>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="0.3rem"
        >
          <Text>BATHS</Text>
          <Flex alignItems="center" gap="0.5rem">
            <FaBath />
          </Flex>
        </Flex>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="0.3rem"
        >
          <Text>SIZE</Text>
          <Flex alignItems="center" gap="0.5rem">
            <FaRulerCombined />
          </Flex>
        </Flex>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="0.3rem"
        >
          <Text>PRICE</Text>
          <Flex alignItems="center" gap="0.5rem"></Flex>
        </Flex>
      </Flex>
    </TextContentBox>
  );
};

export default Amenities;
