module.exports = {
    plugins: ['import'],
    rules: {
        '@typescript-eslint/class-name-casing': 'error',
        'no-bitwise': 'error',
        'no-console': [
            'error',
            {
                allow: ['warn', 'clear', 'error'],
            },
        ],
        'no-empty': ['warn', {allowEmptyCatch: true}],
        radix: 'error',
        'import/no-default-export': 'error',
    },
};
