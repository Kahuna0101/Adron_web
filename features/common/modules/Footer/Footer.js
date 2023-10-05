import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { workWithUs, contactUs, socialLink } from "./footerConsts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Box
        backgroundColor="whatsapp.600"
        width="100%"
        margin="0 auto"
        padding={{ base: "1rem 2rem", sm: "8rem 3rem" }}
        display={{ base: "row", sm: "column" }}
      >
        <SimpleGrid
          column="4"
          color="black.700"
          gap={{ base: "1rem", sm: "3rem" }}
          minChildWidth={{ base: "none", sm: "50px" }}
        >
          <Flex flexDir="column">
            <Link href="/">
              <Image 
                src="/logo/logo.png"
                alt="Adron Homes"
                width={150}
                height={50}
              />
            </Link>
            <Box display="flex" mt={5} gap={3} px={1}>
              {socialLink.map((social) => (
                <Box backgroundColor="white" padding={2} borderRadius="full" color="green.500">
                <Link href={social.href} key={social.alt} target="_blank">
                  {social.icon}
                </Link>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="About Adron" />
            <FooterHeader title="Our Mission" />
            <FooterParagraph paragraph="We are daily driven to keep our promise of affordable housing products with a singular mission to exceed expectations." />
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Contact Us" />
            <FooterParagraph paragraph="For Complaints and enquiries you can reach us on any of the numbers or visit our head office at:" />
            {contactUs.map((item) => (
              <FooterLink key={item.id} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Quick Links" />
            {workWithUs.map((item) => (
              <FooterLink key={item.id} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor="whatsapp.700"
        display="flex"
        padding="2rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="white"
      >
        <Box display="flex" alignItems="center" gap="2">
          <HiHomeModern />
          <Text fontSize="lg" fontWeight="black">
            ADRON HOMES
          </Text>
        </Box>
        <Text marginTop="1rem" fontSize="xs" textAlign="center">
          © Adron Homes. All rights reserved.
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ name, link, icon }) => {
  return (
    <Link href={link}>
      <Flex
        alignItems="center"
        gap=".5rem"
        fontSize="medium"
        fontWeight="500"
        mb="1rem"
        color="#1e2022"
      >
        {icon}
        {name}
      </Flex>
    </Link>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text
      as="h4"
      fontWeight="500"
      fontSize="2xl"
      marginBottom=".5rem"
      color="#1e2022"
    >
      {title}
    </Text>
  );
};

const FooterParagraph = ({ paragraph }) => {
  return (
    <Text fontWeight="500" fontSize="medium" color="#fff" mb="1.5rem">
      {paragraph}
    </Text>
  );
};
