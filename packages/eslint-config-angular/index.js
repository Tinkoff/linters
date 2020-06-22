module.exports = {
  extends: [],

  plugins: [],

  rules: {
    'import/no-webpack-loader-syntax': 'off',
    'sort-class-members/sort-class-members': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-extraneous-class': 'off', // incorrect working with constructor parameters
  },
};
