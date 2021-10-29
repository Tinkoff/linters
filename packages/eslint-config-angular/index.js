module.exports = {
    root: true,
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
            plugins: ['@typescript-eslint'],
            rules: Object.assign(
                require('./rules/eslint-plugin'),
                require('./rules/import-plugin'),
                require('./rules/typescript-eslint-plugin'),
            ),
        },
    ],
};
