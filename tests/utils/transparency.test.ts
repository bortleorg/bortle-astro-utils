import { getTransparencyDescription } from '../../src/utils/transparency';

describe('Transparency Description Function', () => {
  test('getTransparencyDescription', () => {
    expect(getTransparencyDescription(0)).toBe("Excellent (0)");
    expect(getTransparencyDescription(5)).toBe("Excellent (5)");
    expect(getTransparencyDescription(6)).toBe("Above Average (6)");
    expect(getTransparencyDescription(9)).toBe("Above Average (9)");
    expect(getTransparencyDescription(10)).toBe("Average (10)");
    expect(getTransparencyDescription(13)).toBe("Average (13)");
    expect(getTransparencyDescription(14)).toBe("Below Average (14)");
    expect(getTransparencyDescription(23)).toBe("Below Average (23)");
    expect(getTransparencyDescription(24)).toBe("Poor (24)");
    expect(getTransparencyDescription(27)).toBe("Poor (27)");
    expect(getTransparencyDescription(28)).toBe("Cloudy (28)");
  });
});
