import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const AboutCard = ({ image, title, description, purpose }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <Box mb="3">
      <Box
        as={motion.div}
        ref={ref}
        position="relative"
        display="flex"
        flexDirection="column"
        backgroundColor="#fff"
        backgroundClip="border-box"
        border="0.0625rem solid rgba(231, 234, 243, 0.7)"
        borderRadius="0 .75rem"
        boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
        height="100%"
        width="300px"
        animate={inView ? { opacity: 1, y: 0 } : {}}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <Box width="100%" padding="1.5rem">
          <img src={image} alt="icon" width="80px" />

          <Text fontSize="2xl" fontWeight="500" mt="3" color="#1e2022">
            {title}
          </Text>
          <Text fontSize="medium" color="gray.500" mt="3" mb="5">
            {description}
          </Text>

          <Link href="./properties">
            <Button
              variant="ghost"
              gap="1"
              fontSize="medium"
              fontWeight="bold"
              color="whatsapp.700"
              cursor="pointer"
              _hover={{
                backgroundColor: "#fff",
                color: "#1e2022",
              }}
            >
              {purpose}
              <IoIosArrowForward />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
