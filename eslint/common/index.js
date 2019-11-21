module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        jasmine: true,
        es6: true,
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
