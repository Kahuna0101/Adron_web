import { FaRulerCombined, FaBed, FaBath } from "react-icons/fa";
import { GiGate } from "react-icons/gi";

const { Box, Flex, Text, Center, Divider } = require("@chakra-ui/react");

const PropertyStats = ({
  rooms,
  baths,
  price,
  sqSize,
  gateHouse,
  propertyType,
}) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem">
      {propertyType === "land" ? (
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
            <Text>SIZE</Text>
            <Flex alignItems="center" gap="0.5rem">
              <FaRulerCombined />
              {sqSize}
              <sup>Sq M</sup>
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
            <Text>GATE HOUSE</Text>
            <Flex alignItems="center" gap="0.5rem">
              <GiGate />
              <Text textTransform="uppercase">{gateHouse}</Text>
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
            <Flex alignItems="center" gap="0.5rem">
              {price}
            </Flex>
          </Flex>
        </Flex>
      ) : (
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
              {rooms}
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
              {baths}
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
              {sqSize}
              <sup>Sq M</sup>
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
            <Flex alignItems="center" gap="0.5rem">
              {price}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default PropertyStats;
