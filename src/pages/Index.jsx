import { Box, VStack, HStack, Heading, Text, Image, Container, Divider, Link } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Header />

      <Container maxW="container.lg" py={12}>
        {/* Hero */}
        <VStack spacing={6} align="stretch">
          <Image src="https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKb2huJTIwUXVpbmN5JTIwQWRhbXMlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMxMTE1MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" maxH={400} alt="Portrait of John Quincy Adams" />
          <Heading as="h2" size="2xl" textAlign="center">
            The 6th President of the United States
          </Heading>
        </VStack>

        <Divider my={12} />

        {/* Biography */}
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
            Biography
          </Heading>

          <Box>
            <Heading as="h3" size="lg">
              Early Life
            </Heading>
            <Text>John Quincy Adams was born on July 11, 1767 in Braintree, Massachusetts. He was the son of John Adams, the second U.S. President. Adams spent much of his youth in Europe where his father served as a diplomat.</Text>
          </Box>

          <Box>
            <Heading as="h3" size="lg">
              Political Career
            </Heading>
            <Text>Adams served as a U.S. Senator and diplomat before becoming Secretary of State under President James Monroe. As Secretary of State, he negotiated the Adams-Onis Treaty which secured Florida for the United States.</Text>
          </Box>

          <Box>
            <Heading as="h3" size="lg">
              Presidency
            </Heading>
            <Text>Adams served as the 6th U.S. President from 1825 to 1829. His presidency was marked by ambitious modernization projects and increased tensions over the issue of slavery. He lost his 1828 re-election campaign to Andrew Jackson.</Text>
          </Box>

          <Box>
            <Heading as="h3" size="lg">
              Later Years
            </Heading>
            <Text>After leaving office, Adams served in the House of Representatives for 17 years. He became a leading opponent of slavery. Adams suffered a stroke on the House floor and died on February 23, 1848 at the age of 80.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="navy" color="white" py={6} mt={12}>
        <HStack justify="center" spacing={4}>
          <Link href="#">About This Site</Link>
          <Link href="#">Bibliography</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
