module.exports = {
  extends: [
    './internal/base',
    './internal/sort-class-members',
    './internal/import',
    './internal/promise',
    './internal/test-files',
    './internal/typescript',
    './internal/prettier',
  ],

  env: {
    browser: true,
    node: true,
  },
};
