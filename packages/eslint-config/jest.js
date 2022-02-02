module.exports = {
  extends: ['plugin:jest/recommended'],

  plugins: [],

  rules: {
    'jest/expect-expect': [
      'warn',
      {
        assertFunctionNames: [
          'expect',
          // support superagent library
          'request.**.expect',
        ],
      },
    ],
    'jest/no-disabled-tests': 'off',
  },
};
