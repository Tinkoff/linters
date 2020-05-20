export const angularConfig = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'import/no-webpack-loader-syntax': 'off',
        'sort-class-members/sort-class-members': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-extraneous-class': 'off', // не всегда работает корректно с опциями
      },
    },
  ],
};
