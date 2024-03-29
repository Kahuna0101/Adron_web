import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { usePostFormat } from "@/features/common/Hooks/usePostFormat";
import { getPost } from "../api/blogs";
import Image from "next/image";

const BlogSingle = ({ post }) => {
  const { title, tags, photo, desc, date } = usePostFormat(post);

  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding={{ base: "1rem", md: "9rem" }}>
        <Box width="100%" margin="0 auto" mt={{ base: "30px", md: "10px" }}>
          <Box mt={{ base: 1, md: 8 }}>
            <Box textAlign="center">
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="700"
                mb={3}
                textTransform="uppercase"
              >
                {title}
              </Text>
            </Box>

            <Flex
              direction="column"
              mt={6}
              alignItems="center"
              textAlign="center"
            >
              <Box
                display="flex"
                fontSize={{ base: 12, md: 17 }}
                fontWeight="600"
              >
                <Box mx={5}>
                  <Text>Author :</Text>
                  <Text color="gray.600">Adron Homes</Text>
                </Box>
                <Box mx={5}>
                  <Text>Category :</Text>
                  <Text color="gray.600" textTransform="capitalize">
                    {tags}
                  </Text>
                </Box>
                <Box mx={5}>
                  <Text>Date :</Text>
                  <Text color="gray.600">{date}</Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box
            position="relative"
            boxShadow="0 0 20px rgba(225, 225, 225, 0.7)"
            borderRadius=" 10px"
            mt={8}
          >
            <Image
              src={photo}
              alt={title}
              width={1500}
              height={60}
              style={{ borderRadius: "10px 10px 0  0" }}
            />

            <Box p={10}>
              <Text
                color="slate.400"
                fontSize="xl"
                fontWeight="600"
                fontStyle="italic"
              >
                {desc}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default BlogSingle;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const data = await getPost(id);

  return {
    props: {
      post: data,
    },
  };
}
