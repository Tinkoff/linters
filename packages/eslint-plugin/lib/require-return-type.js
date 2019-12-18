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

        function getFunctionNode(node, functionNodeType) {
            while (node.type !== functionNodeType) {
                node = node.parent;
            }

            return node;
        }

        function createReportMissingType(functionNodeType) {
            return function reportMissingType(returnNode) {
                const {argument: returnArgument} = returnNode;
                const fnNode = getFunctionNode(returnNode, functionNodeType);

                if (
                    !returnArgument ||
                    returnArgument.name === 'undefined' ||
                    returnArgument.operator === 'void'
                ) {
                    return;
                }

                context.report({
                    node: fnNode,
                    messageId: 'typeRequired',
                });
            };
        }

        return {
            'FunctionDeclaration:not([returnType.type="TSTypeAnnotation"]) ReturnStatement': createReportMissingType(
                'FunctionDeclaration',
            ),
            // MethodDefinition always contains FunctionExpression so we'll check only them
            'MethodDefinition FunctionExpression:not([returnType.type="TSTypeAnnotation"]) ReturnStatement': createReportMissingType(
                'FunctionExpression',
            ),
        };
    },
};
