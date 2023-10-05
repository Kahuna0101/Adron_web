import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { estates } from "./EstatesConst";
import Link from "next/link";
import Image from "next/image";

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Add state for displaying the success alert
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true); // Set the state to display the success alert
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      width="100%"
      fontSize="20px"
      color="#1e2022"
      p={6}
      boxShadow="md"
      borderRadius="lg"
    >
      {isSubmitted ? ( // Render the success alert when isSubmitted is true
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="300px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Subscription submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for contacting Adron Homes. Our team will get back to you
            soon.
          </AlertDescription>
          <AlertDescription maxWidth="sm" mt={5}>
            While waiting. Grab a ☕ take a look at other Estates.
          </AlertDescription>
          <Button
            as={Link}
            href="/properties"
            rightIcon="🏡"
            colorScheme="whatsapp"
            variant="outline"
            mt={2}
          >
            Properties
          </Button>
        </Alert>
      ) : (
        // Render the form when isSubmitted is false
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Image src='/subscribe/subscribe.png' alt='Subscribe' height={90} width={90}/>
            <Text
              fontSize={{ base: "20px", sm: "40px" }}
              fontWeight="600"
              textAlign="center"
            >
              Welcome! Subscribe to our Estates.
            </Text>
            <Box border="1px solid rgba(149, 149, 149, 0.5)" width="100%" />

            <Stack spacing={6} direction={{ base: "column", sm: "row" }} mt={4}>
              <Input
                id="firstname"
                type="text"
                placeholder="First Name"
                {...register("firstname", { required: true })}
              />
              <Input
                id="lastname"
                type="text"
                placeholder="Last Name"
                {...register("lastname", { required: true })}
              />
            </Stack>

            <Input
              mt={4}
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <Input
              mt={4}
              id="phone"
              type="text"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />

            <Text mt={4}>Are you a new or Existing Subscriber?</Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
              mt={2}
            >
              <Checkbox
                colorScheme="green"
                {...register("subscriber")}
                value="New Subscriber"
              >
                I'm a new Subscriber
              </Checkbox>
              <Checkbox
                colorScheme="green"
                {...register("subscriber")}
                value="Existing Client"
              >
                I'm an Existing Client
              </Checkbox>
            </Stack>

            <Stack spacing={6} direction={{ base: "column", sm: "row" }} mt={4}>
              <Box flex={1}>
                <FormLabel>Estate Interested in</FormLabel>
                <Select placeholder="Estate" mt={2} {...register("estate")}>
                  {estates.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box flex={1}>
                <FormLabel>Number of Plots</FormLabel>
                <NumberInput defaultValue={1} min={0} mt={2}>
                  <NumberInputField {...register("numberOfPlots")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Stack>

            <Textarea
              mt={4}
              id="message"
              type="textarea"
              placeholder="Questions & Comments"
              {...register("message", { required: true })}
            />

            <Text mt={4}>Preferred Contact Method</Text>
            <Stack spacing={5} direction={{ base: "column", sm: "row" }} mt={2}>
              <Checkbox
                colorScheme="green"
                {...register("contactMethod")}
                value="Call"
              >
                A call from our agents
              </Checkbox>
              <Checkbox
                colorScheme="green"
                {...register("contactMethod")}
                value="E-mail"
              >
                An E-mail
              </Checkbox>
              <Checkbox
                colorScheme="green"
                {...register("contactMethod")}
                value="WhatsApp"
              >
                WhatsApp
              </Checkbox>
            </Stack>

            <Input
              mt={4}
              id="refName"
              type="text"
              placeholder="Name of Referrer Agent"
              {...register("refName")}
            />
            <Input
              mt={4}
              id="refPhone"
              type="text"
              placeholder="Agent's Contact"
              {...register("refPhone")}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="whatsapp"
            fontSize="xl"
            padding="2rem"
            marginTop="2rem"
            width="100%"
            textAlign="center"
          >
            Submit application
          </Button>
        </form>
      )}
    </Box>
  );
};

export default SubscriptionForm;
