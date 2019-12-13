const breaking = require('../../utils/breaking');
const {tsOnly} = require('../../utils/ts');

module.exports = tsOnly({
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
        'no-use-before-define': 'off', // types and interfaces are not recognized by eslint
        '@typescript-eslint/no-use-before-define': breaking({
            since: 2,
            before: 'off',
            after: 'warn',
        }),
        '@typescript-eslint/prefer-readonly': breaking({since: 2}),
        'functional/prefer-readonly-type': breaking({
            since: 2,
            before: 'off',
            after: 'warn',
        }),
        '@tinkoff/require-return-type': 'error',
    },
});
