// make tests independed from current project prettier configs
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
