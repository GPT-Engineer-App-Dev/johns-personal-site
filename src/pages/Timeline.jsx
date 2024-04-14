import { Box, VStack, HStack, Heading, Text, Container, Divider } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TimelineItem = ({ year, children }) => (
  <HStack align="start" spacing={4} my={8}>
    <Box bg="navy" color="white" p={2} borderRadius="md" fontSize="lg" fontWeight="bold" minW={16} textAlign="center">
      {year}
    </Box>
    <VStack align="start" spacing={1}>
      {children}
    </VStack>
  </HStack>
);

const Timeline = () => {
  return (
    <Box>
      <Header />
      
      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="2xl" mb={8}>
          Timeline of John Quincy Adams' Life
        </Heading>

        <VStack align="start" spacing={8}>
          <TimelineItem year={1767}>
            <Text>Born in Braintree, Massachusetts</Text>
          </TimelineItem>

          <TimelineItem year={1787}>
            <Text>Graduates from Harvard College</Text>
          </TimelineItem>

          <TimelineItem year={1794}>
            <Text>Appointed U.S. minister to the Netherlands</Text>
          </TimelineItem>

          <TimelineItem year={1797}>
            <Text>Marries Louisa Catherine Johnson</Text>
          </TimelineItem>

          <TimelineItem year={1803}>
            <Text>Begins serving as U.S. Senator from Massachusetts until 1808</Text>
          </TimelineItem>

          <TimelineItem year={1824}>
            <Text>Elected as 6th U.S. President</Text>
          </TimelineItem>

          <TimelineItem year={1848}>
            <Text>Dies in Washington, D.C.</Text>
          </TimelineItem>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
};

export default Timeline;