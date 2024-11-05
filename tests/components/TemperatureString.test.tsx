import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TemperatureString, TemperatureStringProps } from '../../src/components/TemperatureString';
import { TempUnits, TempProvider } from '../../src/hooks/useTemperatureContext';

const renderWithTemperatureContext = (ui: React.ReactElement) => {  
  return render(
    <TempProvider>
      {ui}
    </TempProvider>
  );
};

describe('TemperatureString', () => {
  test('displays temperature in the correct units', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />
    );

    expect(getByText('80.3°F')).not.toBeNull();
  });

  test('displays temperature in the correct units', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={0} units="C" />
    );

    expect(getByText('32.0°F')).not.toBeNull();
  });

  test('displays temperature in the correct units', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={70.5} units="F" />
    );

    expect(getByText('70.5°F')).not.toBeNull();
  });

  test('displays temperature in the correct units', () => {
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={300} units="K" />
    );

    expect(getByText('80.3°F')).not.toBeNull();
  });

  test('toggles temperature units on click', () => {
    const setTemperatureUnits = jest.fn();
    const { getByText } = renderWithTemperatureContext(
      <TemperatureString temperature={0} units="C" />
    );

    fireEvent.click(getByText('32.0°F'));
    fireEvent.click(getByText('0.0°C'));
  });
});
