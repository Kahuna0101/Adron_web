import { useState, useRef } from 'react';
import { Box, Button, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";

import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const menuRef = useRef(null);
  
    const handleMouseEnter = () => {
      setIsMenuOpen(true);
      clearTimeout(hoverTimeout); // Clear any existing timeout
    };
  
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsMenuOpen(false);
      }, 500); // Adjust the duration in milliseconds (e.g., 500 for 0.5 seconds)
      setHoverTimeout(timeout);
    };
  
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
                <img src="../logo/logo.png" alt="Adron Homes" width="90px" height="20px"/>
              </Box>
            </Link>
            <Box display="flex" alignItems="center">
              {navigationLinks.map((item) => (
                <Button
                  key={item.title}
                  variant="unstyled"
                  padding="1.5rem" 
                  color="gray" 
                  fontSize="0.8rem" 
                  fontWeight="medium"
                  textTransform="uppercase"
                  _hover={{ color:"whatsapp.400"}}
                >
                  <NavigationLink key={item.title} {...item} />
                </Button>
              ))}
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', paddingTop:'15px' }}
                ref={menuRef}
              >
                <Menu isOpen={isMenuOpen} onClose={handleMouseLeave}>
                  <MenuButton
                    variant="unstyled"
                    padding="1.5rem" 
                    color="gray" 
                    fontSize="0.8rem" 
                    fontWeight="600"
                    _hover={{ color:"whatsapp.400" }}
                  >
                    SERVICES
                  </MenuButton>
                  <MenuList>
                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                  </MenuList>
                </Menu>
              </div>
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
  