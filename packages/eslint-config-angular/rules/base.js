/**
 * @note: only rules from eslint base rules
 */
module.exports = {
  'no-param-reassign': 'error',
  '@typescript-eslint/no-extraneous-class': ['error'],

  /**
   * @note: note you must disable the base rule
   * as it can report incorrect errors in @typescript-eslint
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': ['error'],
};
