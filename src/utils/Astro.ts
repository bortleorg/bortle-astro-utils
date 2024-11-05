import {
  AstroTime,
  Horizon,
  Observer,
  SearchAltitude,
  SearchRiseSet,
  Body,
  Illumination,
} from "astronomy-engine";
import Decimal from "decimal.js";
import { ObservatoryDateTime } from "../classes/ObservatoryDateTime";

export interface SolarTimes {
  sunset: ObservatoryDateTime | null;
  nauticalDusk: ObservatoryDateTime | null;
  astronomicalDusk: ObservatoryDateTime | null;
  astronomicalDawn: ObservatoryDateTime | null;
  nauticalDawn: ObservatoryDateTime | null;
  sunrise: ObservatoryDateTime | null;
}

export interface IlluminationInfo {
  phaseAngle: number;
  fraction: number;
  magnitude: number;
  phaseName: string;
}

export interface LunarInfo {
  moonrise: ObservatoryDateTime | null;
  moonset: ObservatoryDateTime | null;
  illuminationInfo: IlluminationInfo;
}

export class AstroPoint {
  constructor(
    public ra: number,
    public dec: number,
  ) {
    this.ra = ra;
    this.dec = dec;
  }
}

export class AstroCalc {
  static hoursToDegrees(hours: number) {
    return hours * 15.0;
  }

  static arcminToDegree(arcmin: number) {
    return arcmin / 60.0;
  }

  static arcsecToDegree(arcsec: number) {
    return arcsec / 60.0 / 60.0;
  }

  static degreesToHours(degree: number) {
    return degree / 15.0;
  }

  static degreeToArcmin(degree: number) {
    return degree * 60.0;
  }

  static degreeToArcsec(degree: number) {
    return degree * 60.0 * 60.0;
  }

  static degreesToHMS(degree: number) {
    return this.degreesToDMS(this.degreesToHours(degree));
  }

  static degreesToDMS(value: number) {
    var negative = false;
    if (value < 0) {
      negative = true;
      value = -value;
    }

    var degree = Math.floor(value);
    var arcmin = Math.floor(this.degreeToArcmin(value - degree));
    var arcminDeg = this.arcminToDegree(arcmin);

    var arcsec = Math.round(this.degreeToArcsec(value - degree - arcminDeg));

    if (arcsec == 60) {
      /* If arcsec got rounded to 60 add to arcmin instead */
      arcsec = 0;
      arcmin += 1;

      if (arcmin == 60) {
        /* If arcmin got rounded to 60 add to degree instead */
        arcmin = 0;
        degree += 1;
      }
    }

    return (negative ? "-" : "") + degree + "° " + arcmin + "' " + arcsec + '"';
  }

  static getLunarInfo(
    latitude: number,
    longitude: number,
    altitude: number,
  ): LunarInfo {
    const observer = new Observer(latitude, longitude, altitude);
    const now = new Date();

    // Calculate moonrise
    const moonriseEvent = SearchRiseSet(
      Body.Moon,
      observer,
      +1, // +1 for rising
      now,
      2.0, // Search up to 2 days ahead
    );

    // Calculate moonset
    const moonsetEvent = SearchRiseSet(
      Body.Moon,
      observer,
      -1, // -1 for setting
      now,
      2.0,
    );

    // Get moon illumination information at current time
    const illumination = Illumination(Body.Moon, now);

    // Determine the moon's phase angle and fraction illuminated
    const phaseAngle = Math.round(illumination.phase_angle); // In degrees
    const fraction = illumination.phase_fraction; // Between 0 and 1
    const magnitude = illumination.mag; // Apparent visual magnitude

    // Map phase angle to phase name
    const phaseName = this.getMoonPhaseName(phaseAngle);

    return {
      moonrise: moonriseEvent
        ? new ObservatoryDateTime(moonriseEvent.date)
        : null,
      moonset: moonsetEvent ? new ObservatoryDateTime(moonsetEvent.date) : null,
      illuminationInfo: {
        phaseAngle,
        fraction,
        magnitude,
        phaseName,
      },
    };
  }

  static getMoonPhaseName(phaseAngle: number): string {
    if (phaseAngle >= 170 && phaseAngle <= 180) {
      return "New Moon";
    } else if (phaseAngle >= 135 && phaseAngle < 170) {
      return "Waning Crescent";
    } else if (phaseAngle >= 100 && phaseAngle < 135) {
      return "Last Quarter";
    } else if (phaseAngle >= 90 && phaseAngle < 100) {
      return "Waning Gibbous";
    } else if (phaseAngle >= 0 && phaseAngle < 90) {
      return "Full Moon";
    } else {
      return "Unknown Phase";
    }
  }

  // function that takes in a lat/lon/alt and returns an obj with:
  // sunset: ObservatoryDateTime;
  // nauticalDusk: ObservatoryDateTime;
  // astronomicalDusk: ObservatoryDateTime;
  // astronomicalDawn: ObservatoryDateTime;
  // nauticalDawn: ObservatoryDateTime;
  // sunrise: ObservatoryDateTime;
  static getSolarTimes(
    latitude: number,
    longitude: number,
    altitude: number,
  ): SolarTimes {
    const observer = new Observer(latitude, longitude, altitude);

    const now = new Date();

    // Calculate sunrise
    const sunriseEvent = SearchRiseSet(
      Body.Sun,
      observer,
      +1, // +1 for rising
      now,
      2.0, // Limit search to 2 days to ensure we find the next event
    );

    // Calculate sunset
    const sunsetEvent = SearchRiseSet(
      Body.Sun,
      observer,
      -1, // -1 for setting
      now,
      2.0,
    );

    // Calculate nautical dawn (-12 degrees, ascending)
    const nauticalDawnEvent = SearchAltitude(
      Body.Sun,
      observer,
      +1,
      now,
      2.0,
      -12.0,
    );

    // Calculate astronomical dawn (-18 degrees, ascending)
    const astronomicalDawnEvent = SearchAltitude(
      Body.Sun,
      observer,
      +1,
      now,
      2.0,
      -18.0,
    );

    // Calculate nautical dusk (-12 degrees, descending)
    const nauticalDuskEvent = SearchAltitude(
      Body.Sun,
      observer,
      -1,
      now,
      2.0,
      -12.0,
    );

    // Calculate astronomical dusk (-18 degrees, descending)
    const astronomicalDuskEvent = SearchAltitude(
      Body.Sun,
      observer,
      -1,
      now,
      2.0,
      -18.0,
    );

    // Extract dates from events
    const sunriseDate = sunriseEvent ? sunriseEvent.date : null;
    const sunsetDate = sunsetEvent ? sunsetEvent.date : null;
    const nauticalDawnDate = nauticalDawnEvent ? nauticalDawnEvent.date : null;
    const astronomicalDawnDate = astronomicalDawnEvent
      ? astronomicalDawnEvent.date
      : null;
    const nauticalDuskDate = nauticalDuskEvent ? nauticalDuskEvent.date : null;
    const astronomicalDuskDate = astronomicalDuskEvent
      ? astronomicalDuskEvent.date
      : null;

    return {
      sunrise: sunriseDate ? new ObservatoryDateTime(sunriseDate) : null,
      sunset: sunsetDate ? new ObservatoryDateTime(sunsetDate) : null,
      nauticalDawn: nauticalDawnDate
        ? new ObservatoryDateTime(nauticalDawnDate)
        : null,
      astronomicalDawn: astronomicalDawnDate
        ? new ObservatoryDateTime(astronomicalDawnDate)
        : null,
      nauticalDusk: nauticalDuskDate
        ? new ObservatoryDateTime(nauticalDuskDate)
        : null,
      astronomicalDusk: astronomicalDuskDate
        ? new ObservatoryDateTime(astronomicalDuskDate)
        : null,
    };
  }

  static calculateAltitudes(
    target: any,
    end_astro_twilight_night: AstroTime,
    start_astro_twilight_morning: AstroTime,
    start_date: number,
    observer: any,
    minAltitude: number,
  ) {
    var start: Date = new Date(start_date);
    var altitudes: number[] = [];
    var times: number[] = [];
    var maxAltitudeIndex = 0;
    var maxDarkAltitudeIndex: number | null = null;
    var timeAboveMin = 0;
    var transitDirection;
    for (var n = 0; n < 240 * 1; n++) {
      var horizontalCoordinates = Horizon(
        start,
        observer,
        this.degreesToHours(target.ra),
        target.dec,
        "normal",
      );
      altitudes.push(Math.round(horizontalCoordinates.altitude * 100) / 100);
      times.push(start.getTime());
      if (
        Math.round(horizontalCoordinates.altitude * 100) / 100 >
        altitudes[maxAltitudeIndex]
      ) {
        maxAltitudeIndex = n;
        transitDirection = horizontalCoordinates.azimuth;
      }
      if (
        end_astro_twilight_night != undefined &&
        end_astro_twilight_night.date != undefined &&
        start_astro_twilight_morning != undefined &&
        start_astro_twilight_morning.date != undefined &&
        start.getTime() > end_astro_twilight_night.date.getTime() &&
        start.getTime() < start_astro_twilight_morning.date.getTime() &&
        (maxDarkAltitudeIndex === null ||
          Math.round(horizontalCoordinates.altitude * 100) / 100 >
            altitudes[maxDarkAltitudeIndex])
      ) {
        maxDarkAltitudeIndex = n;
      }
      if (
        end_astro_twilight_night != undefined &&
        end_astro_twilight_night.date != undefined &&
        start_astro_twilight_morning != undefined &&
        start_astro_twilight_morning.date != undefined &&
        start.getTime() > end_astro_twilight_night.date.getTime() &&
        start.getTime() < start_astro_twilight_morning.date.getTime() &&
        horizontalCoordinates.altitude >= minAltitude
      ) {
        timeAboveMin += 6;
      } else {
        //console.log( start, end_astro_twilight_night?.date,  start_astro_twilight_morning?.date, horizontalCoordinates.altitude, minAltitude);
      }
      start.setMinutes(start.getMinutes() + 6);
    }
    return {
      values: altitudes,
      times,
      timeAboveMin,
      maxAltitudeIndex,
      transitDirection,
      maxDarkAltitudeIndex,
    };
  }

  static equivalentExposureTime(
    seconds: number,
    focalRatio1: number,
    focalRatio2: number,
  ) {
    // Calculate the light gathering power, proportional to the square of the aperture diameter
    const lightGatheringPower1 = new Decimal(1).dividedBy(
      new Decimal(focalRatio2).pow(2),
    );
    const lightGatheringPower2 = new Decimal(1).dividedBy(
      new Decimal(focalRatio1).pow(2),
    );

    // Calculate the ratio of light gathering power
    const lightRatio = lightGatheringPower2.dividedBy(lightGatheringPower1);

    // Calculate the equivalent exposure time at another focal ratio
    const equivalentSeconds = new Decimal(seconds).times(lightRatio);

    return equivalentSeconds.toNumber();
  }

  static equivalentExposureTimeExperimental(
    seconds: number,
    focalRatio1: number,
    focalRatio2: number,
    pixelSize1: number,
    pixelSize2: number,
  ) {
    // Calculate the light gathering power, proportional to the square of the aperture diameter
    const lightGatheringPower1 = new Decimal(1).dividedBy(
      new Decimal(focalRatio2).pow(2),
    );
    const lightGatheringPower2 = new Decimal(1).dividedBy(
      new Decimal(focalRatio1).pow(2),
    );

    // Calculate the ratio of light gathering power
    const lightRatio = lightGatheringPower2.dividedBy(lightGatheringPower1);

    // Calculate the ratio of pixel sizes
    const pixelRatio = new Decimal(pixelSize2).dividedBy(pixelSize1);

    // Calculate the overall ratio considering both light gathering power and pixel size
    const overallRatio = lightRatio.times(pixelRatio);

    // Calculate the equivalent exposure time at another focal ratio and pixel size
    const equivalentSeconds = new Decimal(seconds).times(overallRatio);

    return equivalentSeconds.toNumber();
  }

  static equivalentExposureTimeExperimental5(
    seconds: number,
    pixelSize1: number,
    pixelsX1: number,
    pixelsY1: number,
    focalRatio1: number,
    pixelSize2: number,
    pixelsX2: number,
    pixelsY2: number,
    focalRatio2: number,
  ) {
    // Calculate the sensor area in square micrometers
    const area1 = new Decimal(pixelSize1)
      .times(pixelsX1)
      .times(pixelSize1)
      .times(pixelsY1);
    const area2 = new Decimal(pixelSize2)
      .times(pixelsX2)
      .times(pixelSize2)
      .times(pixelsY2);

    // Calculate the ratio of sensor areas
    const areaRatio = area2.dividedBy(area1);

    // Calculate the light gathering power, proportional to the square of the aperture diameter
    const lightGatheringPower1 = new Decimal(1).dividedBy(
      new Decimal(focalRatio1).pow(2),
    );
    const lightGatheringPower2 = new Decimal(1).dividedBy(
      new Decimal(focalRatio2).pow(2),
    );

    // Calculate the ratio of light gathering power
    const lightRatio = lightGatheringPower2.dividedBy(lightGatheringPower1);

    // Calculate the overall ratio considering both light gathering power and sensor area
    const overallRatio = lightRatio.times(areaRatio);

    // Calculate the equivalent exposure time at another focal ratio and sensor size
    // const equivalentSeconds = new Decimal(seconds).times(overallRatio);

    return overallRatio.toNumber();
  }

  static equivalentLightGathering(
    pixelSize1: number,
    focalLength1: number,
    focalRatio1: number,
    pixelSize2: number,
    focalLength2: number,
    focalRatio2: number,
  ) {
    // Calculate the pixel scale in arcseconds per pixel
    const pixelScale1 = AstroUtils.calculatePixelScale(
      pixelSize1,
      focalLength1,
    );
    const pixelScale2 = AstroUtils.calculatePixelScale(
      pixelSize2,
      focalLength2,
    );

    // Calculate the ratio of pixel scales (arcseconds per pixel)
    const pixelScaleRatio = pixelScale1.dividedBy(pixelScale2);

    // Calculate the light gathering power, proportional to the square of the aperture diameter
    const lightGatheringPower1 = new Decimal(1).dividedBy(
      new Decimal(focalRatio1).pow(2),
    );
    const lightGatheringPower2 = new Decimal(1).dividedBy(
      new Decimal(focalRatio2).pow(2),
    );

    // Calculate the ratio of light gathering power
    const lightRatio = lightGatheringPower2.dividedBy(lightGatheringPower1);

    // Calculate the overall light gathering equivalent for a square arcsecond
    const overallLightGathering = lightRatio.times(pixelScaleRatio);

    return overallLightGathering.toNumber();
  }

  static calculatePixelScale(pixelSize: number, focalLength: number) {
    return new Decimal((206.265 * pixelSize) / focalLength);
  }
}
