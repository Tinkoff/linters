module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
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
  extends: ['eslint:recommended'],
  /**
   * @note: use @typescript-eslint/parser instead @babel/parser
   */
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * @note: [*.js, *.ts]
     */
    'no-param-reassign': 'off',
    'no-case-declarations': 'error',
    'no-console': ['error', { allow: ['info', 'assert', 'warn', 'error'] }],
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-return-assign': ['error', 'always'],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
  },
};
