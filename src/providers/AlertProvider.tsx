import { createContext, useContext, useState, useMemo } from 'react';

// 1. Crear el contexto original de forma privada (sin exportar)
const AlertContext = createContext({});

// 2. Crear el componente Provider que envolverá la aplicación
export const AlertProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const showAlert = () => setIsShowing(true);

  const hideAlert = () => setIsShowing(false)


  // Optimización: Memoizamos el valor para evitar re-renders innecesarios
  // de los consumidores cuando el componente padre de CartProvider se actualice.
  const value = useMemo(() => ({
    isShowing,
    showAlert,
    hideAlert
  }), [isShowing]); // Solo cambia el objeto si el contenido del carrito cambia

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto de forma segura y sencilla
export const useAlert = () => {
  const context = useContext(AlertContext);
  
  // Si el contexto es undefined, significa que el componente está fuera del Provider
  if (context === undefined) {
    throw new Error('AlertContext debe utilizarse dentro de un CartProvider');
  }
  
  return context;
};
