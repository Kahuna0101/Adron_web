import React from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Text, Textarea, Tooltip } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { estates } from "./EstatesConst";

const SubscriptionForm = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <Box width="100%" mt="40px" fontSize="20px" color="#1e2022" p={6} boxShadow="md" borderRadius="lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Text fontSize={{ base:"20px", sm: "40px" }} fontWeight="600" textAlign="center">Welcome! Subscribe to our Estates.</Text>
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
                    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }} mt={2}>
                        <Checkbox colorScheme="green" {...register("newSubscriber")}>
                            I'm a new Subscriber
                        </Checkbox>
                        <Checkbox colorScheme="green" {...register("existingClient")}>
                            I'm an Existing Client
                        </Checkbox>
                    </Stack>

                    <Stack spacing={6} direction={{ base: "column", sm: "row" }} mt={4}>
                        <Box flex={1}>
                            <FormLabel>Estate Interested in</FormLabel>
                            <Select placeholder="Estate" mt={2} {...register("estate")}>
                                {estates.map((item) => (
                                    <option key={item.value} value={item.value}>
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
                        <Checkbox colorScheme="green" {...register("contactMethodCall")}>
                            A call from our agents
                        </Checkbox>
                        <Checkbox colorScheme="green" {...register("contactMethodEmail")}>
                            An E-mail
                        </Checkbox>
                        <Checkbox colorScheme="green" {...register("contactMethodWhatsApp")}>
                            WhatsApp
                        </Checkbox>
                    </Stack>

                    <Input
                        mt={4}
                        id="refName"
                        type="text"
                        placeholder="Name of Referrer Agent"
                        {...register("refName", { required: true })}
                    />
                    <Input
                        mt={4}
                        id="refPhone"
                        type="text"
                        placeholder="Agent's Contact"
                        {...register("refPhone", { required: true })}
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
        </Box>
    )
}

export default SubscriptionForm;
