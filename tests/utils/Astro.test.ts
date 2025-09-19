import { Observer, Body, AstroTime, Horizon, SearchAltitude, SearchRiseSet, Illumination } from "astronomy-engine";
import Decimal from "decimal.js";
import { ObservatoryDateTime } from "../../src/classes/ObservatoryDateTime";
import { AstroCalc, AstroPoint, SolarTimes, LunarInfo, IlluminationInfo } from "../../src/utils/Astro";

describe("AstroCalc", () => {
  describe("hoursToDegrees", () => {
    it("should convert hours to degrees", () => {
      expect(AstroCalc.hoursToDegrees(1)).toBe(15);
      expect(AstroCalc.hoursToDegrees(2)).toBe(30);
    });
  });

  describe("arcminToDegree", () => {
    it("should convert arcminutes to degrees", () => {
      expect(AstroCalc.arcminToDegree(60)).toBe(1);
      expect(AstroCalc.arcminToDegree(30)).toBe(0.5);
    });
  });

  describe("arcsecToDegree", () => {
    it("should convert arcseconds to degrees", () => {
      expect(AstroCalc.arcsecToDegree(3600)).toBe(1);
      expect(AstroCalc.arcsecToDegree(1800)).toBe(0.5);
    });
  });

  describe("degreesToHours", () => {
    it("should convert degrees to hours", () => {
      expect(AstroCalc.degreesToHours(15)).toBe(1);
      expect(AstroCalc.degreesToHours(30)).toBe(2);
    });
  });

  describe("degreeToArcmin", () => {
    it("should convert degrees to arcminutes", () => {
      expect(AstroCalc.degreeToArcmin(1)).toBe(60);
      expect(AstroCalc.degreeToArcmin(0.5)).toBe(30);
    });
  });

  describe("degreeToArcsec", () => {
    it("should convert degrees to arcseconds", () => {
      expect(AstroCalc.degreeToArcsec(1)).toBe(3600);
      expect(AstroCalc.degreeToArcsec(0.5)).toBe(1800);
    });
  });

  describe("degreesToHMS", () => {
    it("should convert degrees to HMS", () => {
      expect(AstroCalc.degreesToHMS(15)).toBe("1° 0' 0\"");
      expect(AstroCalc.degreesToHMS(30)).toBe("2° 0' 0\"");
    });
  });

  describe("degreesToDMS", () => {
    it("should convert degrees to DMS", () => {
      expect(AstroCalc.degreesToDMS(1)).toBe("1° 0' 0\"");
      expect(AstroCalc.degreesToDMS(-1)).toBe("-1° 0' 0\"");
    });
  });

  describe("getLunarInfo", () => {
    it("should return lunar information", () => {
      const lunarInfo = AstroCalc.getLunarInfo(0, 0, 0, "America/New_York");
      expect(lunarInfo).toHaveProperty("moonrise");
      expect(lunarInfo).toHaveProperty("moonset");
      expect(lunarInfo).toHaveProperty("illuminationInfo");
      expect(typeof lunarInfo.illuminationInfo.phaseName).toBe("string");
    });
  });


  describe("getMoonPhaseName", () => {
    it("should return the correct moon phase name", () => {
      expect(AstroCalc.getMoonPhaseName(0)).toBe("New Moon");
      expect(AstroCalc.getMoonPhaseName(5)).toBe("New Moon");
      expect(AstroCalc.getMoonPhaseName(10)).toBe("Waxing Crescent");
      expect(AstroCalc.getMoonPhaseName(45)).toBe("Waxing Crescent");
      expect(AstroCalc.getMoonPhaseName(80)).toBe("First Quarter");
      expect(AstroCalc.getMoonPhaseName(90)).toBe("First Quarter");
      expect(AstroCalc.getMoonPhaseName(100)).toBe("Waxing Gibbous");
      expect(AstroCalc.getMoonPhaseName(135)).toBe("Waxing Gibbous");
      expect(AstroCalc.getMoonPhaseName(170)).toBe("Full Moon");
      expect(AstroCalc.getMoonPhaseName(180)).toBe("Full Moon");
      expect(AstroCalc.getMoonPhaseName(190)).toBe("Waning Gibbous");
      expect(AstroCalc.getMoonPhaseName(225)).toBe("Waning Gibbous");
      expect(AstroCalc.getMoonPhaseName(260)).toBe("Last Quarter");
      expect(AstroCalc.getMoonPhaseName(270)).toBe("Last Quarter");
      expect(AstroCalc.getMoonPhaseName(280)).toBe("Waning Crescent");
      expect(AstroCalc.getMoonPhaseName(315)).toBe("Waning Crescent");
      expect(AstroCalc.getMoonPhaseName(350)).toBe("New Moon");
      expect(AstroCalc.getMoonPhaseName(360)).toBe("New Moon");
    });
  });

  describe("getSolarTimes", () => {
    it("should return solar times", () => {
      const solarTimes = AstroCalc.getSolarTimes(0, 0, 0, "America/New_York");
      expect(solarTimes).toHaveProperty("sunrise");
      expect(solarTimes).toHaveProperty("sunset");
      expect(solarTimes).toHaveProperty("nauticalDawn");
      expect(solarTimes).toHaveProperty("astronomicalDawn");
      expect(solarTimes).toHaveProperty("nauticalDusk");
      expect(solarTimes).toHaveProperty("astronomicalDusk");
    });
  });

  describe("calculateAltitudes", () => {
    it("should calculate altitudes", () => {
      const target = new AstroPoint(0, 0);
      const end_astro_twilight_night = new AstroTime(new Date());
      const start_astro_twilight_morning = new AstroTime(new Date());
      const start_date = Date.now();
      const observer = new Observer(0, 0, 0);
      const minAltitude = 0;
      const altitudes = AstroCalc.calculateAltitudes(
        target,
        end_astro_twilight_night,
        start_astro_twilight_morning,
        start_date,
        observer,
        minAltitude
      );
      expect(altitudes).toHaveProperty("values");
      expect(altitudes).toHaveProperty("times");
      expect(altitudes).toHaveProperty("timeAboveMin");
      expect(altitudes).toHaveProperty("maxAltitudeIndex");
      expect(altitudes).toHaveProperty("transitDirection");
      expect(altitudes).toHaveProperty("maxDarkAltitudeIndex");
    });
  });

  describe("equivalentExposureTime", () => {
    it("should calculate equivalent exposure time", () => {
      expect(AstroCalc.equivalentExposureTime(1, 1, 2)).toBeCloseTo(4);
      expect(AstroCalc.equivalentExposureTime(1, 2, 1)).toBeCloseTo(0.25);
    });
  });

  describe("equivalentExposureTimeExperimental", () => {
    it("should calculate equivalent exposure time considering pixel size", () => {
      expect(AstroCalc.equivalentExposureTimeExperimental(1, 1, 2, 1, 2)).toBeCloseTo(8);
      expect(AstroCalc.equivalentExposureTimeExperimental(1, 2, 1, 2, 1)).toBeCloseTo(0.125);
    });
  });

  describe.skip("equivalentExposureTimeExperimental5", () => {
    it("should calculate equivalent exposure time considering sensor size", () => {
      expect(AstroCalc.equivalentExposureTimeExperimental5(1, 1, 1, 1, 1, 2, 2, 2, 2)).toBeCloseTo(64);
      expect(AstroCalc.equivalentExposureTimeExperimental5(1, 2, 2, 2, 2, 1, 1, 1, 1)).toBeCloseTo(0.015625);
    });
  });

  describe("equivalentLightGathering", () => {
    it("should calculate equivalent light gathering", () => {
      expect(AstroCalc.equivalentLightGathering(1, 1, 1, 2, 2, 2)).toBeCloseTo(0.25);
      expect(AstroCalc.equivalentLightGathering(2, 2, 2, 1, 1, 1)).toBeCloseTo(4);
    });
  });

  describe("calculatePixelScale", () => {
    it("should calculate pixel scale", () => {
      expect(AstroCalc.calculatePixelScale(1, 1).toNumber()).toBeCloseTo(206.265);
      expect(AstroCalc.calculatePixelScale(2, 2).toNumber()).toBeCloseTo(206.265);
    });
  });
});
