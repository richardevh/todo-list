import {
  Box,
  Button,
  Heading,
  Input,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAlert } from "@/providers/AlertProvider";
import Alert from "./Alert";
import type { TaskStatus } from "@/hooks/useStorage";

interface FormNewTaskProps {
  onAddTask?: (task: {
    title: string;
    description: string;
    status: TaskStatus;
  }) => void;
}

const FormNewTask: React.FC<FormNewTaskProps> = ({ onAddTask }) => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [isDone, setIsDone] = useState(false);
  const { isShowing, showAlert, hideAlert } = useAlert();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return showAlert();

    onAddTask({
      title: newTodo.title.trim(),
      description: newTodo.description.trim(),
      status: isDone ? "done" : "todo",
    });

    setNewTodo({ title: "", description: "" });
    setIsDone(false);
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
        <form onSubmit={handleSave}>
          <Heading mb={5}>New task</Heading>
          <Box>
            <label htmlFor="inp-title">Title</label>
            <Input
              id="inp-title"
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="Task title..."
            />
          </Box>
          <Box mt={3}>
            <label htmlFor="inp-description">Description</label>
            <Textarea
              id="inp-description"
              resize="none"
              h={100}
              value={newTodo.description}
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Task details..."
            />
          </Box>
          <Box my={5}>
            <Checkbox.Root
              checked={isDone}
              onCheckedChange={(details) => setIsDone(!!details.checked)}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Done</Checkbox.Label>
            </Checkbox.Root>
          </Box>
          <Box>
            <Button type="submit">Save</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default FormNewTask;
