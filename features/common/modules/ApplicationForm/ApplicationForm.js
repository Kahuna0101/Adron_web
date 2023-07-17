import { Box, Button, FormControl, Input, Text, Textarea, Tooltip } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiQuestionMarkCircle } from "react-icons/hi2";

const ApplicationForm = () => {

    const { 
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm();

    const onSubmit = (data) => console.log(data);

  return (
    <Box
    width="100%" 
    mt="40px"
    fontSize="20px"
    color="#1e2022"
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Text fontSize="40px" fontWeight="600" >Personal Information</Text>
                <Box border="1px solid rgba(149, 149, 149, 0.5)" width="100%" />
                <Box display="flex" gap="3" mt="2rem">
                    <Box flex="1">
                        <Text>First Name</Text>
                    <Input 
                    marginTop=".5rem"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    {...register("firstname", { required: true })}
                    />
                    </Box>
                    <Box flex="1">
                        <Text>Last Name</Text>
                    <Input 
                    marginTop=".5rem"
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastname", { required: true })}
                    />
                    </Box>
                    
                </Box>
                    <Text mt="1rem">Email</Text>
                    <Input 
                        marginTop=".5rem"
                        id="email"
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    <Text mt="1rem">Phone</Text>
                    <Input 
                        marginTop=".5rem"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        {...register("phone", { required: true })}
                    />


                <Text fontSize="40px" fontWeight="600" color="#1e2022" mt="10" >Profile</Text>
                <Box border="1px solid rgba(149, 149, 149, 0.5)" width="100%" />
                <Box mb="4" mt="2rem">
                    <Text>Summary</Text>
                    <Textarea
                        marginTop=".5rem"
                        id="profile"
                        type="textarea"
                        placeholder="In a few words, tell us about yourself..."
                        {...register("profile", {required: true })}
                    />
                </Box>
                <Box mb="4">
                    <Text>Resume/CV and Cover Letter</Text>
                    <Tooltip title="Maximum file size 10MB."><HiQuestionMarkCircle /></Tooltip>
                    <Input 
                        id="resume"
                        marginTop=".5rem"
                        type="file"
                        accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        {...register("resume", { required: true })}
                    />
                    
                </Box>


                <Text fontSize="40px" fontWeight="600" color="#1e2022" mt="10" >Details</Text>
                <Box border="1px solid rgba(149, 149, 149, 0.5)" width="100%" />
                <Box mb="4" mt="2rem">
                    <Text>Expected Salary</Text>
                    <Input 
                        marginTop=".5rem"
                        id="salary"
                        type="text"
                        placeholder="Expected Salary"
                        {...register("salary", { required: true })}
                    />

                    <Text mt="1rem">Notice Period</Text>
                    <Input 
                        marginTop=".5rem"
                        id="notice"
                        type="text"
                        placeholder="Notice Period"
                        {...register("notice", { required: true })}
                    />
                    
                </Box>
                
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
    </Box>
  )
}

export default ApplicationForm;