module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowConstructorOnly: true,
            allowEmpty: false,
            allowStaticOnly: true,
            allowWithDecorator: true,
          },
        ],
      },
    },
    {
      files: ['*.spec.ts', '*.fixture.ts'],
      plugins: ['@typescript-eslint'],
      rules: {
        /**
         * @note: because in tests, there may be special fixtures
         */
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
  ],
};
