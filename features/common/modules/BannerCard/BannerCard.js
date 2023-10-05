import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { usePostFormat } from "../../Hooks/usePostFormat";
import Image from "next/image";

const BannerCard = (post) => {
  const { id, photo } = usePostFormat(post);

  return (
    <Box
      position="relative"
      backgroundSize="contain"
      minHeight="100vh"
      backgroundPosition="center"
    >
      <Image 
        src={photo}
        alt="Promos"
        fill={true}
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="20px"
        padding="2rem"
      >
        <Box
          width={{ base: "100%", sm: "auto" }}
          mt={{ base: "40vh", sm: "65vh" }}
        >
          <Link href={`/blogs/${id}`}>
            <Button
              padding="1.5rem"
              colorScheme="whatsapp"
              fontSize="1rem"
              fontWeight="600"
              gap={2}
              transition="all .2s ease-in-out"
            >
              Read Article <IoIosArrowForward />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerCard;
