module.exports = {
  extends: [],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-param-reassign': 'error',

    /**
     * @note: note you must disable the base rule
     * as it can report incorrect errors in @typescript-eslint
     */
    'no-useless-constructor': 'off',
  },
};
