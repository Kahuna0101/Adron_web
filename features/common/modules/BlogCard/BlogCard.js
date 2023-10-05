import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { usePostFormat } from "../../Hooks/usePostFormat";
import { TbCalendarEvent } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const PostCard = (post) => {
  const { id, title, tags, photo, date } = usePostFormat(post);

  return (
    <Box
      marginBottom="4rem"
      backgroundColor="#fff"
      boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
      borderRadius="10px"
      width="100%"
    >
      <Link href={`/blogs/${id}`}>
        <Box
          height="250px"
          position="relative"
          borderRadius="10px"
        >
          <Image
           src={photo}
           alt={title}
           fill
          />
        </Box>

        <Box padding="1.5rem">
          <Box display="flex" justifyContent="space-between">
            <Flex
              alignItems="center"
              fontSize={17}
              fontWeight="600"
              gap={3}
              mb={3}
            >
              <TbCalendarEvent />
              <Text color="gray.600">{date}</Text>
            </Flex>

            <Box margin="1rem">
              <Badge
                color="white"
                bgColor="whatsapp.500"
                borderRadius="7px"
                padding=".3rem"
              >
                {tags}
              </Badge>
            </Box>
          </Box>

          <Text
            fontSize="25px"
            fontWeight="600"
            _hover={{ transition: "all 2s", color: "whatsapp.500" }}
            mb={3}
          >
            {title}
          </Text>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ transition: "ease-in-out .5s", color: "whatsapp.500" }}
          >
            <Text fontSize="20px" fontWeight="500">
              Read More
            </Text>
            <FaArrowRight />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default PostCard;
