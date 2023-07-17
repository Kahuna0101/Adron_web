import { Badge, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePostFormat } from "../../Hooks/usePostFormat";
import { logo } from "../Navigation/navigationConsts";

const PostCard = ( post ) => {
  const {
    id,
    title,
    desc,
    tags,
    photo,
  } = usePostFormat(post);

  return (
    <Box marginBottom="4rem" backgroundColor="#fff" boxShadow="0 0 20px rgba(225, 225, 225, 0.7)" borderRadius="10px" width="100%">
    <Link href={`/blogs/${id}`}>
      <Box 
        backgroundImage={`url("${photo}")`} 
        height="250px"
        backgroundPosition="center center"
        backgroundSize="cover"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="10px"
      >
        <Box margin="1rem">
          <Badge colorScheme="green">
           Promo {/* purpose */}
          </Badge>
        </Box>
      </Box>

      <Box padding="1.5rem">
        <Text 
          fontSize="xl" 
          fontWeight="medium" 
          marginBottom="1rem"
        >
          {title}
        </Text>
        <Text fontSize="medium" fontWeight="500" color="gray.600" noOfLines="3">{desc}</Text>
        

        <Box display="flex" alignItems="center" gap="4" mt="auto">
          <Image src={logo} alt="Adron" width="3rem" height="3rem" borderRadius="30%"/>
          <Box flexDirection="column">
            <Text fontWeight="600" fontSize="xl">Adron Homes</Text>
            <Text fontSize="medium" fontWeight="600" color="gray.600">Date</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  </Box>
    
    
  )
}

export default PostCard;