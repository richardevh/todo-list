import {
  Box,
  Button,
  Heading,
  Input,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAlert } from "@/providers/AlertProvider";
import Alert from "./Alert";

const FormNewTask = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const { isShowing, showAlert, hideAlert } = useAlert();

  const generateId = () => {
    const d = new Date();
    return `${d.getHours()}${d.getMinutes()}${d.getSeconds()}-${d.getDate()}${d.getMonth()}-${d.getFullYear()}-${d.getMilliseconds()}`;
  };

  const handleSave = (todo) => {
    if (!newTodo.title) return showAlert();

    todo.id = generateId();
    console.log("todo =", todo);
  };

  return (
    <>
      {isShowing && (
        <Alert
          title="Error"
          message="You must enter a title to save the task!"
          closeAlert={hideAlert}
        />
      )}

      <Box
        p="5"
        borderWidth="1px"
        borderColor="gray.200"
        bg="white"
        shadow="sm"
        rounded="lg"
      >
        <form>
          <Heading mb={5}>New task</Heading>
          <Box>
            <label htmlFor="inp-title">Title</label>
            <Input
              id="inp-title"
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </Box>
          <Box mt={3}>
            <label htmlFor="inp-description">Description</label>
            <Textarea
              id="inp-description"
              resize="none"
              h={100}
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </Box>
          <Box my={5}>
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Done</Checkbox.Label>
            </Checkbox.Root>
          </Box>
          <Box>
            <Button onClick={() => handleSave(newTodo)}>Save</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default FormNewTask;
