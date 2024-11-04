import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ObservatoryDateTimeZoneString from '../../src/components/ObservatoryDateTimeZoneString';
import { ObservatoryDateTimeDisplayProvider } from '../../src/hooks/useObservatoryDateTimeContext';

const TestComponent = ({ utcDate }) => (
  <ObservatoryDateTimeDisplayProvider>
    <ObservatoryDateTimeZoneString utcDate={utcDate} />
  </ObservatoryDateTimeDisplayProvider>
);

describe('ObservatoryDateTimeZoneString', () => {
  it('should display local date and time by default', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} />);
    expect(screen.getByText(/1\/1\/22, .+ AM/i)).toBeInTheDocument();
  });

  it('should toggle to observatory date and time', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} />);
    fireEvent.click(screen.getByText(/1\/1\/22, .+ AM/i));
    expect(screen.getByText(/12\/31\/21, .+ PM/i)).toBeInTheDocument();
  });

  it('should toggle to relative time', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} />);
    fireEvent.click(screen.getByText(/1\/1\/22, .+ AM/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM/i));
    expect(screen.getByText(/ago/i)).toBeInTheDocument();
  });

  it('should toggle to UTC date and time', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} />);
    fireEvent.click(screen.getByText(/1\/1\/22, .+ AM/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM/i));
    fireEvent.click(screen.getByText(/ago/i));
    expect(screen.getByText(/1\/1\/22, .+ AM/i)).toBeInTheDocument();
  });
});
