import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useTodos from "@/hooks/useTodos";
import {
  LuListTodo,
  LuClock,
  LuCircleCheck,
  LuTrendingUp,
  LuArrowRight,
  LuSparkles,
} from "react-icons/lu";

const Dashboard = () => {
  const { todos } = useTodos();

  const total = todos.length;
  const pending = todos.filter((t) => t.status === "todo").length;
  const doing = todos.filter((t) => t.status === "doing").length;
  const done = todos.filter((t) => t.status === "done").length;
  const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

  const stats = [
    {
      title: "Total de Tareas",
      value: total,
      icon: LuListTodo,
      color: "teal",
      bgIcon: "teal.100",
      iconColor: "#0d9488",
    },
    {
      title: "En Progreso",
      value: doing,
      icon: LuClock,
      color: "blue",
      bgIcon: "blue.100",
      iconColor: "#2563eb",
    },
    {
      title: "Por Hacer",
      value: pending,
      icon: LuTrendingUp,
      color: "orange",
      bgIcon: "orange.100",
      iconColor: "#ea580c",
    },
    {
      title: "Completadas",
      value: done,
      icon: LuCircleCheck,
      color: "green",
      bgIcon: "green.100",
      iconColor: "#16a34a",
    },
  ];

  return (
    <Container maxW="7xl" py={10}>
      {/* Header */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        gap={4}
        mb={8}
      >
        <Box>
          <Heading size="2xl" color="gray.800" fontWeight="bold">
            Dashboard de Productividad
          </Heading>
          <Text color="gray.500" mt={1}>
            Resumen en tiempo real del progreso de tus tareas
          </Text>
        </Box>

        <Button
          asChild
          bg="teal.600"
          color="white"
          _hover={{ bg: "teal.700" }}
          size="md"
        >
          <Link to="/">
            Ver Tablero de Tareas <LuArrowRight style={{ marginLeft: 6 }} />
          </Link>
        </Button>
      </Flex>

      {/* Metric Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6} mb={8}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Box
              key={stat.title}
              p={6}
              bg="white"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="gray.200"
              shadow="sm"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.500">
                    {stat.title}
                  </Text>
                  <Heading size="3xl" color="gray.800" mt={2}>
                    {stat.value}
                  </Heading>
                </Box>
                <Flex
                  w={12}
                  h={12}
                  bg={stat.bgIcon}
                  borderRadius="xl"
                  alignItems="center"
                  justifyContent="center"
                  color={stat.iconColor}
                >
                  <Icon size={24} />
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>

      {/* Progress & Overview Grid */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6}>
        {/* Progress Card */}
        <Box
          p={6}
          bg="white"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="gray.200"
          shadow="sm"
        >
          <HStack gap={2} mb={4}>
            <LuSparkles color="#0d9488" size={20} />
            <Heading size="md" color="gray.800">
              Tasa de Finalización
            </Heading>
          </HStack>

          <Flex alignItems="baseline" gap={2} my={4}>
            <Heading size="3xl" color="teal.600">
              {completionRate}%
            </Heading>
            <Text color="gray.500" fontSize="sm">
              de las tareas completadas
            </Text>
          </Flex>

          {/* Progress Bar Container */}
          <Box
            w="100%"
            h="3"
            bg="gray.100"
            borderRadius="full"
            overflow="hidden"
            mb={4}
          >
            <Box
              h="100%"
              w={`${completionRate}%`}
              bg="teal.500"
              borderRadius="full"
              transition="width 0.4s ease"
            />
          </Box>

          <Text fontSize="xs" color="gray.500">
            {done} de {total} tareas han sido finalizadas con éxito.
          </Text>
        </Box>

        {/* Task Breakdown */}
        <Box
          p={6}
          bg="white"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="gray.200"
          shadow="sm"
          gridColumn={{ base: "1", lg: "span 2" }}
        >
          <Heading size="md" color="gray.800" mb={4}>
            Lista de Tareas Recientes
          </Heading>

          {todos.length === 0 ? (
            <Text color="gray.500" fontSize="sm">
              No hay tareas registradas por el momento.
            </Text>
          ) : (
            <Flex direction="column" gap={3}>
              {todos.slice(0, 5).map((todo) => (
                <Flex
                  key={todo.id}
                  p={3}
                  bg="gray.50"
                  borderRadius="lg"
                  justifyContent="space-between"
                  alignItems="center"
                  borderWidth="1px"
                  borderColor="gray.100"
                >
                  <Box>
                    <Text fontWeight="medium" color="gray.800" fontSize="sm">
                      {todo.title}
                    </Text>
                    <Text
                      color="gray.500"
                      fontSize="xs"
                      lineClamp={1}
                      maxW="500px"
                    >
                      {todo.description}
                    </Text>
                  </Box>
                  <Badge
                    colorPalette={
                      todo.status === "done"
                        ? "green"
                        : todo.status === "doing"
                          ? "blue"
                          : "gray"
                    }
                    variant="surface"
                    textTransform="capitalize"
                  >
                    {todo.status}
                  </Badge>
                </Flex>
              ))}
            </Flex>
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
