const path = require('path');

const allowedDecorators = [
    '@Input',
    '@Output',
    '@HostBinding',
    '@HostListener',
    '@ContentChild',
    '@ContentChildren',
    '@ViewChild',
    '@ViewChildren',
];
const allMemberTypes = ['field', 'method', 'constructor', 'get', 'set']
    .reduce((all, type) => {
        all.push(type);
        ['public', 'protected', 'private'].forEach(accessibility => {
            all.push(`${accessibility}-${type}`); // e.g. `public-field`

            if (type !== 'constructor') {
                // There is no `static-constructor` or `instance-constructor or `abstract-constructor`
                ['static', 'instance', 'abstract'].forEach(scope => {
                    if (!all.includes(`${scope}-${type}`)) {
                        all.push(`${scope}-${type}`);
                    }
                    all.push(`${accessibility}-${scope}-${type}`);
                });
            }
        });

        return all;
    }, [])
    .concat(allowedDecorators);

const defaultOptions = [
    {
        default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',
            'public-field',
            'protected-field',
            'private-field',
            'static-field',
            'instance-field',
            'abstract-field',
            'field',
            'constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',
            'public-method',
            'protected-method',
            'private-method',
            'static-method',
            'instance-method',
            'abstract-method',
            'method',
        ],
    },
];

const message = `
[Deprecated]: @tinkoff/member-ordering doesn't support anymore!
[Recommendation]: Use another rules or @typescript-eslint/member-ordering directly
`;

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require a consistent member declaration order',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://github.com/TinkoffCreditSystems/linters',
        },
        messages: {
            incorrectOrder:
                'Member {{name}} should be declared before all {{rank}} definitions.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    default: {
                        oneOf: [
                            {
                                enum: ['never'],
                            },
                            {
                                type: 'array',
                                items: {
                                    enum: allMemberTypes,
                                },
                            },
                        ],
                    },
                    classes: {
                        oneOf: [
                            {
                                enum: ['never'],
                            },
                            {
                                type: 'array',
                                items: {
                                    enum: allMemberTypes,
                                },
                            },
                        ],
                    },
                    classExpressions: {
                        oneOf: [
                            {
                                enum: ['never'],
                            },
                            {
                                type: 'array',
                                items: {
                                    enum: allMemberTypes,
                                },
                            },
                        ],
                    },
                    interfaces: {
                        oneOf: [
                            {
                                enum: ['never'],
                            },
                            {
                                type: 'array',
                                items: {
                                    enum: ['field', 'method', 'constructor'],
                                },
                            },
                        ],
                    },
                    typeLiterals: {
                        oneOf: [
                            {
                                enum: ['never'],
                            },
                            {
                                type: 'array',
                                items: {
                                    enum: ['field', 'method', 'constructor'],
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions,
    create(context) {
        const filename = context.getFilename();
        const fileExt = path.extname(filename);

        if (fileExt !== '.js') {
            return {};
        }

        return {
            Program(
                // eslint-disable-next-line no-unused-vars
                node,
            ) {
                // eslint-disable-next-line no-console
                console.warn(`[File]: ${filename}${message}`);
                /**
                 * @todo: in the next major version need uncommented for show error message and exit with code 1
                 */
                // context.report({node, message});
            },
        };
    },
};
