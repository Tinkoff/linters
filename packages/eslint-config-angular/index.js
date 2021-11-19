module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'sort-class-members'],
      parserOptions: {
        sourceType: 'module',
        errorOnUnknownASTType: true,
        errorOnTypeScriptSyntacticAndSemanticIssues: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaVersion: 6,
      },
      rules: {
        ...require('./rules/base'),
        ...require('./rules/import'),
        ...require('./rules/member-ordering'),
      },
    },
    {
      files: ['*.spec.ts'],
      rules: require('./rules/spec-rules'),
    },
  ],
};
