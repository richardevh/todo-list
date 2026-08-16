import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LuCheck, LuLayoutDashboard, LuListTodo } from "react-icons/lu";

const Navbar = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="100"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      shadow="xs"
    >
      <Container maxW="7xl">
        <Flex h="16" alignItems="center" justifyContent="space-between">
          {/* Brand */}
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <HStack gap="3">
              <Flex
                w="10"
                h="10"
                bg="teal.600"
                color="white"
                borderRadius="lg"
                alignItems="center"
                justifyContent="center"
                shadow="sm"
              >
                <LuCheck size={22} strokeWidth={3} />
              </Flex>
              <Box>
                <Heading size="md" color="gray.800" fontWeight="bold">
                  TaskFlow
                </Heading>
                <Text fontSize="xs" color="gray.500">
                  Todo & Task Manager
                </Text>
              </Box>
            </HStack>
          </NavLink>

          {/* Nav Links */}
          <HStack gap="2">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#0d9488" : "#4b5563",
                backgroundColor: isActive ? "#f0fdfa" : "transparent",
                border: isActive
                  ? "1px solid #ccfbf1"
                  : "1px solid transparent",
                transition: "all 0.2s ease",
              })}
            >
              <LuListTodo size={18} />
              <span>Tareas</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#0d9488" : "#4b5563",
                backgroundColor: isActive ? "#f0fdfa" : "transparent",
                border: isActive
                  ? "1px solid #ccfbf1"
                  : "1px solid transparent",
                transition: "all 0.2s ease",
              })}
            >
              <LuLayoutDashboard size={18} />
              <span>Dashboard</span>
            </NavLink>
          </HStack>

          {/* Status Badge */}
          <Badge
            colorPalette="teal"
            variant="surface"
            size="sm"
            px="2.5"
            py="1"
            borderRadius="full"
          >
            ToDo v1.0.0
          </Badge>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
