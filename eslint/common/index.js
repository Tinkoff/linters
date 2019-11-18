module.exports = {
    env: {
        browser: true, // TODO DEMO is all of this must be enabled?
        node: true,
        jest: true,
        jasmine: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        './formatting',
        './best-practices',
        './typescript',
        './conventions',
        './jsdoc',
    ],
};
