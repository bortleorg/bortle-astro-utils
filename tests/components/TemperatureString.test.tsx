import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TemperatureString, { TemperatureStringProps } from '../../src/components/TemperatureString';
import { TempUnits, TempProvider } from '../../src/hooks/useTemperatureContext';

const renderWithTemperatureContext = (ui: React.ReactElement, { temperatureUnits, setTemperatureUnits }: { temperatureUnits: TempUnits, setTemperatureUnits: React.Dispatch<React.SetStateAction<TempUnits>> }) => {
  return render(
    <TempProvider value={{ temperatureUnits, setTemperatureUnits }}>
      {ui}
    </TempProvider>
  );
};

describe('TemperatureString', () => {
  test('displays temperature in the correct units', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />,
      { temperatureUnits: 'K', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('80.33°F')).toBeInTheDocument();
  });

  test('toggles temperature units on click', () => {
    const setTemperatureUnits = jest.fn();
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />,
      { temperatureUnits: 'K', setTemperatureUnits }
    );

    fireEvent.click(getByText('300.0°K'));
    expect(setTemperatureUnits).toHaveBeenCalledWith('C');
  });

  test('converts temperature from Kelvin to Celsius', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />,
      { temperatureUnits: 'C', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('26.9°C')).toBeInTheDocument();
  });

  test('converts temperature from Kelvin to Fahrenheit', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />,
      { temperatureUnits: 'F', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('80.3°F')).toBeInTheDocument();
  });

  test('converts temperature from Celsius to Fahrenheit', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={100} units="C" />,
      { temperatureUnits: 'F', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('212.0°F')).toBeInTheDocument();
  });

  test('converts temperature from Fahrenheit to Celsius', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={32} units="F" />,
      { temperatureUnits: 'C', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('0.0°C')).toBeInTheDocument();
  });

  test('converts temperature from Fahrenheit to Kelvin', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={32} units="F" />,
      { temperatureUnits: 'K', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('273.1°K')).toBeInTheDocument();
  });

  test('converts temperature from Celsius to Kelvin', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={0} units="C" />,
      { temperatureUnits: 'K', setTemperatureUnits: jest.fn() }
    );

    expect(getByText('273.1°K')).toBeInTheDocument();
  });
});
