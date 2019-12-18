const breaking = require('../utils/breaking');

module.exports = {
    rules: {
        '@typescript-eslint/class-name-casing': 'error',

        '@typescript-eslint/member-ordering': 'off',
        '@tinkoff/member-ordering': [
            breaking({since: 2}),
            {
                default: [
                    'private-instance-field',
                    'private-static-field',
                    'protected-static-field',
                    'protected-instance-field',
                    'public-instance-field',
                    'public-static-field',
                    '@Input',
                    '@Output',
                    'public-instance-get',
                    'public-instance-set',
                    'protected-instance-get',
                    'protected-instance-set',
                    'private-instance-get',
                    'private-instance-set',
                    'public-instance-method',
                    'public-static-method',
                    'protected-instance-method',
                    'protected-static-method',
                    'private-instance-method',
                    'private-static-method',
                ],
            },
        ],
    },
};
