module.exports = {
  overrides: [
    {
      files: ['*.ts'],
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
      rules: {
        /**
         * @note: because in tests, there may be special fixtures
         */
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
  ],
};
