import { Container, Heading, Highlight, SimpleGrid } from "@chakra-ui/react";
import FormNewTask from "./components/FormNewTask";
import CardTask from "./components/CardTask";
import useTodos from "@/hooks/useTodos";

const App = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();

  return (
    <Container py={5}>
      <Heading fontSize="50px" textAlign="center" mb={20} lineHeight="unset">
        <Highlight
          query="Chakra-UI"
          styles={{ px: "2", bg: "teal.muted", borderRadius: 5 }}
        >
          New To-Do List usin Chakra-UI
        </Highlight>
      </Heading>

      <SimpleGrid columns={[1, 2, null, 3, 4]} gap="6">
        <FormNewTask />

        {todos.map((todo) => (
          <CardTask key={todo.id} todo={todo} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default App;
