import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import HeroSlide from '../HeroSlide/HeroSlide';
import WordAnimation from './WordAnimation';
import ReadMoreButton from './ReadMore';

const Hero = () => {
  return (
    <Box>
      <Box 
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        backgroundColor="#eeeeee"
      >
        <Box width={{ base: "auto", md: "50%" }} margin="0" position="relative">
          <Box
            display="flex"
            flex="1"
            flexDirection={{ base: "column", sm: "row"}}
            alignItems="center"
            justifyContent={{ base:"flex-start", sm:"space-between"}}
            width="100%"
            position={{ base: "", sm: "absolute"}}
            fontWeight="light"
            left="0"
            right="0"
            bottom="0"
            top="0"
            margin={{ base: "0", sm: "20px"}}
            padding="2rem"
            marginTop={{ base: '100px', sm: '0'}}
          >
            <Flex flexDirection="column" >
              <Text fontSize={{ base: "50px", sm: "90px"}} fontWeight="600" color="whatsapp.500">Adron Homes</Text>
              <WordAnimation />
            </Flex> 
          </Box>
   
          <ReadMoreButton />
        </Box>

        <Box width={{ base: "auto", md: "50%" }} margin="0">
          <HeroSlide />
        </Box>
      </Box>
    </Box> 
  );
};

export default Hero;






/*<Box 
    position="relative" 
    minHeight={{base:"110vh", sm:"90vh"}}
    backgroundImage={`url('./hero/herogb.jpeg')`}
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundAttachment="fixed"
    >
      
    </Box> 
    <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.4"
        backgroundColor="whatsapp.500"
      />
      <Box display="flex" flexDirection={{base:"column", sm:"row"}}
        alignItems="center" justifyContent={{base:"flex-start", sm:"space-between"}}
        width="100%"
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="2rem"
      >
        <Box width={{base: "100%", sm:"50%"}}>
          <Text fontSize={{base: "4xl", sm: "5xl"}} lineHeight="shorter" marginBottom="1.5rem">
            Download our new <strong>property buying guide</strong> today...
          </Text>
          <Text fontSize={{base:"lg", sm:"2xl"}}>
            A free PDF with our best secret for evaluating a property purchase, calculating profit and so much more.
          </Text>
        </Box>
        <Box width={{base:"100%", sm:"auto"}} marginTop={{base:"2rem", sm:"0"}}><HeroForm /></Box>
      </Box> */