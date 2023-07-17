import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";

import { navigationLinks } from "../../navigationConsts";

const NavigationMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <Box
      padding="2rem"
      width="100%"
      display={{ base: "block", md: "none" }}
      boxShadow="0 0 20px rgba(168, 168, 168, 0.15)"
      position="fixed"
      zIndex="2"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <img src="../logo/logo.png" alt="Adron Homes" width="90px" height="20px" />
          </Box>
        </Link>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                aria-label="options"
                borderRadius="50%"
                onClick={handleMenuToggle}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </MenuButton>
              {isOpen && (
                <MenuList>
                  {navigationLinks.map((item) => (
                    <NavigationLink key={item.title} {...item} />
                  ))}
                  <MenuItem onClick={handleSubMenuToggle}>
                    <div
                      style={{ position: "relative" }}
                    >
                      <Menu isOpen={isSubMenuOpen} onClose={handleMenuClose}>
                        <MenuButton
                          aria-label="options"
                          borderRadius="50%"
                          fontWeight="600"
                          onClick={handleSubMenuToggle}
                        >
                          Services
                        </MenuButton>
                        <MenuList fontWeight="600">
                          <MenuItem as="a" href="#">
                            Sublink 1
                          </MenuItem>
                          <MenuItem as="a" href="#">
                            Sublink 2
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </MenuItem>
                </MenuList>
              )}
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem" fontWeight="600" >
        {title}
      </MenuItem>
    </Link>
  );
};
