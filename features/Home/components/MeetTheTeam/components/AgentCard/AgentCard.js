import Link from "next/link";
import { motion } from "framer-motion";

const { Box, Image, Text } = require("@chakra-ui/react")

const AgentCard = ({ name, image, description, title, social}) => {


  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Box 
        position="relative"
        backgroundColor="#f1f1f14a" 
        padding="2rem" 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="0 12px 15px rgba(140, 152, 164, .1)"
        marginBottom={{base:"1rem", sm:"3rem"}}
      >
        <Image 
          src={image}
          width="5rem"
          height="5rem"
          objectFit="cover"
          borderRadius="full"
          marginBottom="2rem"
          shadow="md"
        />
          <Text 
            fontSize="lg"
            color="whatsapp.600"
          >
            {title}
          </Text>
          <Text
            color="whatsapp.400"
            fontSize="xl"
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text
            fontSize="md"
            fontWeight="light"
            noOfLines="4"
            marginTop="1rem"
            color="gray.600"
          >
            {description}
          </Text>
            <Box display="flex" gap="3" mt="3">
              {social?.map((item) => (
                <SocialLink key={item.link} {...item} />
              ))}
            </Box>
      </Box>
    </motion.div>
  )
}

export default AgentCard

const SocialLink = ({ link, icon}) => {
  return (
      <Link href={link}>
          <Box padding="0.5rem .75rem" color="#71869d" backgroundColor="rgba(113, 134, 157, .1)" borderRadius="5px" fontSize="1.1rem" fontWeight="400" _hover={{ color: "#fff", backgroundColor: "#71869d" }}>
            {icon}
          </Box>
      </Link>
  )
}