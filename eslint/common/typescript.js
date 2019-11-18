const path = require('path');

module.exports = {
    plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
    rules: {
        'no-unused-vars': 'off', // types and interfaces are not recognized by eslint
        '@typescript-eslint/interface-name-prefix': ['error', {prefixWithI: 'always'}], // TODO changed to 'never' e22f9f0

        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
                ignoreProperties: false,
            },
        ],
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-use-before-define': 'off', // TODO DEMO looks like it wasnt worked before

        // Runs an instance of TSLint within your ESLint setup
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: {
                    eofline: true, // Dummy rule to supress "Tried to lint [file] but found no valid, enabled rules for this file type and file path in the resolved configuration."
                    'tinkoff-method-return-type': true,
                    'tinkoff-new-line-after-variable-declaration': true,
                    'tinkoff-new-line-around-control-statement': true, // replaced with padding-line-between-statements
                    'tinkoff-angular-member-ordering': true,
                },
                rulesDirectory: [path.join(__dirname, '../../tslint/rules')],
            },
        ],
    },
};
