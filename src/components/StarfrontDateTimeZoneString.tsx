import React, { useEffect } from "react";
import { useStarfrontDateTimeZoneContext } from "../hooks/useDateTimeContext";
import StarfrontDateTime from "../utils/time";

export interface StarfrontDateTimeZoneStringProps {
  utcDate: Date | string | number;
}

const StarfrontDateTimeZoneString = (
  props: StarfrontDateTimeZoneStringProps,
) => {
  const { starfrontDateTimeZone, setStarfrontDateTimeZone } =
    useStarfrontDateTimeZoneContext();
  const [time, setTime] = React.useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleUnits = () => {
    setStarfrontDateTimeZone((prevUnits) => {
      if (prevUnits === "relative") {
        return "starfront";
      } else if (prevUnits === "starfront") {
        return "local";
      } else if (prevUnits === "local") {
        return "utc";
      } else {
        return "relative";
      }
    });
  };

  const starfrontDateTime = new StarfrontDateTime(props.utcDate);

  const displayValue = () => {
    if (starfrontDateTimeZone === "local") {
      return starfrontDateTime.getLocalDateTime();
    } else if (starfrontDateTimeZone === "starfront") {
      return starfrontDateTime.getChicagoDateTime();
    } else if (starfrontDateTimeZone === "relative") {
      return starfrontDateTime.getRelativeTime();
    }
    return starfrontDateTime.getUTCDateTime();
  };

  return <span onClick={toggleUnits}>{`${displayValue()}`}</span>;
};

export default StarfrontDateTimeZoneString;
