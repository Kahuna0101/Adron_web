import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";


export const About = ({ image, title, description}) => {
    return (
        <Box mb={30}>
            <Image src={`/${image}`} alt={title} width={50} height={50}/>
            <Box>
                <Text fontSize="xl" fontWeight="600" color="#1e2022">{title}</Text>
                <Text fontSize="medium" color="gray.600">{description}</Text> 
            </Box>
        </Box>
    )
}