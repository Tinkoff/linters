const breaking = require('../utils/breaking');
const {tsOnly} = require('../utils/ts');

module.exports = {
    rules: {
        curly: 'error',
        'new-parens': 'error',
        'max-len': [
            'error',
            {
                code: 90,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch']}, // replaces "new-line-around-control-statement"
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'always', prev: ['const', 'let'], next: '*'}, // replaces "new-line-after-variable-declaration"
            {blankLine: 'any', prev: ['const', 'let'], next: ['export', 'const', 'let']},
        ],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'eol-last': 'error',
        'linebreak-style': ['error', 'unix'],
        'valid-jsdoc': 'off', // valid-jsdoc was deprecated prior to eslint-plugin-jsdoc
        'dot-notation': breaking({since: 2}),
        'quote-props': ['error', 'as-needed', {keywords: true}],
        'no-multiple-empty-lines': ['error', {max: 2}],
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
    },
    ...tsOnly({
        rules: {
            '@typescript-eslint/indent': [
                'error',
                4,
                {
                    SwitchCase: 1,
                    outerIIFEBody: 1,
                    MemberExpression: 1,
                    CallExpression: {
                        arguments: 1,
                    },
                    ArrayExpression: 1,
                    ObjectExpression: 1,
                    ImportDeclaration: 1,
                    FunctionDeclaration: {
                        parameters: 1,
                    },
                    FunctionExpression: {
                        parameters: 1,
                    },
                },
            ],
        },
    }),
};
