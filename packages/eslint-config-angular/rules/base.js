/**
 * @note: recommendation
 */
module.exports = {
  'no-param-reassign': 'error',
  '@typescript-eslint/no-extraneous-class': [
    'error',
    {
      allowConstructorOnly: true,
      allowEmpty: false,
      allowStaticOnly: true,
      allowWithDecorator: true,
    },
  ],

  /**
   * @note: note you must disable the base rule
   * as it can report incorrect errors in @typescript-eslint
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': ['error'],
};
