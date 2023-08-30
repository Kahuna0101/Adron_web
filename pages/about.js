import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import { objectives } from "@/features/Home/components/AboutUs/AboutUsConst";
import AgentCard from "@/features/Home/components/MeetTheTeam/components/AgentCard/AgentCard";
import { agents } from "@/features/Home/components/MeetTheTeam/agentConst";
import { About } from "@/features/Home/components/AboutUs/AboutComp";
import CountUp from "react-countup/";

const about = () => {
  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", md: "9rem" }}>
        <Text
          fontSize={{ base: "30px", md: "90px" }}
          fontWeight="600"
          mt={{ base: "90px", md: "30px" }}
          textAlign="center"
        >
          About Us
        </Text>
        <Box
          display={{ base: "column", md: "flex" }}
          justifyContent="space-between"
          gap="5"
          margin="auto"
          width="100%"
          mt="40px"
        >
          {objectives.map((objective) => (
            <About key={objective.id} {...objective} />
          ))}
        </Box>
        <Box
          display={{ base: "column", md: "flex" }}
          justifyContent="space-between"
          margin="auto"
          width={{ base: "100%", md: "60%" }}
          mt="90px"
        >
          <Flex flexDir="column" alignItems="center">
            <Text fontSize="4xl" fontWeight="600">
              <CountUp end={11} />
            </Text>
            <Text
              fontSize="1.7rem"
              fontWeight="600"
              color="#8c8b8b"
              textAlign="center"
            >
              Years in the <br /> Real-Estate Business
            </Text>
          </Flex>

          <Flex flexDir="column" alignItems="center">
            <Text fontSize="4xl" fontWeight="600">
              <CountUp start={9500} end={10000} duration={4} />+
            </Text>
            <Text
              fontSize="1.7rem"
              fontWeight="600"
              color="#8c8b8b"
              textAlign="center"
            >
              Sold Products{" "}
            </Text>
          </Flex>

          <Flex flexDir="column" alignItems="center">
            <Text fontSize="4xl" fontWeight="600">
              90%
            </Text>
            <Text
              fontSize="1.7rem"
              fontWeight="600"
              color="#8c8b8b"
              textAlign="center"
            >
              Happy Clients
            </Text>
          </Flex>
        </Box>

        <Box
          border="1px solid rgba(149, 149, 149, 0.5)"
          width={{ base: "100%", md: "60%" }}
          margin={{ base: "5rem auto", md: "10rem 17rem" }}
        />

        <Box width="100%">
          <Flex
            display="flex"
            flexDirection="column-reverse"
            alignItems="center"
            mb="50px"
          >
            <Text
              fontSize="40px"
              fontWeight="600"
              color="#1e2022"
              textAlign="center"
            >
              The best in the industry, at your service 24/7
            </Text>
            <Text fontSize="medium" color="gray.600">
              OUR TEAM
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="1.5rem"
          >
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </Flex>
        </Box>

        <Box display="flex" justifyContent="center" mt="50px">
          <Box
            display="flex"
            flexDirection="row"
            gap="3"
            border="1px solid rgba(149, 149, 149, 0.5)"
            borderRadius="50rem"
            justifyContent="center"
            width="fit-content"
            padding="15px"
          >
            <Text
              fontSize={{ base: "12px", md: "20px" }}
              fontWeight="600"
              color="gray.600"
            >
              Want to work with us?
            </Text>
            <Link href="/contact">
              <Text
                fontSize={{ base: "12px", md: "20px" }}
                fontWeight="600"
                color="whatsapp.600"
                textAlign="center"
                gap="2"
                _hover={{ color: "#1e2022" }}
              >
                We are hiring
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default about;
