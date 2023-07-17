const { Box, Text, Divider } = require("@chakra-ui/react")

const TextContentBox = ({ title, children}) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem" borderRadius="15px" boxShadow="0 0 20px rgba(225, 225, 225, 3.5)">
      <Text 
        fontSize="1.5rem" 
        fontWeight="bold" 
        color="#1e2022" 
        marginBottom="0.5rem"
      >
        {title}
      </Text>
      <Divider marginY="0.7rem"/>
      {children}
    </Box>
  )
}

export default TextContentBox;