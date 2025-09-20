import { kelvinToCelsius, kelvinToFahrenheit, celsiusToFahrenheit, fahrenheitToCelsius, fahrenheitToKelvin, celsiusToKelvin } from '../../src/utils/temperature';

describe('Temperature Conversion Functions', () => {
  describe('kelvinToCelsius', () => {
    test('should convert kelvin to celsius', () => {
      expect(kelvinToCelsius(0)).toBeCloseTo(-273.15);
      expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
      expect(kelvinToCelsius(373.15)).toBeCloseTo(100);
    });

    test('should throw an error for temperatures below absolute zero', () => {
      expect(() => kelvinToCelsius(-1)).toThrow('Temperature cannot be below absolute zero.');
    });
  });

  describe('kelvinToFahrenheit', () => {
    test('should convert kelvin to fahrenheit', () => {
      expect(kelvinToFahrenheit(0)).toBeCloseTo(-459.67);
      expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
      expect(kelvinToFahrenheit(373.15)).toBeCloseTo(212);
    });

    test('should throw an error for temperatures below absolute zero', () => {
      expect(() => kelvinToFahrenheit(-1)).toThrow('Temperature cannot be below absolute zero.');
    });
  });

  test('celsiusToFahrenheit', () => {
    expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
    expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
    expect(celsiusToFahrenheit(-40)).toBeCloseTo(-40);
  });

  test('fahrenheitToCelsius', () => {
    expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
    expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
    expect(fahrenheitToCelsius(-40)).toBeCloseTo(-40);
  });

  describe('fahrenheitToKelvin', () => {
    test('should convert fahrenheit to kelvin', () => {
      expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
      expect(fahrenheitToKelvin(212)).toBeCloseTo(373.15);
      expect(fahrenheitToKelvin(-459.67)).toBeCloseTo(0);
    });

    test('should throw an error for temperatures that would be below absolute zero', () => {
      expect(() => fahrenheitToKelvin(-500)).toThrow('Temperature cannot be below absolute zero.');
    });
  });

  describe('celsiusToKelvin', () => {
    test('should convert celsius to kelvin', () => {
      expect(celsiusToKelvin(0)).toBeCloseTo(273.15);
      expect(celsiusToKelvin(100)).toBeCloseTo(373.15);
      expect(celsiusToKelvin(-273.15)).toBeCloseTo(0);
    });

    test('should throw an error for temperatures below absolute zero', () => {
      expect(() => celsiusToKelvin(-300)).toThrow('Temperature cannot be below absolute zero.');
    });
  });
});
