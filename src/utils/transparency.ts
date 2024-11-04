/**
 * Utility to get display value for transparency
 * @param value - The transparency value.
 * @returns The transparency description.
 */
function getTransparencyDescription(value: number): string {
  if (value >= 0 && value <= 5) return `Excellent (${value})`;
  if (value >= 6 && value <= 9) return `Above Average (${value})`;
  if (value >= 10 && value <= 13) return `Average (${value})`;
  if (value >= 14 && value <= 23) return `Below Average (${value})`;
  if (value >= 24 && value <= 27) return `Poor (${value})`;
  return `Cloudy (${value})`;
}

export { getTransparencyDescription };
