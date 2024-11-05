process.env.TZ = 'America/New_York';

module.exports = {
  testEnvironment: 'jsdom',
  "setupFilesAfterEnv": [
      "<rootDir>/setupTests.ts"
    ],
};
