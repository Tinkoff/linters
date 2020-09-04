import * as Lint from 'tslint';
import * as ts from 'typescript';
import { IRuleMetadata } from 'tslint';
import { NewLineRuleWalker } from './utils';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Missing blank line around control statement';

    static metadata: IRuleMetadata = {
        ruleName: 'tinkoff-new-line-around-control-statements',
        description: 'Enforces a new line around control statements',
        hasFix: true,
        optionsDescription: '',
        options: {},
        optionExamples: [],
        type: 'style',
        typescriptOnly: false,
    };

    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        const walker = new NewlineAroundControlStatementWalker(
            sourceFile,
            this.ruleName,
            undefined
        );

        return this.applyWithWalker(walker);
    }
}

class NewlineAroundControlStatementWalker extends NewLineRuleWalker {
    protected getFailureString(): string {
        return Rule.FAILURE_STRING;
    }

    protected hasMatch(node: ts.Node): boolean {
        switch (node.kind) {
            case ts.SyntaxKind.IfStatement:
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.ForOfStatement:
            case ts.SyntaxKind.ForStatement:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.SwitchStatement:
            case ts.SyntaxKind.ReturnStatement:
                return true;
            default:
                return false;
        }
    }

    protected shouldSkipPrevious(node: ts.Statement, previous: ts.Statement): boolean {
        return false;
    }
}
