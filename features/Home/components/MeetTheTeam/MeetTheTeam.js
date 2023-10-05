import { Box, Text, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";

import { agents } from "./agentConst";
import AgentCard from "./components/AgentCard";

const MeetTheTeam = () => {
  return (
    <section>
      <Box width="100%" margin="0 auto" padding={{ base: "3rem", sm: "9rem" }}>
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Meet The Team
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          The best in the industry, at your service 24/7
        </Text>
        <SimpleGrid
          columns="3"
          minChildWidth="300px"
          gap={{ base: "0.5rem", sm: "2.5rem" }}
        >
          {agents.slice(0,4).map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </SimpleGrid>
        <Box display="flex" justifyContent="center" mt={7}>
          <Link href="/about">
            <Button
              mt="3"
              padding="1.5rem"
              colorScheme="whatsapp"
              fontSize="1rem"
              fontWeight="600"
              gap={2}
              alignItems="center"
              transition="transform .3s ease-in-out"
            >
              Meet all Team Members
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default MeetTheTeam;
