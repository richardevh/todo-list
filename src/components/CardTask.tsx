import { Badge, Heading, ScrollArea, Card, Button } from "@chakra-ui/react";
import React from "react";
import type { TaskStatus, Task as TaskInformation } from "@/hooks/useStorage";
import { useAlert } from "@/providers/AlertProvider";

interface CardTaskProps {
  todo: TaskInformation;
  onStatusChange?: (id: string, newStatus: TaskStatus) => void;
  onDelete?: (id: string) => void;
}

const CardTask: React.FC<CardTaskProps> = ({
  todo,
  onStatusChange,
  onDelete,
}) => {
  const { showAlert } = useAlert();

  const getNextStatus = (current: TaskStatus): TaskStatus => {
    if (current === "todo") return "doing";
    if (current === "doing") return "done";
    return "todo";
  };

  const getStatusButtonText = (current: TaskStatus): string => {
    if (current === "todo") return "Doing";
    if (current === "doing") return "Done";
    return "To-do";
  };

  const getStatusButtonColor = (current: TaskStatus) => {
    if (current === "todo") return "blue";
    if (current === "doing") return "green";
    return "gray";
  };

  const handleDelete = () => {
    showAlert({
      title: "Eliminar Tarea",
      message: `¿Estás seguro de que deseas eliminar la tarea "${todo.title}"?`,
      confirmText: "Eliminar",
      cancelText: "Cancelar",
      onConfirm: () => onDelete?.(todo.id),
    });
  };

  return (
    <Card.Root
      width="320px"
      bg="white"
      borderColor="gray.200"
      borderWidth="1px"
      shadow="sm"
      position="relative"
    >
      <Badge
        variant="solid"
        position="absolute"
        right={3}
        top={3}
        style={{
          backgroundColor:
            todo.status === "doing"
              ? "#2784F5"
              : todo.status === "done"
                ? "#18AD7D"
                : "gray",
        }}
      >
        {todo.status}
      </Badge>
      <Card.Body>
        <Heading as="h3" mb={5} borderBottom={"2px solid #4d4d4dff"} pb={2}>
          {todo.title}
        </Heading>
        <ScrollArea.Root maxH="200px">
          <ScrollArea.Viewport>
            <ScrollArea.Content paddingEnd="3" textStyle="sm">
              <Card.Description
                overflowWrap="break-word"
                wordBreak="break-word"
              >
                {todo.description}
              </Card.Description>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar />
        </ScrollArea.Root>
      </Card.Body>
      <Card.Footer gap={2}>
        <Button
          variant="subtle"
          colorPalette="red"
          flex="1"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="subtle"
          colorPalette={getStatusButtonColor(todo.status)}
          flex="1"
          onClick={() => onStatusChange?.(todo.id, getNextStatus(todo.status))}
        >
          {getStatusButtonText(todo.status)}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CardTask;
