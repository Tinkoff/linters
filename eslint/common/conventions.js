const breaking = require('../utils/breaking');

module.exports = {
    plugins: ['import'],
    rules: {
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/camelcase': breaking({since: 2}),
        'no-bitwise': 'error',
        'no-console': [
            breaking({since: 2}), // Was'nt worked on tslint
            {
                allow: ['warn', 'clear', 'error'],
            },
        ],
        'no-empty': ['warn', {allowEmptyCatch: true}],
        radix: 'error',
        'import/no-default-export': 'error',
        'no-else-return': [breaking({since: 2}), {allowElseIf: false}],
        'no-lonely-if': breaking({since: 2}),
        'prefer-destructuring': [
            breaking({since: 2}),
            {
                array: false,
                object: true,
            },
            {enforceForRenamedProperties: false},
        ],
        'object-shorthand': [breaking({since: 2}), 'properties'],
    },
};
