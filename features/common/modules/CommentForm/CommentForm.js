import { Box, Button, FormControl, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const CommentForm = () => {

    const { 
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm();

    const onSubmit = (data) => console.log(data);

  return (
    <Box 
      width="100%" 
      borderRadius="sm" 
      backgroundColor="white" 
      color="gray.700"
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Input 
                  marginTop="1.3rem"
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                 <Input 
                  marginTop="1.3rem"
                  id="email"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <Textarea 
                  marginTop="1.3rem" 
                  id="message"
                  type="textarea"
                  placeholder="Message"
                  {...register("message", { required: true })}
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
                Send Message
            </Button>
        </form>
    </Box>
  );
};

export default CommentForm;