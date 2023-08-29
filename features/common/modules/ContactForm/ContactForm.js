import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Add state for displaying the success alert
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
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
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
      {isSubmitted ? ( // Render the success alert when isSubmitted is true
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for contacting Adron Homes. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      ) : (
        // Render the form when isSubmitted is false
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              marginTop="1.3rem"
              id="name"
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            <Input
              marginTop="1.3rem"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <Input
              marginTop="1.3rem"
              id="phone"
              type="tel"
              placeholder="Phone"
              {...register("phone", {
                required: true,
                valueAsNumber: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            <Textarea
              marginTop="1.3rem"
              id="message"
              type="textarea"
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <Checkbox
              marginTop="1.3rem"
              id="consent"
              type="checkbox"
              placeholder="consent"
              color="gray"
              {...register("consent", {
                required: true,
                minLength: 10,
                maxLength: 500,
              })}
            >
              <Text fontSize="0.8rem" color="gray.500">
                I consent to having Adron Homes store my details for future
                communications
              </Text>
            </Checkbox>
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
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ContactForm;
