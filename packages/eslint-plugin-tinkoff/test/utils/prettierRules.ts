// делаем тесты независимыми от настроек prettier для проекта
export const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      parser: 'typescript',
      singleQuote: true,
      trailingComma: 'es5',
      proseWrap: 'never',
      arrowParens: 'always',
    },
    {
      usePrettierrc: false,
    },
  ],
};
