import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Function with return keyword must specify return type';

    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        const walker = new TinkoffMethodReturnTypeWalker(sourceFile, this.getOptions());

        return this.applyWithWalker(walker);
    }
}

class TinkoffMethodReturnTypeWalker extends Lint.RuleWalker {
    visitReturnStatement(returnNode: ts.ReturnStatement) {
        if (returnNode.expression) {
            this.checkRule(returnNode);
        }

        super.visitReturnStatement(returnNode);
    }

    private checkRule(returnNode: ts.ReturnStatement) {
        const methodNode = this.findMethodNode(returnNode) as ts.MethodDeclaration;

        if (methodNode && !this.checkTypeDefExists(methodNode)) {
            this.addFailureAt(this.findClosingBracket(methodNode).getEnd(), 1, Rule.FAILURE_STRING);
        }
    }

    private findMethodNode(suspectNode: ts.Node): ts.Node {
        if (!suspectNode.parent || suspectNode.kind === ts.SyntaxKind.ArrowFunction) {
            return null;
        }

        return this.isMethodOrFunction(suspectNode)
            ? suspectNode
            : this.findMethodNode(suspectNode.parent);
    }

    private isMethodOrFunction(suspectNode: ts.Node): boolean {
        return (
            suspectNode.kind === ts.SyntaxKind.FunctionDeclaration ||
            suspectNode.kind === ts.SyntaxKind.MethodDeclaration
        );
    }

    private checkTypeDefExists(node: ts.Node): boolean {
        return node.getChildren().some((child) => ts.isTypeNode(child));
    }

    private findClosingBracket(node: ts.Node): ts.Node {
        return node.getChildren().find((child) => child.kind === ts.SyntaxKind.CloseParenToken);
    }
}
