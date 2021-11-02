module.exports = {
    extends: ['./stylelint.config.js', 'stylelint-config-prettier'],
    rules: {
        'value-keyword-case': null,
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: ['/^/deep/'],
            },
        ],
    },
};
