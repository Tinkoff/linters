module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'eslint-plugin-import'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': { 'eslint-import-resolver-typescript': true },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-default-export': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-webpack-loader-syntax': 'off',
    /**
     * @note: note you must disable the base rule
     * as it can report incorrect errors in @typescript-eslint
     */
    'import/no-duplicates': 'off',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
  },
};
