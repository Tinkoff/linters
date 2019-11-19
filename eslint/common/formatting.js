const breaking = require('../utils/breaking');

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
        // @typescript-eslint/indent: [
        //     'error',
        //     4,
        //     {
        //         FunctionDeclaration: {
        //             parameters: 'first'
        //         },
        //         FunctionExpression: {
        //             parameters: 'first'
        //         }
        //     }
        // ],
        indent: [
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
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch']},
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'always', prev: ['const', 'let'], next: '*'},
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
};
