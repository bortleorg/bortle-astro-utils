import React, { useEffect } from "react";
import { useObservatoryDateTimeDisplayContext } from "../hooks/useObservatoryDateTimeContext";
import { ObservatoryDateTime } from "../classes/ObservatoryDateTime";

export interface ObservatoryDateTimeZoneStringProps {
  utcDate: Date | string | number;
  observatoryTimeZone?: string;
}

export const ObservatoryDateTimeZoneString = (
  props: ObservatoryDateTimeZoneStringProps,
) => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay, observatoryTimeZone } =
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

  // Use component prop timezone if provided, otherwise use context timezone, fallback to America/Chicago
  const effectiveTimeZone = props.observatoryTimeZone || observatoryTimeZone || "America/Chicago";
  const observatoryDateTime = new ObservatoryDateTime(props.utcDate, effectiveTimeZone);

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
