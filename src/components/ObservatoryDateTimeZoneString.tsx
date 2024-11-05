import React, { useEffect } from "react";
import { useObservatoryDateTimeDisplayContext } from "../hooks/useObservatoryDateTimeContext";
import ObservatoryDateTime from "../classes/ObservatoryDateTime";

export interface ObservatoryDateTimeZoneStringProps {
  utcDate: Date | string | number;
}

const ObservatoryDateTimeZoneString = (
  props: ObservatoryDateTimeZoneStringProps,
) => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay } =
    useObservatoryDateTimeDisplayContext();
  const [time, setTime] = React.useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleUnits = () => {
    setObservatoryDateTimeDisplay((prevUnits: any) => {
      if (prevUnits === "relative") {
        return "observatory";
      } else if (prevUnits === "observatory") {
        return "local";
      } else if (prevUnits === "local") {
        return "utc";
      } else {
        return "relative";
      }
    });
  };

  const observatoryDateTime = new ObservatoryDateTime(props.utcDate, "America/Chicago");

  const displayValue = () => {
    if (observatoryDateTimeDisplay === "local") {
      return observatoryDateTime.getLocalDateTime();
    } else if (observatoryDateTimeDisplay === "observatory") {
      return observatoryDateTime.getHomeDateTime();
    } else if (observatoryDateTimeDisplay === "relative") {
      return observatoryDateTime.getRelativeTime();
    }
    return observatoryDateTime.getUTCDateTime();
  };

  return <span onClick={toggleUnits}>{`${displayValue()}`}</span>;
};

export default ObservatoryDateTimeZoneString;
