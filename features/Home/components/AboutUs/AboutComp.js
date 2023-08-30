import { Box, Text } from "@chakra-ui/react";


export const About = ({ image, title, description}) => {
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