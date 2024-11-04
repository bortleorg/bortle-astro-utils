/* useTemperatureContext.tsx */
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type TempUnits = "F" | "C" | "K";

const validUnits = ["F", "C", "K"] as const;

interface ContextProps {
  temperatureUnits: TempUnits;
  setTemperatureUnits: Dispatch<SetStateAction<TempUnits>>;
}

const TempContext = createContext<ContextProps | undefined>(undefined);

interface TempProviderProps {
  children: ReactNode;
}

export const TempProvider: React.FC<TempProviderProps> = ({ children }) => {
  const initialValue = () => {
    const storedValue = localStorage.getItem("temperatureUnits");
    if (storedValue && validUnits.includes(storedValue as TempUnits)) {
      return storedValue as TempUnits;
    } else {
      return "F";
    }
  };
  const [temperatureUnits, setTemperatureUnitsOriginal] =
    useState<TempUnits>(initialValue());

  const setTemperatureUnits: Dispatch<SetStateAction<TempUnits>> = (
    newUnitsOrUpdater,
  ) => {
    const newUnits =
      typeof newUnitsOrUpdater === "function"
        ? (newUnitsOrUpdater as (prevState: TempUnits) => TempUnits)(
            temperatureUnits,
          )
        : newUnitsOrUpdater;

    localStorage.setItem("temperatureUnits", newUnits);
    return setTemperatureUnitsOriginal(newUnits);
  };

  return (
    <TempContext.Provider value={{ temperatureUnits, setTemperatureUnits }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemperatureContext = (): ContextProps => {
  const contextValue = useContext(TempContext);
  if (contextValue === undefined) {
    throw new Error("useTempContext must be used within a TempProvider");
  }
  return contextValue;
};
