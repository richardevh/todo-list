import { Box, Container, Text, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
      <Navbar />

      <Box as="main" flex="1">
        <Outlet />
      </Box>

      <Box
        as="footer"
        py="6"
        bg="white"
        borderTopWidth="1px"
        borderColor="gray.200"
        mt="auto"
      >
        <Container maxW="7xl">
          <Text fontSize="sm" color="gray.500">
            TaskFlow • 2026 | Proyecto para portfolio | Construido con{" "}
            <Link
              href="https://chakra-ui.com"
              target="_blank"
              color="teal.600"
              fontWeight="semibold"
              rel="noopener noreferrer"
            >
              Chakra UI
            </Link>{" "}
            • Por:{" "}
            <Link
              href="https://richard.devhubs.online"
              target="_blank"
              color="teal.600"
              fontWeight="semibold"
              rel="noopener noreferrer"
            >
              Richardson Mercedes
            </Link>
            .
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
