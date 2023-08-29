import { useState } from "react";
import { Box, Button, Flex, Text, Input, Select } from "@chakra-ui/react";

import { getProperties } from "../api/properties/index";
import PropertyCard from "@/features/common/modules/PropertyCard";
import DefaultLayout from "@/features/Layouts/DefaultLayout";


const Properties = ({properties}) => {

    const [sortDirection, setSortDirection] = useState('asc');
    const [ filters, setFilters ] = useState('');
    const [ selected, setSelected ] = useState('all');
    
   const toggleSortDirection = () => {
        if (sortDirection === 'asc') {
          setSortDirection('desc');
        } else {
          setSortDirection('asc');
        }
      };
  
      const filteredProperties = properties.filter(property => {
        if (selected === 'all') {
            return true;
        } else {
            return property.propertyType === selected;
        }
      }).filter(property => property.title.toLowerCase().includes(filters.toLowerCase()));

       const sortedProperties = [...filteredProperties].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
      });

  return (
   <DefaultLayout>
        <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", md:"9rem"}}>
            <Box width="100%" margin="0 auto" mt={{ base:"90px", md:"10px" }}>
                <Text
                    fontSize="30px"
                    fontWeight="600"
                    textAlign="center"
                >
                    {!properties.length? "There are no Properties" : "All Properties"}
                </Text>
                <Box display="flex" flexWrap="wrap" justifyContent="center" mt="3" mb="3" gap="4">
                    <Flex display="flex" direction={{ base: "column", md: "row" }} gap={3} width="700px" mb="3">
                        <Button 
                            width="full"
                            backgroundColor= "whatsapp.600"
                            color= "#fcfcfc"
                            sx={{'&:hover': {
                            opacity: 0.9,
                            backgroundColor: 'whatsapp.400'
                            }}}
                            onClick={toggleSortDirection}
                        >
                            {`Sort by Price ${sortDirection === 'asc' ? '↑' : '↓'}`}
                        </Button>
                        <Input 
                            variant="outline"
                            borderColor="whatsapp.300"
                            color="info"
                            placeholder="Search by Property Name"
                            sx={{'&:hover': {
                                opacity: 0.9,
                                borderColor: 'whatsapp.600'
                                }}}
                            value={filters}
                            onChange={(e) => setFilters(e.target.value)}
                        />
                        <Select
                            borderColor="whatsapp.300"
                            sx={{'&:hover': {
                                opacity: 0.9,
                                borderColor: 'whatsapp.500'
                                }}}
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            {['All', 'Lands', 'Houses'].map((type) => (
                            <option key={type} value={type.toLowerCase()}>{type}</option>
                            ))}
                        </Select>
                    </Flex>

                    <Box 
                        display="flex"
                        flexDir={{ base: "column", md:"row"}}
                        gap={{base:"0", md:"2rem"}}
                    >
                        {sortedProperties.map((property) => (
                            <PropertyCard key={property.id} {...property}/>
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
   </DefaultLayout>
  );
};

export default Properties;

export async function getStaticProps() {
    const data = await getProperties(10);
    return {
      props: { properties: data },
      revalidate : 60,
    }  
};