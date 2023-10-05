import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { navigationLinks } from "../../navigationConsts";

const NavigationMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      padding="2rem"
      width="100%"
      display={{ base: "block", md: "none" }}
      boxShadow="0 0 20px rgba(168, 168, 168, 0.15)"
      position="sticky"
      zIndex="2"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Image 
              src="/logo/logo.png"
              alt="Adron Homes"
              width={90}
              height={20}
              />
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
              <MenuList>
                {navigationLinks.map((item) => (
                  <NavigationLink
                    key={item.id}
                    {...item}
                    onClick={handleMenuClose}
                  />
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, onClick }) => {
  return (
    <Link href={link}>
      <MenuItem
        alignItems="center"
        gap="0.5rem"
        fontWeight="600"
        onClick={onClick}
      >
        {title}
      </MenuItem>
    </Link>
  );
};
