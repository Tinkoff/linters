export const mainConfig = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:tinkoff/base',
    'plugin:tinkoff/import',
    'plugin:tinkoff/promise',
    'plugin:tinkoff/testFiles',
    'plugin:tinkoff/typescript',
    'plugin:tinkoff/prettier',
  ],

  env: {
    browser: true,
    node: true,
  },

  plugins: ['import', 'sort-class-members'],
};
