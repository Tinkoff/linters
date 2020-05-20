export const importConfig = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
      typescript: {},
      webpack: {},
    },
  },

  rules: {
    'import/no-commonjs': 'warn',
    'import/unambiguous': 'warn',
    'import/no-deprecated': 'warn',
    'import/prefer-default-export': 'off', // default хуже чем именованные импорты
    'import/default': 'error', // включаем валидацию default
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-extraneous-dependencies': 'off', // нужна настройка
    'import/no-cycle': 'off',
  },
};
