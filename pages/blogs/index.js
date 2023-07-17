import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import DefaultLayout from "@/features/Layouts/DefaultLayout";
import { getPosts } from "../api/blogs";
import PostCard from "@/features/common/modules/PostCard/PostCard";

const Blogs = ({ posts }) => {

  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"9rem"}}>
          <Box width="100%" margin="0 auto" mt={{ base:"90px", sm:"10px" }}>
              <Text
                fontSize="30px"
                fontWeight="600"
                textAlign="center"
                mb={10}
              >
                    {!posts.length? "There are no Posts" : "Blogs & News"}
              </Text>
            
                    <SimpleGrid 
                        columns={{base:"1", sm:"3"}} 
                        gap={{base:"0", sm:"2rem"}}
                    >
                        {posts.map((post) => (
                            <PostCard key={post.title} {...post}/>
                        ))}
                    </SimpleGrid>
          </Box>
      </Box>
    </DefaultLayout>
  )
}

export default Blogs;

export async function getStaticProps() {
  const data = await getPosts(10);
  return {
    props: { posts: data },
    revalidate : 60,
  }  
};