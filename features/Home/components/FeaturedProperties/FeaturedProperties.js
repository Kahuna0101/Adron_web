import PropertySlider from "./components/PropertySlider";
import { IoIosArrowForward } from "react-icons/io";

const { Box, Text, Button, ScaleFade } = require("@chakra-ui/react")
import Link from "next/link";

const FeaturedProperties = ({ featuredProperties }) => {

  return (
    <Box >
      <Box 
        width="100%" 
        margin="0 auto" 
        color="gray.600"
        padding={{base:"3rem", sm:"9rem"}}
      >
        <Text 
          fontSize={{base:"4xl", sm:"5xl"}}
          lineHeight="shorter" 
          fontWeight="light" 
          paddingX="2rem"
          textAlign="center"
        >
          Discover Our Featured Properties
        </Text>
        <Text 
          fontSize="2xl" 
          fontWeight="light" 
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          A selection of our best properties
        </Text>
        <PropertySlider featuredProperties={featuredProperties}/>
        <Box 
          display="flex"
          justifyContent="center"
        >
        <Link href="/properties">
          <Button 
            mt="3"
            padding="1.5rem" 
            colorScheme="whatsapp" 
            fontSize="1rem" 
            fontWeight="600"
            gap={2}
            alignItems="center"
            transition="transform .3s ease-in-out"
          >
            view all properties for sale <IoIosArrowForward />
          </Button>
        </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedProperties;