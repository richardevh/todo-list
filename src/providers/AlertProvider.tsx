import React, { createContext, useContext, useState, useMemo } from "react";
import Alert from "@/components/Alert";

export interface AlertOptions {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  showCancelButton?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface AlertContextType {
  isShowing: boolean;
  showAlert: (options?: AlertOptions | string) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [alertConfig, setAlertConfig] = useState<AlertOptions>({});

  const showAlert = (options?: AlertOptions | string) => {
    if (typeof options === "string") {
      setAlertConfig({ title: "Atención", message: options });
    } else if (options) {
      setAlertConfig(options);
    } else {
      setAlertConfig({ title: "Atención", message: "" });
    }
    setIsShowing(true);
  };

  const hideAlert = () => {
    setIsShowing(false);
  };

  const handleConfirm = () => {
    if (alertConfig.onConfirm) {
      alertConfig.onConfirm();
    }
    hideAlert();
  };

  const handleCancel = () => {
    if (alertConfig.onCancel) {
      alertConfig.onCancel();
    }
    hideAlert();
  };

  const value = useMemo(
    () => ({
      isShowing,
      showAlert,
      hideAlert,
    }),
    [isShowing],
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
      {isShowing && (
        <Alert
          title={alertConfig.title}
          message={alertConfig.message}
          closeAlert={hideAlert}
          onConfirm={alertConfig.onConfirm ? handleConfirm : undefined}
          onCancel={handleCancel}
          confirmText={alertConfig.confirmText}
          cancelText={alertConfig.cancelText}
          showCancelButton={alertConfig.showCancelButton}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert debe utilizarse dentro de un AlertProvider");
  }
  return context;
};
