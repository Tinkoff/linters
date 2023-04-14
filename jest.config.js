module.exports = {
  testEnvironment: 'node',
  cacheDirectory: '<rootDir>/.tmp/jest',
  fakeTimers: {
    enableGlobally: true,
  },
  moduleNameMapper: {
    '^@tinkoff/eslint-plugin$': '<rootDir>/packages/eslint-plugin/lib/index.js',
    '^@tinkoff/linters(.*)$': '<rootDir>/packages/linters$1',
  },
};
