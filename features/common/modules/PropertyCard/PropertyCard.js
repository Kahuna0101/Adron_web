import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { usePropertyFormat } from "../../Hooks/usePropertyFormat";
import { FaRulerCombined, FaStar, FaBed, FaBath } from "react-icons/fa";

import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

const PropertyCard = (property) => {
  const {
    id,
    address,
    title,
    propertyType,
    propertyStatus,
    price,
    area,
    rooms,
    baths,
    coverPhoto,
  } = usePropertyFormat(property);

  return (
    <Box
      marginBottom="4rem"
      backgroundColor="#fff"
      boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
      borderRadius="10px"
      width="100%"
    >
      <Link href={`/properties/${id}`}>
        <Box
          backgroundImage={`url("${coverPhoto}")`}
          height="250px"
          backgroundPosition="center center"
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderRadius="10px"
        >
          <Box margin="1rem">
            <Badge
              colorScheme={propertyStatus === "for-sale" ? "green" : "red"}
            >
              {" "}
              {propertyStatus}{" "}
            </Badge>
          </Box>

          <Box
            height="50%"
            bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
            display="flex"
            alignItems="flex-end"
            padding="1rem"
          >
            <Text fontSize="3xl" fontWeight="600" color="whiteAlpha.800">
              {price}
            </Text>
          </Box>
        </Box>

        <Box padding="1.5rem">
          <Text
            fontSize="xl"
            fontWeight="600"
            marginBottom="1rem"
            textTransform="uppercase"
            _hover={{ color: "#34D399" }}
          >
            {title}
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
            mb="1rem"
          >
            <Flex flexDirection="row" alignItems="center" gap={1}>
              <MdLocationPin style={{ color: "#34D399" }} />
              <Text
                fontWeight="500"
                fontSize="md"
                isTruncated
                display="flex"
                alignItems="center"
                gap="2"
              >
                {" "}
                {address}
              </Text>
            </Flex>

            <Badge
              padding="1.5"
              borderRadius="5px"
              color="green.600"
              colorScheme="whatsapp"
            >
              {propertyType}
            </Badge>
          </Box>

          {propertyType === "land" ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              mb="1rem"
            >
              <HStack spacing="1.3rem">
                <Flex alignItems="center" gap={2} fontSize="15px">
                  <FaRulerCombined style={{ color: "#34D399" }} />
                  <Text fontWeight="500">{area} Sq Meter</Text>
                </Flex>
              </HStack>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              mb="1rem"
            >
              <HStack spacing="1rem">
                <Flex alignItems="center" gap={1.5} fontSize="15px">
                  <FaRulerCombined style={{ color: "#34D399" }} />
                  <Text fontWeight="600">{area} SqM</Text>
                </Flex>
                <Flex alignItems="center" gap={1.5} fontSize="15px">
                  <FaBed style={{ color: "#34D399" }} />
                  <Text fontWeight="600">{rooms} Beds</Text>
                </Flex>
                <Flex alignItems="center" gap={1.5} fontSize="15px">
                  <FaBath style={{ color: "#34D399" }} />
                  <Text fontWeight="600">{baths} Baths</Text>
                </Flex>
              </HStack>
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
          >
            <Text fontSize="medium" fontWeight="500" color="gray.400">
              Rating:
            </Text>
            <Flex>
              {[1, 2, 3, 4, 5].map((item) => (
                <FaStar key={`star-${item}`} style={{ color: "#F2C94C" }} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default PropertyCard;
