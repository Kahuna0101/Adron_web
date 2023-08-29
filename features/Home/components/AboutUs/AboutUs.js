import AboutCard from '@/features/common/modules/AboutCard'
import { Box, Flex, Text } from '@chakra-ui/react'
import { hero } from '../Hero/HeroConst'
import { abouts } from './AboutUsConst'

const AboutUs = () => {
  return (
    <Box 
      position="relative"
    >
      <Box
        width="100%"
        display="flex"
        flexDirection={{base:"column", md:"row"}}
        margin="0 auto"
        padding={{base:"3rem", md:"9rem"}}
      >
        <Box display="flex" justifyContent="flex-start" alignItems="center" padding="15px" mb="3rem">
          <Flex flexDirection="column" width={{base:"100%", md:"40%"}}>
            <Text fontSize="5xl" fontWeight="600" mt="0" mb=".5rem" lineHeight="1.4" color="#1e2022">Adron Homes helps you make better property decisions</Text>
            <Text fontSize="medium" color="gray.500">Adron has Nigeria's largest collection of exquisite estates, empowering you to find the right area for you to move to. With tens of thousands of local community topics and discussions, find the answers to all your questions about an area, or ask the locals.</Text>
            <Flex flexDirection={{base:"column", md:"row"}} mt="6" gap="3">
              {abouts.map((about) => (
                <AboutCard key={about.image} {...about}/>
              ))}
            </Flex>
          </Flex>

          
        </Box>
      </Box> 

      <Box
        position="absolute"
        backgroundImage={hero}
        top="0"
        right="0"
        width="40%"
        height="100%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        zIndex="-1"
        display={{base:"none", md:"initial"}}
      />
    </Box>
  )
}

export default AboutUs