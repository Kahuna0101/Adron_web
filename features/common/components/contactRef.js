import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = ({ title, paragraph }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Text fontSize="xl" fontWeight="600" color="#1e2022">
        {title}
      </Text>
      <Text fontSize="medium" color="gray.600">
        {paragraph}
      </Text>
    </Box>
  );
};

export const ContactLocation = ({ title, address, phone, email, link }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <Box
      as={motion.div}
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      flexWrap="wrap"
      flexDirection="column"
      gap="1.5"
      fontSize="lg"
      color="gray.500"
    >
      <Text fontSize="3xl" fontWeight="600" color="#1e2022">
        {title}
      </Text>
      <Text>{address}</Text>
      <Text>{phone}</Text>
      <Link href={link} _hover={{ color: "#1e2022" }}>
        {email}
      </Link>
    </Box>
  );
};
