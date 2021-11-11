module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        return: '',
      },
    },
  },
};
