import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/dom';
import { ObservatoryDateTimeDisplayProvider, useObservatoryDateTimeDisplayContext } from '../../src/hooks/useObservatoryDateTimeContext';

const TestComponent = () => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay, observatoryTimeZone, setObservatoryTimeZone } = useObservatoryDateTimeDisplayContext();

  return (
    <div>
      <p>Current Display: {observatoryDateTimeDisplay}</p>
      <p>Current Time Zone: {observatoryTimeZone}</p>
      <button onClick={() => setObservatoryDateTimeDisplay('utc')}>Set to UTC</button>
      <button onClick={() => setObservatoryTimeZone('America/New_York')}>Set Time Zone to New York</button>
    </div>
  );
};

describe('ObservatoryDateTimeDisplayContext', () => {
  it('should provide default values', () => {
    render(
      <ObservatoryDateTimeDisplayProvider>
        <TestComponent />
      </ObservatoryDateTimeDisplayProvider>
    );

    expect(screen.getByText(/Current Display: relative/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Time Zone: UTC/i)).toBeInTheDocument();
  });

  it('should update observatoryDateTimeDisplay', () => {
    render(
      <ObservatoryDateTimeDisplayProvider>
        <TestComponent />
      </ObservatoryDateTimeDisplayProvider>
    );

    fireEvent.click(screen.getByText(/Set to UTC/i));
    expect(screen.getByText(/Current Display: utc/i)).toBeInTheDocument();
  });

  it('should update observatoryTimeZone', () => {
    render(
      <ObservatoryDateTimeDisplayProvider>
        <TestComponent />
      </ObservatoryDateTimeDisplayProvider>
    );

    fireEvent.click(screen.getByText(/Set Time Zone to New York/i));
    expect(screen.getByText(/Current Time Zone: America\/New_York/i)).toBeInTheDocument();
  });
});
