import TextContentBox from '@/features/common/modules/TextContentBox/TextContentBox';
import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import React from 'react';


const AdditionalFees = ({ legalDoc, structuralDrawing, surveyPrice, certificationFee, devFee, meFeeDuplex, meFeeBungalow, archFeeDuplex, archFeeBungalow, approvalBungalow, approvalDuplex }) => {
  return (
    <Box mt={3}>
    <TextContentBox title="Additional Fees">
      <SimpleGrid columns={{ base: "1", sm :"2" }}
        fontWeight="bold"
        color="gray.600"
        fontSize="20px"
      >
        <Text>Legal Documentation: {legalDoc}</Text>
        <Text>Structural drawing: {structuralDrawing}</Text>
        <Text>Survey Plan: {surveyPrice}</Text>
        <Text>Stage Certification Fee: {certificationFee}</Text>
        <Text>Infrastructure/Development Fee: {devFee}</Text>
        <Text>M & E Drawing-Duplex: {meFeeDuplex}</Text>
        <Text>M & E Drawing-Bungalow: {meFeeBungalow}</Text>
        <Text>Architectural Drawing-Duplex: {archFeeDuplex}</Text>
        <Text>Architectural Drawing-Bungalow: {archFeeBungalow}</Text>
        <Text>Building Approval-Duplex: {approvalDuplex}</Text>
        <Text>Building Approval-Bungalow: {approvalBungalow}</Text>
      </SimpleGrid> 
    </TextContentBox>
    </Box>
  )
}

export default AdditionalFees