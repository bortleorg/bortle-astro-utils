import ObservatoryDateTime from '../../src/classes/ObservatoryDateTime';

describe('ObservatoryDateTime', () => {
  it('should correctly initialize with a Date object', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const observatoryDateTime = new ObservatoryDateTime(date, 'America/Chicago');
    expect(observatoryDateTime.utcDate).toEqual(date);
    expect(observatoryDateTime.homeTimeZone).toBe('America/Chicago');
  });

  it('should correctly initialize with a string', () => {
    const dateString = '2022-01-01T00:00:00Z';
    const observatoryDateTime = new ObservatoryDateTime(dateString, 'America/Chicago');
    expect(observatoryDateTime.utcDate).toEqual(new Date(dateString));
    expect(observatoryDateTime.homeTimeZone).toBe('America/Chicago');
  });

  it('should correctly initialize with a timestamp', () => {
    const timestamp = 1640995200000;
    const observatoryDateTime = new ObservatoryDateTime(timestamp, 'America/Chicago');
    expect(observatoryDateTime.utcDate).toEqual(new Date(timestamp));
    expect(observatoryDateTime.homeTimeZone).toBe('America/Chicago');
  });

  it('should return local date and time', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const observatoryDateTime = new ObservatoryDateTime(date, 'America/Chicago');
    expect(observatoryDateTime.homeTimeZone).toBe('America/Chicago');
    expect(getLocalTimeZone()).toBe('America/Los_Angeles');
    expect(observatoryDateTime.getLocalDateTime()).toMatch("12/31/21, 4:00:00 PM PST");
  });

  it('should return home timezone date and time', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const observatoryDateTime = new ObservatoryDateTime(date, 'America/Chicago');
    expect(observatoryDateTime.getHomeDateTime()).toMatch(/12\/31\/21, .+ PM/i);
  });

  it('should return UTC date and time', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const observatoryDateTime = new ObservatoryDateTime(date, 'America/Chicago');
    expect(observatoryDateTime.getUTCDateTime()).toMatch(/1\/1\/22, .+ AM/i);
  });

  it('should return relative time', () => {
    const date = new Date(Date.now() - 60000); // 1 minute ago
    const observatoryDateTime = new ObservatoryDateTime(date, 'America/Chicago');
    expect(observatoryDateTime.getRelativeTime()).toMatch(/1 minute ago/i);
  });
});
