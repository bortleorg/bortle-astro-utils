/**
 * Utility to get display value for seeing
 * @param value - The seeing value.
 * @returns The seeing description.
 */
function getSeeingDescription(value: number): string {
  switch (value) {
    case 0:
      return "Cloudy";
    case 1:
      return "Poor";
    case 2:
      return "Below Average";
    case 3:
      return "Average";
    case 4:
      return "Above Average";
    case 5:
      return "Excellent";
    default:
      return "Unknown";
  }
}

export { getSeeingDescription };
