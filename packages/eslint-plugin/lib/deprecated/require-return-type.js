const path = require('path');

const message = `
[Deprecated]: @tinkoff/member-ordering doesn't support anymore!
[Recommendation]: Use another rules or @typescript-eslint/member-ordering directly
`;

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Function with return keyword should specify return type',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://github.com/TinkoffCreditSystems/linters',
        },
        messages: {
            typeRequired: 'Function with return keyword should specify return type.',
            returnRequired: 'Function with return type should have return keyword.',
        },
    },
    create(context) {
        const filename = context.getFilename();
        const fileExt = path.extname(filename);

        if (fileExt !== '.ts') {
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
