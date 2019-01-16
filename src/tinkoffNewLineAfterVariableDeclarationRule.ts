import {IRuleMetadata, RuleFailure, Rules} from 'tslint';
import * as ts from 'typescript';
import {NewLineRuleWalker} from './utils';

export class Rule extends Rules.AbstractRule {
    static FAILURE_STRING = 'Missing one blank line around variable declaration';

    static metadata: IRuleMetadata = {
        ruleName: 'tinkoff-new-line-after-variable-declaration',
        description: 'Enforces a new line around variable declarations',
        hasFix: true,
        optionsDescription: '',
        options: {},
        optionExamples: [],
        type: 'style',
        typescriptOnly: false
    };

    apply(sourceFile: ts.SourceFile): RuleFailure[] {
        const walker = new TinkoffNewLineAfterVariableDeclarationWalker(
            sourceFile,
            this.ruleName,
            undefined
        );

        return this.applyWithWalker(walker);
    }
}

class TinkoffNewLineAfterVariableDeclarationWalker extends NewLineRuleWalker {
    protected getFailureString(): string {
        return Rule.FAILURE_STRING;
    }

    protected hasMatch(node: ts.Node): boolean {
        return node.kind === ts.SyntaxKind.VariableStatement;
    }
}
