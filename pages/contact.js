import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ContactForm from "@/features/common/modules/ContactForm";
import { contacts, locations } from "@/features/common/modules/ContactUs/ContactUsConsts";
import TextContentBox from "@/features/common/modules/TextContentBox";
import DefaultLayout from "@/features/Layouts/DefaultLayout";


const ContactPage = () => {
  return (
    <DefaultLayout>
         <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"9rem"}} >
            <Grid 
              templateColumns="repeat(6, 1fr)" 
              gap="5" 
              margin="auto"
              width="100%"
              mt={{ base: "90px", sm:"40px" }}
            >
                <GridItem colSpan={{ base: 6, sm: 3 }} flex={1}>
                    <Box width="100%">
                        <Text fontWeight="bold" color="#1e2022" fontSize="4xl" mb="1rem">Get In Touch</Text>
                        <Text fontWeight="medium" color="gray.600" fontSize="1rem" mb="1rem"> We'd love to talk about how we can help you.</Text>
                        <Box mb="6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.392745725764!2d3.363629843431027!3d6.632153803660149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9395bf1b04b3%3A0xed6caf2f76974982!2sAdron%20Homes%20%26%20Properties%20Limited!5e0!3m2!1sen!2sng!4v1681743005362!5m2!1sen!2sng" width="100%" height="300" allowFullScreen loading="lazy"></iframe>
                        </Box> 
                        <Flex display="flex" flexFlow="wrap" justifyContent="space-between" gap="4">
                         {contacts.map((item)=> (
                            <Contact key={item.id} {...item}/>
                          ))}   
                        </Flex>
                    </Box>  
                </GridItem>
                <GridItem colSpan={{ base: 6, sm: 3 }} flex={1}>
                    <TextContentBox title="Contact Us">
                        <ContactForm />
                    </TextContentBox>
                    <Text fontWeight="medium" color="gray.500" textAlign="center">
                       We'll get back to you in 1-2 business days.  
                    </Text>
                </GridItem>
            </Grid>

            <Box margin="auto" mt="120px">
                <Text fontWeight="medium" color="gray.600" fontSize="xl" textAlign="center">VISIT US AT OUR</Text>
                <Text fontWeight="bold" color="#1e2022" fontSize="4xl" textAlign="center">Office Locations</Text>
                <Grid
                 templateColumns={{ base: "", sm: "repeat(3, 1fr)" }} 
                 gap="5" 
                 margin="auto"
                 width="100%"
                 mt="50px"
                >
                {locations.map((location) => (
                    <ContactLocation key={location.id} {...location} />
                ))}
                </Grid> 
            </Box>            
        </Box>
    </DefaultLayout>
  );
};

export default ContactPage;


const Contact = ({title, paragraph}) => {
    return (
        <Box as={motion.div} initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
           <Text fontSize="xl" fontWeight="600" color="#1e2022">
            {title}
            </Text>
            <Text fontSize="medium" color="gray.600">
            {paragraph}   
            </Text>
        </Box>
    );
};
const ContactLocation = ({title, address, phone, email, link}) => {
    const [ref, inView] = useInView({
       
        threshold: 0.2,
      });

    return (
        <Box
            as={motion.div}
            ref={ref}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            flexWrap="wrap"
            flexDirection="column"
            gap="1.5"
            fontSize="lg"
            color="gray.500"
        >
            <Text fontSize="3xl" fontWeight="600" color="#1e2022">
                {title}
            </Text>
            <Text>{address}</Text>
            <Text>{phone}</Text>
            <Link href={link} _hover={{ color: "#1e2022" }}>
                {email}
            </Link>
        </Box>
    );
};