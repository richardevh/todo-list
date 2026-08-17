import { Container, Heading, Highlight, SimpleGrid } from "@chakra-ui/react";
import FormNewTask from "../components/FormNewTask";
import CardTask from "../components/CardTask";
import useStorage from "@/hooks/useStorage";
import { AlertProvider } from "../providers/AlertProvider";

const Todos = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useStorage();

  return (
    <AlertProvider>
      <Container maxW="7xl" py={10}>
        <Heading
          fontSize={{ base: "32px", md: "48px" }}
          textAlign="center"
          mb={10}
          lineHeight="shorter"
          color="gray.800"
          fontWeight="bold"
        >
          <Highlight
            query="Chakra-UI"
            styles={{
              px: "2",
              bg: "teal.100",
              color: "teal.800",
              borderRadius: "md",
            }}
          >
            New To-Do List using Chakra-UI
          </Highlight>
        </Heading>

        <SimpleGrid columns={[1, 2, null, 3, 4]} gap="6">
          <FormNewTask onAddTask={addTodo} />

          {todos.map((todo) => (
            <CardTask
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onStatusChange={(id, newStatus) =>
                updateTodo(id, { status: newStatus })
              }
            />
          ))}
        </SimpleGrid>
      </Container>
    </AlertProvider>
  );
};

export default Todos;
