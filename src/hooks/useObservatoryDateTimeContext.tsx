import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type ObservatoryDateTimeDisplay = "local" | "observatory" | "relative" | "utc";

const validUnits = ["local", "observatory", "relative", "utc"] as const;

interface ContextProps {
  observatoryDateTimeDisplay: ObservatoryDateTimeDisplay;
  setObservatoryDateTimeDisplay: Dispatch<SetStateAction<ObservatoryDateTimeDisplay>>;
  observatoryTimeZone: string;
  setObservatoryTimeZone: Dispatch<SetStateAction<string>>;
}

const ObservatoryDateTimeDisplayContext = createContext<ContextProps | undefined>(
  undefined,
);

interface ObservatoryDateTimeDisplayProviderProps {
  children: ReactNode;
  initialTimeZone?: string;
}

export const ObservatoryDateTimeDisplayProvider: React.FC<
  ObservatoryDateTimeDisplayProviderProps
> = ({ children, initialTimeZone }) => {
  const initialDisplayValue = () => {
    const storedValue = localStorage.getItem("observatoryDateTimeDisplay");
    if (
      storedValue &&
      validUnits.includes(storedValue as ObservatoryDateTimeDisplay)
    ) {
      return storedValue as ObservatoryDateTimeDisplay;
    } else {
      return "relative";
    }
  };

  const initialTimeZoneValue = () => {
    const storedValue = localStorage.getItem("observatoryTimeZone");
    return storedValue || initialTimeZone || "UTC";
  };

  const [observatoryDateTimeDisplay, setObservatoryDateTimeDisplayOriginal] =
    useState<ObservatoryDateTimeDisplay>(initialDisplayValue());

  const [observatoryTimeZone, setObservatoryTimeZoneOriginal] =
    useState<string>(initialTimeZoneValue());

  const setObservatoryDateTimeDisplay: Dispatch<
    SetStateAction<ObservatoryDateTimeDisplay>
  > = (newUnitsOrUpdater) => {
    const newUnits =
      typeof newUnitsOrUpdater === "function"
        ? (
            newUnitsOrUpdater as (
              prevState: ObservatoryDateTimeDisplay,
            ) => ObservatoryDateTimeDisplay
          )(observatoryDateTimeDisplay)
        : newUnitsOrUpdater;

    localStorage.setItem("observatoryDateTimeDisplay", newUnits);
    return setObservatoryDateTimeDisplayOriginal(newUnits);
  };

  const setObservatoryTimeZone: Dispatch<SetStateAction<string>> = (newTimeZoneOrUpdater) => {
    const newTimeZone =
      typeof newTimeZoneOrUpdater === "function"
        ? (
            newTimeZoneOrUpdater as (
              prevState: string,
            ) => string
          )(observatoryTimeZone)
        : newTimeZoneOrUpdater;

    localStorage.setItem("observatoryTimeZone", newTimeZone);
    return setObservatoryTimeZoneOriginal(newTimeZone);
  };

  return (
    <ObservatoryDateTimeDisplayContext.Provider
      value={{ observatoryDateTimeDisplay, setObservatoryDateTimeDisplay, observatoryTimeZone, setObservatoryTimeZone }}
    >
      {children}
    </ObservatoryDateTimeDisplayContext.Provider>
  );
};

export const useObservatoryDateTimeDisplayContext = (): ContextProps => {
  const contextValue = useContext(ObservatoryDateTimeDisplayContext);
  if (contextValue === undefined) {
    throw new Error(
      "useObservatoryDateTimeDisplayContext must be used within a ObservatoryDateTimeDisplayProvider",
    );
  }
  return contextValue;
};
