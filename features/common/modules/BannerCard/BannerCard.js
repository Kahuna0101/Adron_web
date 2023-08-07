import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { usePostFormat } from "../../Hooks/usePostFormat";


const BannerCard = ( post ) => {

  const {
    id,
    title,
    photo,
  } = usePostFormat(post);

  return (
        <Box position="relative" display="flex" backgroundImage={photo} backgroundSize="cover" minHeight="100vh"
            backgroundPosition="center" backgroundAttachment="fixed">
          <Box 
            display="flex"
            flex="1"
            flexDirection={{ base: "column", sm: "row"}}
            alignItems="center"
            justifyContent={{ base:"flex-start", sm:"space-between"}}
 
            position="absolute"
            color="white"
            fontWeight="light"
            left="0"
            right="0"
            bottom="0"
            top="0"
            margin="20px"
            padding="2rem"
          >
            <Box width={{base:"100%", sm:"auto"}} mt={{base:"40vh", sm:"47vh"}}>
               <Text fontSize={{base:"50px", sm:"70px"}} fontWeight="700" mb="4rem">{title}</Text>
               <Link href={`/blogs/${id}`}>
                <Button 
                  padding="1.5rem" 
                  colorScheme="whatsapp" 
                  fontSize="1rem" 
                  fontWeight="600"
                  gap={2}
                  transition="all .2s ease-in-out"
                >
                    Read Article <IoIosArrowForward />
                </Button>
               </Link>
            </Box>
          </Box>
        </Box>
  )
}

export default BannerCard;