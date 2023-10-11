import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { navigationLinks } from "../../navigationConsts";
import Image from "next/image";
import {usePathname} from 'next/navigation';

const NavigationDesktop = () => {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      display={{ base: "none", md: "block" }}
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
            <Box display="flex" alignItems="center">
              <Image
                src="/logo/logo.png"
                alt="Adron Homes"
                width={90}
                height={20}
                style={{ color: "#45b82b" }}
              />
            </Box>
          </Link>
          <Box display="flex" alignItems="center">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.link;
              return (
              <Button
                key={item.title}
                variant='ghost'
                color={isActive && 'white' || "grey"}
                padding="1.5rem"
                fontSize="0.8rem"
                fontWeight="medium"
                textTransform="uppercase"
                _hover={{ color: isActive && 'white' || "whatsapp.400" }}
                backgroundColor={isActive && 'whatsapp.300'}
              >
                <NavigationLink key={item.id} {...item} />
              </Button>
              );
            }  
            )}
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
};

export default NavigationDesktop;

const NavigationLink = ({ title, link }) => {
  return (
    <Link href={link}>
      <Box as="span" marginX="2" fontWeight="600">
        {title}
      </Box>
    </Link>
  );
};
