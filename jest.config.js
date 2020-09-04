module.exports = {
    testEnvironment: 'node',
    cacheDirectory: '<rootDir>/.tmp/jest',
    timers: 'fake',
    moduleNameMapper: {
        '^@tinkoff/eslint-plugin$': '<rootDir>/packages/eslint-plugin/lib/index.js',
        '^@tinkoff/linters(.*)$': '<rootDir>/packages/linters$1',
    },
};
