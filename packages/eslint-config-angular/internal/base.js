module.exports = {
  ignorePatterns: [
    'dist',
    'node_modules',
    '**/node_modules/**',
    '**/schematics/*',
    '**/coverage/**',
    'eslintrc.js',
    '.eslintrc.js',
    '**/*.d.ts',
    '**/dist/**',
    '**/docs/**',
    '.cache/**',
    '.git/**',
    '.idea/**',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-param-reassign': 'error',

    /**
     * @note: note you must disable the base rule
     * as it can report incorrect errors in @typescript-eslint
     */
    'no-useless-constructor': 'off',
  },
};
