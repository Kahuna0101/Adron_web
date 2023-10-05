import { Box, Flex, Text } from "@chakra-ui/react";
import { TbQuote } from "react-icons/tb";

import Image from "next/image";

const TestimonialCard = ({ name, image, testimonial }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Box>
        <TbQuote size="40" color="#6faa00" />
      </Box>
      <Text fontSize="lg" color="gray.500" marginY="1.8rem">
        {testimonial}
      </Text>
      <Flex gap="1rem" alignItems="center">
        <Box
          borderRadius="full"
          width="5rem"
          height="5rem"
          position="relative"
          overflow="hidden"
        >
          {image ? (
            <Image
            src={image}
            alt={name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
          ):(
            <Image
            src='/testimonials/profile.svg'
            alt={name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
          )}

        </Box>
        <Text fontSize="lg" fontStyle="italic" color="gray.600">
          <span style={{ fontStyle: "normal" }}>by</span> {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
