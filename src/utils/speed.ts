/**
 * Converts meters per second to kilometers per hour.
 * @param metersPerSecond - The speed in meters per second.
 * @returns The speed in kilometers per hour.
 */
export function metersPerSecondToKmph(metersPerSecond: number): number {
  return metersPerSecond * 3.6;
}

/**
 * Converts meters per second to miles per hour.
 * @param metersPerSecond - The speed in meters per second.
 * @returns The speed in miles per hour.
 */
export function metersPerSecondToMph(metersPerSecond: number): number {
  return metersPerSecond * 2.23694;
}
