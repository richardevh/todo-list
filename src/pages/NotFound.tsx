import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuFileQuestion, LuHouse } from "react-icons/lu";

const NotFound = () => {
  return (
    <Container maxW="3xl" py={20}>
      <VStack gap={6} textAlign="center">
        <Box
          p={6}
          bg="teal.50"
          borderRadius="full"
          color="teal.600"
          borderWidth="1px"
          borderColor="teal.100"
        >
          <LuFileQuestion size={56} />
        </Box>

        <Heading size="4xl" color="gray.800" fontWeight="extrabold">
          404
        </Heading>

        <Heading size="xl" color="gray.700">
          Página No Encontrada
        </Heading>

        <Text color="gray.500" maxW="md">
          Lo sentimos, la ruta a la que intentas acceder no existe o fue
          trasladada. Puedes volver a tu lista de tareas cuando desees.
        </Text>

        <Button
          asChild
          bg="teal.600"
          color="white"
          _hover={{ bg: "teal.700" }}
          size="lg"
          mt={2}
        >
          <Link to="/">
            <LuHouse style={{ marginRight: 8 }} /> Volver al Inicio
          </Link>
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;
