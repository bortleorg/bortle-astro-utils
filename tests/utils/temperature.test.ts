import { kelvinToCelsius, kelvinToFahrenheit, celsiusToFahrenheit, fahrenheitToCelsius, fahrenheitToKelvin, celsiusToKelvin } from '../../src/utils/temperature';

describe('Temperature Conversion Functions', () => {
  test('kelvinToCelsius', () => {
    expect(kelvinToCelsius(0)).toBeCloseTo(-273.15);
    expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
    expect(kelvinToCelsius(373.15)).toBeCloseTo(100);
  });

  test('kelvinToFahrenheit', () => {
    expect(kelvinToFahrenheit(0)).toBeCloseTo(-459.67);
    expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
    expect(kelvinToFahrenheit(373.15)).toBeCloseTo(212);
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

  test('fahrenheitToKelvin', () => {
    expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
    expect(fahrenheitToKelvin(212)).toBeCloseTo(373.15);
    expect(fahrenheitToKelvin(-459.67)).toBeCloseTo(0);
  });

  test('celsiusToKelvin', () => {
    expect(celsiusToKelvin(0)).toBeCloseTo(273.15);
    expect(celsiusToKelvin(100)).toBeCloseTo(373.15);
    expect(celsiusToKelvin(-273.15)).toBeCloseTo(0);
  });
});
