module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:eslint-comments/recommended'],

  parser: '@babel/eslint-parser',

  settings: {
    'import/parser': '@babel/eslint-parser',
  },

  plugins: ['@babel'],

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  rules: {
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
    'func-name-matching': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'guard-for-in': 'off',
    'default-case': 'warn',
    'no-plusplus': 'off',
    'func-names': 'off',
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
    'max-depth': 'off',
    'max-params': 'off',
    'max-classes-per-file': ['error', 4],
    complexity: ['error', 25],
    'max-statements': ['error', 25],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-underscore-dangle': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'max-nested-callbacks': ['error', 4],
    'no-bitwise': 'warn',
    'no-useless-escape': 'warn',
    'no-await-in-loop': 'off',
  },
};
