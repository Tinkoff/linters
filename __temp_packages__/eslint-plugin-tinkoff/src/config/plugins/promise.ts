export const promiseConfig = {
  extends: ['plugin:promise/recommended'],
  rules: {
    'promise/always-return': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/param-names': 'warn',
  },
};
