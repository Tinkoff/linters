module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['rxjs'],
      extends: ['plugin:rxjs/recommended'],
      rules: {},
    },
  ],
};
