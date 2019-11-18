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
        ], // DEMO improvement
        'no-eval': 'error',
        'no-new-func': 'error', // DEMO improvement
        'no-implied-eval': 'error', // DEMO improvement
        'no-prototype-builtins': 'off', // TODO was not used before but is very useful
        'no-extra-boolean-cast': 'off', // TODO was not used before but is very useful
        'no-useless-escape': 'off', // TODO was not used before but is very useful
        'guard-for-in': 'error',
        'no-labels': ['error', {allowLoop: true, allowSwitch: true}], // TODO its better to not allow labels anywhere
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
        eqeqeq: ['error', 'always'],
        'use-isnan': ['error', {enforceForSwitchCase: true, enforceForIndexOf: true}],
        'no-empty-function': [
            'error',
            {
                allow: ['constructors', 'setters', 'getters', 'methods'],
            },
        ],
        // TODO enable 'no-use-before-define' or '@typescript-eslint/no-use-before-define'
    },
};
