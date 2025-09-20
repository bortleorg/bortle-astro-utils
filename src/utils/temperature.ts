/**
 * Converts Kelvin to Celsius.
 * @param kelvin - The temperature in Kelvin.
 * @returns The temperature in Celsius.
 */
export function kelvinToCelsius(kelvin: number): number {
  if (kelvin < 0) {
    throw new Error('Temperature cannot be below absolute zero.');
  }
  return kelvin - 273.15;
}

/**
 * Converts Kelvin to Fahrenheit.
 * @param kelvin - The temperature in Kelvin.
 * @returns The temperature in Fahrenheit.
 */
export function kelvinToFahrenheit(kelvin: number): number {
  if (kelvin < 0) {
    throw new Error('Temperature cannot be below absolute zero.');
  }
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function fahrenheitToKelvin(fahrenheit: number): number {
  const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
  if (kelvin < 0) {
    throw new Error('Temperature cannot be below absolute zero.');
  }
  return kelvin;
}

export function celsiusToKelvin(celsius: number): number {
  if (celsius < -273.15) {
    throw new Error('Temperature cannot be below absolute zero.');
  }
  return celsius + 273.15;
}
