const {getUpperFunction} = require('eslint/lib/rules/utils/ast-utils');

const path = require('path');

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
        const fileExt = path.extname(context.getFilename());

        if (fileExt !== '.ts') {
            return {};
        }

        const reportedFns = new WeakSet();

        function reportMissingType(returnNode) {
            const {argument: returnArgument} = returnNode;
            const fnNode = getUpperFunction(returnNode);

            if (
                !returnArgument ||
                returnArgument.name === 'undefined' ||
                returnArgument.operator === 'void' ||
                fnNode.type === 'ArrowFunctionExpression' ||
                reportedFns.has(fnNode)
            ) {
                return;
            }

            if (
                fnNode &&
                (!fnNode.returnType || fnNode.returnType.type !== 'TSTypeAnnotation')
            ) {
                reportedFns.add(fnNode);

                context.report({
                    node: fnNode,
                    messageId: 'typeRequired',
                });
            }
        }

        return {
            ReturnStatement: reportMissingType,
        };
    },
};
