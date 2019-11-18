module.exports = {
    extends: ['plugin:jsdoc/recommended'],
    rules: {
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/check-tag-names': 'warn', // DEMO
        'jsdoc/newline-after-description': 'off', // DEMO
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-param-description': 'off',
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                return: '', // DEMO
            },
        },
    },
};
