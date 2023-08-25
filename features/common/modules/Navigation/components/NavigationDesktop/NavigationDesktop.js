import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {

    return (
      <Box
        as="nav"
        display={{ base:"none", md:"block"}}
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        boxShadow="0 0 20px rgba(168, 168, 168, 0.15)"
        position="fixed"
        zIndex="2"
        padding="1rem 3rem"
      >
        <Box width="100%" margin="0 auto">
          <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
              <Box display="flex" alignItems="center" >
                <img src="../logo/logo.png" alt="Adron Homes" width="90px" height="20px" color="#45b82b"/>
              </Box>
            </Link>
            <Box display="flex" alignItems="center">
              {navigationLinks.map((item) => (
                <Button
                  key={item.title}
                  variant="unstyled"
                  color="grey"
                  padding="1.5rem" 
                  fontSize="0.8rem" 
                  fontWeight="medium"
                  textTransform="uppercase"
                  _hover={{ color:"whatsapp.400"}}
                >
                  <NavigationLink key={item.title} {...item} />
                </Button>
              ))}
            </Box>
            <Flex gap="2" fontWeight="medium">
              <Button 
                as={Link}
                href="/subscribe"                
                marginLeft="230px"
                padding="1.5rem" 
                colorScheme="whatsapp" 
                fontSize="1rem" 
                fontWeight="600"
              >
                Take Action!
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    );
  }
  
  export default NavigationDesktop;
  
  const NavigationLink = ({ title, link }) => {
    return (
      <Link href={link}>
        <Box as="span" marginX="2" fontWeight="600">
          {title}
        </Box>
      </Link>
    );
  }
  