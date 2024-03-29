import TestimonialCard from "./components/TestimonialCard";
import { testimonials } from "./testimonialsConst";

const { Box, Text, SimpleGrid } = require("@chakra-ui/react");

const Testimonials = () => {
  return (
    <Box>
      <Box width="100%" margin="0 auto" padding={{ base: "3rem", sm: "9rem" }}>
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Testimonials
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          Here's what our valued clients have to say
        </Text>
        <SimpleGrid
          columns="3"
          minChildWidth="300px"
          gap={{ base: "0.5rem", sm: "2.5rem" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
