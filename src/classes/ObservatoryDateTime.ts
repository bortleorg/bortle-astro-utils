import { getLocalTimeZone } from "@internationalized/date";
import { formatDistanceToNow } from "date-fns";

export class ObservatoryDateTime {
  utcDate: Date;
  homeTimeZone: string;

  constructor(utcDate: Date | string | number, homeTimeZone: string) {
    if (typeof utcDate === "string") {
      this.utcDate = new Date(utcDate);
    } else if (typeof utcDate === "number") {
      this.utcDate = new Date(utcDate);
    } else {
      this.utcDate = utcDate;
    }
    this.homeTimeZone = homeTimeZone;
  }

  // get browser local date and time
  getLocalDateTime(): string {
    const localDate = new Date(this.utcDate);
    return localDate.toLocaleString("en-US", {
      timeZone: getLocalTimeZone(),
      dateStyle: "short",
      timeStyle: "long",
    });
  }

  // get home timezone date and time string
  getHomeDateTime(): string {
    const localDate = new Date(this.utcDate);
    return localDate.toLocaleString("en-US", {
      timeZone: this.homeTimeZone,
      dateStyle: "short",
      timeStyle: "long",
    });
  }

  // get utc date and time string
  getUTCDateTime(): string {
    const localDate = new Date(this.utcDate);
    return localDate.toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "short",
      timeStyle: "long",
    });
  }

  getRelativeTime(): string {
    const localDate = new Date(this.utcDate);
    return formatDistanceToNow(localDate, { addSuffix: true });
  }
}
