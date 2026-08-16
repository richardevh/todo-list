import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";

interface AlertProps {
  title: string;
  message: string;
  closeAlert: () => void;
}

const Alert = ({ title, message, closeAlert }: AlertProps) => {
  return (
    <Box
      h="svh"
      w="svw"
      position={"fixed"}
      bg={"black/70"}
      top={0}
      left={0}
      m={0}
      padding={0}
      /* border={"2px solid green"} */
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={10}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeAlert();
        }
      }}
    >
      <Flex
        bg={"white"}
        color={"gray.800"}
        shadow={"xl"}
        borderWidth={"1px"}
        borderColor={"gray.200"}
        direction={"column"}
        borderRadius={"12px"}
        gap={"10px"}
        px={"30px"}
        py={"20px"}
        maxW={"400px"}
        w={"90%"}
      >
        <Flex justifyContent={"space-between"} w={"100%"} gap={5}>
          <Heading
            fontSize={"1.25rem"}
            borderBottom={"1px solid"}
            borderColor={"gray.200"}
            pb={3}
            w="full"
          >
            {title || "Alert title"}
          </Heading>
          <Button
            h={"25px"}
            w={"20px"}
            bg={"red.500"}
            border={"none"}
            color={"red.200"}
            onClick={closeAlert}
          >
            X
          </Button>
        </Flex>
        <Text>{message || "Alert message"}</Text>
      </Flex>
    </Box>
  );
};

export default Alert;
