import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { TbQuote } from "react-icons/tb"

const TestimonialCard = ({ name, image, testimonial}) => {
  return (
    <Box 
      backgroundColor="#ffffff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
      marginBottom={{ base:"1rem", sm:"0" }}
    >
       <Box>
          <TbQuote size="40" color="#6faa00"/>
       </Box>
       <Text fontSize="lg" color="gray.500" marginY="1.8rem">
          {testimonial}
        </Text>
        <Flex gap="1rem" alignItems="center">
            <Image 
              src={image} 
              width="6rem" 
              height="6rem" 
              objectFit="cover" 
              borderRadius="full"
            />
            <Box>
                <Text 
                   fontSize="lg" 
                   fontStyle="italic" 
                   color="gray.600"
                >
                    <span style={{ fontStyle:"normal"}}>by</span> {name}
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default TestimonialCard