import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout';
import { journeys, objectives } from "@/features/Home/components/AboutUs/AboutUsConst";
import AgentCard from "@/features/Home/components/MeetTheTeam/components/AgentCard/AgentCard";
import { agents } from "@/features/Home/components/MeetTheTeam/agentConst";


const about = () => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"9rem"}}>
            <Text fontSize={{ base:"30px", sm:"90px" }} fontWeight="600" mt={{ base:"90px", sm:"30px"}} textAlign="center">About Us</Text>
            <Grid
              templateColumns={{ base: "", sm: "repeat(3, 1fr)" }} 
              gap="5"
              margin="auto"
              width="100%"
              mt="40px"
            >
                {objectives.map((objective) => (
                <AboutUs key={objective.icon} { ...objective } />
            ))}
            </Grid>
            <Grid
              templateColumns={{ base: "", sm: "repeat(3, 1fr)" }} 
              margin="auto"
              width="60%"
              mt="90px"
            >
                {journeys.map((journey) => (
                    <SoFar key={journey.title} { ...journey} />
                ))}
            </Grid>
            
            <Box border="1px solid rgba(149, 149, 149, 0.5)" width={{ base:"100%", sm:"60%"}} margin={{ base:"5rem auto", sm:"10rem 17rem"}} />
            
            <Box width="100%">
                <Flex display="flex" flexDirection="column-reverse" alignItems="center" mb="90px">
                    <Text fontSize="40px" fontWeight="600" color="#1e2022">The best in the industry, at your service 24/7</Text>
                    <Text fontSize="medium" color="gray.600">OUR TEAM</Text>                  
                </Flex>
                 
                <Flex 
                direction={{base:"column", sm:"row"}}
                justifyContent="space-between"
                gap="1.5rem"
                >
                    {agents.map((agent) =>(
                        <AgentCard key={agent.name} {...agent}/>
                    ))}
                </Flex>
            </Box>
            
            <Box display="flex" justifyContent="center">
                <Box display="flex" flexDirection="row" gap="3" border="1px solid rgba(149, 149, 149, 0.5)" borderRadius="50rem" justifyContent="center" width="fit-content" padding="15px">
                    <Text fontSize={{base:"12px", sm:"20px"}} fontWeight="600" color="gray.600">Want to work with us?</Text>
                    <Link href="/contact">
                        <Text fontSize={{base:"12px", sm:"20px"}} fontWeight="600" color="whatsapp.600" textAlign="center" gap="2" _hover={{ color: "#1e2022" }}>We are hiring {arrow}</Text>
                    </Link>
                    
                </Box>
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default about;

const AboutUs = ({ image, title, description}) => {
    return (
        <Box gap="6">
            <img src={image} alt={title} width="50px"/>
            <Box>
                <Text fontSize="xl" fontWeight="600" color="#1e2022">{title}</Text>
                <Text fontSize="medium" color="gray.600">{description}</Text> 
            </Box>
        </Box>
    )
}

const SoFar = ({title, description}) => {
    return (
        <Box textAlign="center">
           <Text fontSize="60px" fontWeight="600" color="#1e2022">
            {title}
            </Text>
            <Text fontSize="medium" color="gray.600">
            {description}   
            </Text>
        </Box>
    )
}

const arrow = '>'