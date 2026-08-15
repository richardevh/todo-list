import {
  Box,
  Button,
  Heading,
  Input,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";

const FormNewTask = () => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      //width={"fit-content"}
      borderColor="border.disabled"
      background="#181818"
      rounded={8}
    >
      <form>
        <Heading mb={5}>New task</Heading>
        <Box>
          <label htmlFor="inp-title">Title</label>
          <Input id="inp-title" />
        </Box>
        <Box mt={3}>
          <label htmlFor="inp-description">Description</label>
          <Textarea id="inp-description" resize="none" h={100} />
        </Box>
        <Box my={5}>
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Done</Checkbox.Label>
          </Checkbox.Root>
        </Box>
        <Box>
          <Button>Save</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewTask;
