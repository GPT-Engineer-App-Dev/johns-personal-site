import { Box, HStack, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg="navy" color="white" py={6} mt={12}>
    <HStack justify="center" spacing={4}>
      <Link href="#">About This Site</Link>
      <Link href="#">Bibliography</Link>
      <Link href="#">Contact</Link>
    </HStack>
  </Box>
);

export default Footer;