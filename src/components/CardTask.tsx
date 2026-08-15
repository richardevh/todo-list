import { Badge, Heading, ScrollArea, Card, Button } from "@chakra-ui/react";

type TaskStatus = "todo" | "doing" | "done";

type TaskInformation = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

interface CardTaskProps {
  todo: TaskInformation;
  onStatusChange?: (id: string, newStatus: TaskStatus) => void;
}

const CardTask: React.FC<CardTaskProps> = ({ todo, onStatusChange }: CardTaskProps) => {
  return (
    <>
      <Card.Root width="320px">
        <Badge variant="solid" position={"absolute"} right={3} top={3}>
          Solid
        </Badge>
        <Card.Body>
          <Heading as="h3" mb={5}>
          {todo.title}
          </Heading>
          <ScrollArea.Root height="14rem">
            <ScrollArea.Viewport>
              <ScrollArea.Content paddingEnd="3" textStyle="sm">
                <Card.Description>
                  {todo.description}
                </Card.Description>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
        </Card.Body>
        <Card.Footer>
          <Button variant="subtle" colorPalette="red" flex="1">
            Delete
          </Button>
          <Button variant="subtle" colorPalette="blue" flex="1">
            Doing
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default CardTask;
