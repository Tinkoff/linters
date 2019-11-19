const breaking = require('../utils/breaking');

module.exports = {
    plugins: ['import'],
    rules: {
        '@typescript-eslint/class-name-casing': 'error',
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
    },
};
