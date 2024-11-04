import { getSeeingDescription } from '../../src/utils/seeing';

describe('Seeing Description Function', () => {
  test('getSeeingDescription', () => {
    expect(getSeeingDescription(0)).toBe("Cloudy");
    expect(getSeeingDescription(1)).toBe("Poor");
    expect(getSeeingDescription(2)).toBe("Below Average");
    expect(getSeeingDescription(3)).toBe("Average");
    expect(getSeeingDescription(4)).toBe("Above Average");
    expect(getSeeingDescription(5)).toBe("Excellent");
    expect(getSeeingDescription(6)).toBe("Unknown");
  });
});
