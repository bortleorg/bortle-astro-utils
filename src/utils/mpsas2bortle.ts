/**
 * Converts mpsas to bortle scale.
 * @param mpsas - The mpsas value.
 * @returns The bortle scale value.
 */
const mpsas2bortle = (mpsas: number): number => {
  if (mpsas >= 22.0) return 1;
  else if (mpsas >= 21.75) return 2;
  else if (mpsas >= 21.5) return 3;
  else if (mpsas >= 21.25) return 4;
  else if (mpsas >= 20.75) return 5;
  else if (mpsas >= 20.25) return 6;
  else if (mpsas >= 19.5) return 7;
  else if (mpsas >= 18.0) return 8;
  else return 9;
};

export { mpsas2bortle };
