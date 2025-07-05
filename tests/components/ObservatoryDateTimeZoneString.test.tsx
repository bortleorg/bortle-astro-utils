import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ObservatoryDateTimeZoneString } from '../../src/components/ObservatoryDateTimeZoneString';
import { ObservatoryDateTimeDisplayProvider } from '../../src/hooks/useObservatoryDateTimeContext';

const TestComponent = ({ utcDate, observatoryTimeZone }: { utcDate: any; observatoryTimeZone?: string }) => (
  <ObservatoryDateTimeDisplayProvider>
    <ObservatoryDateTimeZoneString utcDate={utcDate} observatoryTimeZone={observatoryTimeZone} />
  </ObservatoryDateTimeDisplayProvider>
);

const TestComponentWithContextTimeZone = ({ utcDate, initialTimeZone }: { utcDate: any; initialTimeZone?: string }) => (
  <ObservatoryDateTimeDisplayProvider initialTimeZone={initialTimeZone}>
    <ObservatoryDateTimeZoneString utcDate={utcDate} />
  </ObservatoryDateTimeDisplayProvider>
);

describe('ObservatoryDateTimeZoneString', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should toggle display modes', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T00:00:00Z')} observatoryTimeZone="Pacific/Honolulu" />);
    fireEvent.click(screen.getByText(/over \d+ years ago/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM HST/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM EST/i));
    fireEvent.click(screen.getByText(/1\/1\/22, .+ AM UTC/i));
    fireEvent.click(screen.getByText(/over \d+ years ago/i));
    fireEvent.click(screen.getByText(/12\/31\/21, .+ PM HST/i));
  });

  it('should use component timezone prop when provided', () => {
    render(<TestComponent utcDate={new Date('2022-01-01T12:00:00Z')} observatoryTimeZone="Europe/London" />);
    
    // Click to get to observatory mode
    const element = screen.getByText(/over \d+ years ago/i);
    fireEvent.click(element);
    
    // Should show London time (GMT)
    expect(screen.getByText(/1\/1\/22, .+ PM GMT/i)).not.toBeNull();
  });

  it('should use context timezone when component prop not provided', () => {
    render(<TestComponentWithContextTimeZone utcDate={new Date('2022-01-01T12:00:00Z')} initialTimeZone="America/New_York" />);
    
    // Click to get to observatory mode
    const element = screen.getByText(/over \d+ years ago/i);
    fireEvent.click(element);
    
    // Should show Tokyo time (JST)
    expect(screen.getByText(/1\/1\/22, .+ AM EST/i)).not.toBeNull();
  });

  it('should prefer component timezone over context timezone', () => {
    render(
      <ObservatoryDateTimeDisplayProvider initialTimeZone="America/New_York">
        <ObservatoryDateTimeZoneString 
          utcDate={new Date('2022-01-01T12:00:00Z')} 
          observatoryTimeZone="Pacific/Honolulu" 
        />
      </ObservatoryDateTimeDisplayProvider>
    );
    
    // Click to get to observatory mode
    const element = screen.getByText(/over \d+ years ago/i);
    fireEvent.click(element);
    
    // Should show Hawaii time (HST), not New York time
    expect(screen.getByText(/1\/1\/22, .+ AM HST/i)).not.toBeNull();
  });
});
