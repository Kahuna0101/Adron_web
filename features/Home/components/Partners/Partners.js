import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./PartnersConst";

const Partners = () => {
  return (
    <Box >
      <Box 
          width="100%" 
          margin="0"
          height={540}
          padding={{base:"3rem", sm:"9rem"}}
        >
          <Text
            fontSize={{base:"4xl", sm:"5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
          >
            Our Partners
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="light"
            marginTop="1rem"
            marginBottom="3rem"
            paddingX="2rem"
            textAlign="center"
          >
            Here's our Esteemed partners In the years
          </Text>
          <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px" >
            {partners.map((partner) => (
              <Image 
                key={partner}
                src={partner}
                alignSelf="center"
                padding={{base:"2rem", sm: "3rem"}}
                filter="grayscale(1)"
                _hover={{filter:"none"}}
                opacity="0.4"
              />
             ))}
          </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Partners;