module.exports = {
  extends: [],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    createDefaultProgram: true,
    project: 'tsconfig*.json',
    sourceType: 'module',
    errorOnUnknownASTType: true,
    errorOnTypeScriptSyntacticAndSemanticIssues: true,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['sort-class-members', '@typescript-eslint'],
      rules: {
        ...require('./rules/base'),
        ...require('./rules/import'),
        ...require('./rules/member-ordering'),
      },
    },
  ],
};
