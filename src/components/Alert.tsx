import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";

export interface AlertProps {
  title?: string;
  message?: string;
  closeAlert: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCancelButton?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  title = "Alerta",
  message = "",
  closeAlert,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  showCancelButton = false,
}) => {
  const isDecision = Boolean(onConfirm || showCancelButton);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      closeAlert();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      closeAlert();
    }
  };

  return (
    <Box
      h="100vh"
      w="100vw"
      position="fixed"
      bg="black/60"
      top={0}
      left={0}
      m={0}
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCancel();
        }
      }}
    >
      <Flex
        bg="white"
        color="gray.800"
        shadow="2xl"
        borderWidth="1px"
        borderColor="gray.200"
        direction="column"
        borderRadius="12px"
        gap={4}
        px={6}
        py={5}
        maxW="400px"
        w="90%"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          gap={4}
        >
          <Heading
            fontSize="lg"
            borderBottom="1px solid"
            borderColor="gray.200"
            pb={2}
            w="full"
          >
            {title}
          </Heading>
          <Button
            size="xs"
            variant="subtle"
            colorPalette="gray"
            onClick={handleCancel}
            aria-label="Cerrar"
          >
            ✕
          </Button>
        </Flex>

        <Text color="gray.600" fontSize="sm">
          {message}
        </Text>

        <Flex justifyContent="flex-end" gap={3} mt={2}>
          {isDecision ? (
            <>
              <Button
                size="sm"
                variant="subtle"
                colorPalette="gray"
                onClick={handleCancel}
              >
                {cancelText}
              </Button>
              <Button size="sm" colorPalette="red" onClick={handleConfirm}>
                {confirmText}
              </Button>
            </>
          ) : (
            <Button size="sm" colorPalette="teal" onClick={closeAlert}>
              Aceptar
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Alert;
