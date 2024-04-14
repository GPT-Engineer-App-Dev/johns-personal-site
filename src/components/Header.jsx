import { Box, Heading, HStack, Link } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="navy" p={4}>
    <HStack justify="space-between" maxW="container.lg" mx="auto">
      <Heading as="h1" color="white">
        John Quincy Adams
      </Heading>
      <HStack as="nav" spacing={4}>
        <Link href="/" color="white">
          Home
        </Link>
        <Link href="/timeline" color="white">
          Timeline
        </Link>
        <Link href="#" color="white">
          Biography
        </Link>
        <Link href="#" color="white">
          Presidency
        </Link>
        <Link href="#" color="white">
          Legacy
        </Link>
      </HStack>
    </HStack>
  </Box>
);

export default Header;