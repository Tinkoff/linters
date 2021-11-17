module.exports = {
  extends: [
    '../common/index.js',
    'prettier', // our rules must be overridden by "eslint-config-prettier" to be completely conflict-free
    'prettier/@typescript-eslint',
  ],
};
