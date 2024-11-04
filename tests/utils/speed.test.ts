import { metersPerSecondToKmph, metersPerSecondToMph } from '../../src/utils/speed';

describe('Speed Conversion Functions', () => {
  test('metersPerSecondToKmph', () => {
    expect(metersPerSecondToKmph(0)).toBeCloseTo(0);
    expect(metersPerSecondToKmph(1)).toBeCloseTo(3.6);
    expect(metersPerSecondToKmph(10)).toBeCloseTo(36);
  });

  test('metersPerSecondToMph', () => {
    expect(metersPerSecondToMph(0)).toBeCloseTo(0);
    expect(metersPerSecondToMph(1)).toBeCloseTo(2.23694);
    expect(metersPerSecondToMph(10)).toBeCloseTo(22.3694);
  });
});
