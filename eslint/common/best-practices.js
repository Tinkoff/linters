const breaking = require('../utils/breaking');

module.exports = {
    rules: {
        'no-restricted-globals': [
            'error',
            {
                name: 'event',
                message: 'Use local parameter instead.',
            },
            {
                name: 'fdescribe',
                message: 'Do not commit fdescribe. Use describe() instead.',
            },
            {
                name: 'fit',
                message: 'Do not commit fit. Use it() instead.',
            },
        ],
        'no-eval': 'error',
        'no-new-func': 'error',
        'no-implied-eval': 'error',
        'no-prototype-builtins': breaking({since: 2, before: 'off', after: 'warn'}),
        'no-extra-boolean-cast': breaking({since: 2, before: 'off', after: 'warn'}),
        'no-useless-escape': breaking({since: 2, before: 'off', after: 'warn'}),
        'guard-for-in': breaking({since: 2}), // Was'nt fully worked on tslint
        'no-labels': [
            'error',
            {
                allowLoop: breaking({since: 2, before: true, after: false}),
                allowSwitch: breaking({since: 2, before: true, after: false}),
            },
        ],
        'no-unused-labels': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-new-wrappers': 'error',
        'no-debugger': 'error',
        'no-redeclare': 'error',
        'no-fallthrough': 'error',
        'no-unused-expressions': 'error',
        'no-var': 'error',
        'prefer-const': ['error', {destructuring: 'any'}],
        eqeqeq: 'error',
        'use-isnan': ['error', {enforceForSwitchCase: true, enforceForIndexOf: true}],
        'no-empty-function': [
            breaking({since: 2}), // Was'nt fully worked on tslint
            {
                allow: [
                    'arrowFunctions',
                    'constructors',
                    'setters',
                    'getters',
                    'methods',
                ],
            },
        ],
        'no-nested-ternary': breaking({since: 2}),
        'no-undef': breaking({since: 2}), // Was'nt worked on tslint
    },
};
