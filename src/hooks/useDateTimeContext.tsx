import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type ObservatoryDateTimeZone = "local" | "observatory" | "relative" | "utc";

const validUnits = ["local", "observatory", "relative", "utc"] as const;

interface ContextProps {
  observatoryDateTimeZone: ObservatoryDateTimeZone;
  setObservatoryDateTimeZone: Dispatch<SetStateAction<ObservatoryDateTimeZone>>;
}

const ObservatoryDateTimeZoneContext = createContext<ContextProps | undefined>(
  undefined,
);

interface ObservatoryDateTimeZoneProviderProps {
  children: ReactNode;
}

export const ObservatoryDateTimeZoneProvider: React.FC<
  ObservatoryDateTimeZoneProviderProps
> = ({ children }) => {
  const initialValue = () => {
    const storedValue = localStorage.getItem("observatoryDateTimeZone");
    if (
      storedValue &&
      validUnits.includes(storedValue as ObservatoryDateTimeZone)
    ) {
      return storedValue as ObservatoryDateTimeZone;
    } else {
      return "relative";
    }
  };
  const [observatoryDateTimeZone, setObservatoryDateTimeZoneOriginal] =
    useState<ObservatoryDateTimeZone>(initialValue());

  const setObservatoryDateTimeZone: Dispatch<
    SetStateAction<ObservatoryDateTimeZone>
  > = (newUnitsOrUpdater) => {
    const newUnits =
      typeof newUnitsOrUpdater === "function"
        ? (
            newUnitsOrUpdater as (
              prevState: ObservatoryDateTimeZone,
            ) => ObservatoryDateTimeZone
          )(observatoryDateTimeZone)
        : newUnitsOrUpdater;

    localStorage.setItem("observatoryDateTimeZone", newUnits);
    return setObservatoryDateTimeZoneOriginal(newUnits);
  };

  return (
    <ObservatoryDateTimeZoneContext.Provider
      value={{ observatoryDateTimeZone, setObservatoryDateTimeZone }}
    >
      {children}
    </ObservatoryDateTimeZoneContext.Provider>
  );
};

export const useObservatoryDateTimeZoneContext = (): ContextProps => {
  const contextValue = useContext(ObservatoryDateTimeZoneContext);
  if (contextValue === undefined) {
    throw new Error(
      "useObservatoryDateTimeZoneContext must be used within a ObservatoryDateTimeZoneProvider",
    );
  }
  return contextValue;
};
