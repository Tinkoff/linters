const path = require('path');
const breaking = require('../utils/breaking');

module.exports = {
    plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
    rules: {
        'no-unused-vars': 'off', // types and interfaces are not recognized by eslint
        '@typescript-eslint/no-unused-vars': [
            breaking({since: 2}),
            {
                vars: 'local',
                args: 'none',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                caughtErrors: 'none',
            },
        ],
        '@typescript-eslint/interface-name-prefix': [
            breaking({since: 2}),
            {prefixWithI: 'never'},
        ],

        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
                ignoreProperties: false,
            },
        ],
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-use-before-define': breaking({
            since: 2,
            before: 'off',
            after: 'warn',
        }),

        // Runs an instance of TSLint within your ESLint setup
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint
        '@typescript-eslint/tslint/config': [
            breaking({since: 2}), // 'tinkoff-angular-member-ordering' was recently changed
            {
                rules: {
                    eofline: true, // Dummy rule to supress "Tried to lint [file] but found no valid, enabled rules for this file type and file path in the resolved configuration."
                    'tinkoff-method-return-type': true,
                    'tinkoff-new-line-after-variable-declaration': true,
                    // 'tinkoff-new-line-around-control-statement': true, // TODO CHECK replaced with padding-line-between-statements
                    'tinkoff-angular-member-ordering': true,
                },
                rulesDirectory: [path.join(__dirname, '../../tslint/rules')],
            },
        ],
    },
};
