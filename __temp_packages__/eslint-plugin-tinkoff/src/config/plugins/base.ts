export const baseConfig = {
  parser: 'babel-eslint',

  plugins: ['babel'],

  settings: {
    'import/parser': 'babel-eslint',
  },

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  rules: {
    ...require('../rules/sort-class-members'),
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'func-name-matching': 'warn',
    'global-require': 'warn',
    'class-methods-use-this': 'warn',
    'no-continue': 'off',
    'no-restricted-syntax': 'warn',
    'default-case': 'warn',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'consistent-return': 'warn',
    'vars-on-top': 'warn',
    'no-var': 'warn',
    camelcase: [
      'warn',
      {
        allow: ['^UNSAFE_'],
        ignoreDestructuring: false,
        properties: 'never',
      },
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'max-depth': ['warn', 4],
    'max-params': ['warn', 3],
    'max-classes-per-file': ['error', 4],
    complexity: ['error', 25],
    'max-statements': ['error', 25],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-underscore-dangle': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'max-nested-callbacks': ['error', 4],
    'no-bitwise': 'warn',
    'no-useless-escape': 'warn',
    'no-await-in-loop': 'off',
  },
};
