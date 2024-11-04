import { mpsas2bortle } from '../../src/utils/mpsas2bortle';

describe('MPSAS to Bortle Scale Conversion Function', () => {
  test('mpsas2bortle', () => {
    expect(mpsas2bortle(22.0)).toBe(1);
    expect(mpsas2bortle(21.75)).toBe(2);
    expect(mpsas2bortle(21.5)).toBe(3);
    expect(mpsas2bortle(21.25)).toBe(4);
    expect(mpsas2bortle(20.75)).toBe(5);
    expect(mpsas2bortle(20.25)).toBe(6);
    expect(mpsas2bortle(19.5)).toBe(7);
    expect(mpsas2bortle(18.0)).toBe(8);
    expect(mpsas2bortle(17.0)).toBe(9);
  });
});
