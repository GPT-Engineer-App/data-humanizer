import { Container, Text, VStack, Heading, Box, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Bank of Punjab (BOP)</Heading>
        <Text fontSize="lg" textAlign="center">
          Bank of Punjab (BOP) is a prominent financial institution catering specifically to the needs of Small and Medium Enterprises (SMEs). Established with the mission to foster economic growth and development within the SME sector, BOP offers a comprehensive range of financial products and services tailored to meet the unique requirements of small and medium-sized businesses.
        </Text>
        <Box p={4} bg="gray.100" borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={4}>Key Categories:</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Commercial Banking: Providing a wide array of banking services including savings accounts, current accounts, and fixed deposits.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Lending: Offering tailored lending solutions such as business loans, working capital finance, and project financing to SMEs.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Trade Finance: Facilitating international and domestic trade transactions through letters of credit, guarantees, and export-import financing.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Advisory Services: Providing expert financial advice and consultancy to SMEs to optimize financial strategies and operational efficiency.
            </ListItem>
          </List>
        </Box>
        <Text fontSize="lg" textAlign="center">
          This summary highlights Bank of Punjab's role as a dedicated financial institution committed to supporting SMEs through specialized banking services and fostering economic growth across Pakistan.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;