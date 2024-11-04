import React from "react";
import {
  TempUnits,
  useTemperatureContext,
} from "../hooks/useTemperatureContext";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "../utils/temperature";

export interface TemperatureStringProps {
  temperature: number;
  units: TempUnits;
}

const TemperatureString = (props: TemperatureStringProps) => {
  const { temperatureUnits, setTemperatureUnits } = useTemperatureContext();

  const toggleUnits = () => {
    setTemperatureUnits((prevUnits: TempUnits) => (prevUnits === "F" ? "C" : "F"));
  };

  const displayValue = () => {
    if (temperatureUnits === props.units) {
      return props.temperature;
    } else if (temperatureUnits === "F") {
      if (props.units === "C") {
        return celsiusToFahrenheit(props.temperature);
      } else {
        return kelvinToFahrenheit(props.temperature);
      }
    } else if (temperatureUnits === "C") {
      if (props.units === "F") {
        return fahrenheitToCelsius(props.temperature);
      } else {
        return kelvinToCelsius(props.temperature);
      }
    } else if (temperatureUnits === "K") {
      if (props.units === "F") {
        return fahrenheitToKelvin(props.temperature);
      } else {
        return kelvinToCelsius(props.temperature);
      }
    }
    return props.temperature;
  };

  if (!displayValue()) {
    return <span>N/A</span>;
  }

  return (
    <span onClick={toggleUnits}>
      {displayValue().toFixed(1)}°{temperatureUnits}
    </span>
  );
};

export default TemperatureString;
