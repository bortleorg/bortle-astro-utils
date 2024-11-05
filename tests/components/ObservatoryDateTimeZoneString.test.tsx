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
  it('should toggle display modes', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} />);
    fireEvent.click(screen.getByText(/almost \d+ years ago/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM CST/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM EST/i));
    fireEvent.click(screen.getByText(/1\/1\/22, .+ AM UTC/i));
    fireEvent.click(screen.getByText(/almost \d+ years ago/i));
  });
});
