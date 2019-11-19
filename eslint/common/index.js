module.exports = {
    env: {
        browser: true,
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
