import { usePropertyFormat } from '@/features/common/Hooks/usePropertyFormat';
import TextContentBox from '@/features/common/modules/TextContentBox';
import PropertyMatterPortEmbed from '@/features/Property/components/PropertyMatterPortEmbed';
import PropertyStats from '@/features/Property/components/PropertyStats';
import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider';
import PropertyYoutubeEmbed from '@/features/Property/components/PropertyYoutubeEmbed';
import { Badge, Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { TbMapPin } from 'react-icons/tb';
import { getProperty } from '../api/properties';
import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout';
import AdditionalFees from '@/features/Property/components/AdditionalFees/AdditionalFees';
import Link from 'next/link';


const PropertySingle = ( { property }) => {

  const {        
    address,
    title,
    description,
    propertyType,
    propertyStatus,
    price,
    rooms,
    baths,
    area,
    gateHouse,
    photos,
    panorama,
    youTubeVideo,
    legalDoc,
    structuralDrawing,
    surveyPrice,
    certificationFee,
    devFee,
    meFeeDuplex,
    meFeeBungalow,
    archFeeDuplex,
    archFeeBungalow,
    approvalBungalow,
    approvalDuplex,
  } = usePropertyFormat(property);


  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding={{ base: "1rem", md:"9rem"}}>
        <Box width="100%" margin="0 auto" mt={{ base:"90px", md:"10px" }}>
          <Grid 
            templateColumns="repeat(6, 1fr)" 
            gap="5" 
            width="100%" 
            margin="0 auto"
           >
            <GridItem colSpan="6" display="flex" flexDir={{ base: 'column', md: 'row' }} justifyContent="space-between">
              <Box>
                <Text 
                fontSize="3xl"
                fontWeight="medium"
                color="whatsapp.800"
                textAlign={{ base: "center", md: "left" }}
              >
                {title}
              </Text>
              <Flex 
                fontSize="xl" 
                color="whatsapp.600"
                textAlign="center"
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
                gap="0.5rem"
                marginY={{ base: "1rem", md: "0"}}
              >
                <TbMapPin />
                <Text fontWeight="light">
                  {address}
                </Text>
                <Badge colorScheme="green">{propertyType}</Badge>
                <Badge colorScheme={propertyStatus === "for-sale" ? 'green' : 'red'}>{propertyStatus}</Badge>
                </Flex>
              </Box>
            </GridItem>


            <GridItem colSpan={{ base: 6, md: 3 }}>
              <PropertyThumbnailSlider photos={photos} />
            </GridItem>


            <GridItem colSpan={{ base: 6, md: 3 }}>
              <PropertyStats 
                rooms={rooms}
                baths={baths}
                price={price}
                sqSize={area}
                gateHouse={gateHouse}
                propertyType={propertyType}
              />

            <TextContentBox title="Description">
              <Text 
                fontWeight="light" 
                color="gray.600" 
                fontSize="1rem" 
                noOfLines="4"
              >
                {description}
              </Text>
            </TextContentBox>
          </GridItem>
          </Grid>

            {propertyType === "land" ?
              <AdditionalFees 
              legalDoc={legalDoc}
              structuralDrawing={structuralDrawing}
              surveyPrice={surveyPrice}
              certificationFee={certificationFee}
              devFee={devFee}
              meFeeDuplex={meFeeDuplex}
              meFeeBungalow={meFeeBungalow}
              archFeeDuplex={archFeeDuplex}
              archFeeBungalow={archFeeBungalow}
              approvalBungalow={approvalBungalow}
              approvalDuplex={approvalDuplex}
              />
            :
              ''
            }

        <Grid 
          templateColumns="repeat(6, 1fr)" 
          gap="5" 
          width="100%" 
          margin="0 auto"
        >
          <GridItem colSpan={{base: "6", md: "3"}}>
            <TextContentBox title="Video Walkthrough">
              <PropertyYoutubeEmbed youTubeVideo={youTubeVideo}/>
            </TextContentBox>
          </GridItem>


          <GridItem colSpan={{base: "6", md: "3"}}>
            <TextContentBox title="3D Virtual Walkthrough">
              <PropertyMatterPortEmbed panorama={panorama}/>
            </TextContentBox>
          </GridItem>
        </Grid>

        <Button
          as={Link}
          href='/subscribe'
          width="full"
          colorScheme="whatsapp"
          fontSize="1rem"
          fontWeight="600"
        >
          SUBSCRIBE TODAY
        </Button>
        </Box>
      </Box>
  </DefaultLayout>
  );
};

export default PropertySingle;


export async function getServerSideProps(context) {
  const  { id }  = context.query;

  const data = await getProperty(id);

  return {
      props: {
          property: data
      },
  };
};