import { Box, Text, SimpleGrid } from "@chakra-ui/react";

import { agents } from "./agentConst";
import AgentCard from "./components/AgentCard";

const MeetTheTeam = () => {
  return (
    <Box>
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
          {agents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MeetTheTeam;
