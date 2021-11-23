module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': { 'eslint-import-resolver-typescript': true },
  },
  rules: {
    'import/no-webpack-loader-syntax': 'off',
  },
};
