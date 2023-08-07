import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import HeroSlide from '../HeroSlide/HeroSlide';
import WordAnimation from './WordAnimation';
import ReadMoreButton from './ReadMore';

const Hero = ({promos}) => {

  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        width="100%"
      >
        <Box 
          width={{ base: "auto", md: "60%" }} 
          margin="0" 
          position="relative"
        >
            
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base:"flex-start", sm:"space-between"}}
            position={{ base: "", sm: "absolute"}}
            fontWeight="light"
            left="0"
            right="0"
            bottom="0"
            top="0"
            padding={{ base:"2rem", sm:"9rem" }}
            backgroundColor="#eeeeee"
          >
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize={{ base: "50px", sm: "90px"}} fontWeight="600" color="whatsapp.500">Adron Homes</Text>
              <WordAnimation />
            </Flex> 
          </Box>
   
          <ReadMoreButton />
        </Box>

       <Box width={{ base: "auto", md: "60%" }} margin="0">
          <HeroSlide promos={promos}/>
      </Box> 
      </Flex>
    </Box> 
  );
};

export default Hero;
