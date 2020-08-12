import * as Lint from 'tslint';
import { Replacement } from 'tslint';
import * as ts from 'typescript';

const INDENT = '    ';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Expected new line between parts of ternary expression';
    static WONT_FIX_FAILURE_STRING = `${Rule.FAILURE_STRING} (cannot be auto-fixed because of nesting)`;

    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        const walker = new ConditionalBreaksWalker(sourceFile, this.getOptions());

        return this.applyWithWalker(walker);
    }
}

class ConditionalBreaksWalker extends Lint.RuleWalker {
    visitConditionalExpression(node: ts.ConditionalExpression) {
        this.checkForErrors(node);
        super.visitConditionalExpression(node);
    }

    private checkForErrors(node: ts.ConditionalExpression) {
        if (
            (this.hasNoOperation(node) && this.isOnOneLine(node) && this.isNotTooLong(node)) ||
            this.bothPartsStartOnNewLine(node)
        ) {
            return;
        }

        const start = node.getStart();
        const width = node.getWidth();

        if (this.isEmbeddedOrEmbedding(node)) {
            this.addFailureAt(start, width, Rule.WONT_FIX_FAILURE_STRING);

            return;
        }

        const fixes = ConditionalBreaksWalker.getFixes(node);

        this.addFailureAt(start, width, Rule.FAILURE_STRING, fixes);
    }

    private hasNoOperation(node: ts.ConditionalExpression): boolean {
        return !(this.hasOperation(node.whenTrue) || this.hasOperation(node.whenFalse));
    }

    private isOnOneLine(node: ts.ConditionalExpression): boolean {
        const whenTrueStartLine = this.getLineNumber(node.whenTrue.getFullStart());
        const whenFalseEndLine = this.getLineNumber(node.whenFalse.getEnd());

        return whenTrueStartLine === whenFalseEndLine;
    }

    private isNotTooLong(node: ts.ConditionalExpression): boolean {
        return this.getBodyWidth(node) < this.getOptions()[0].maxWidth;
    }

    private bothPartsStartOnNewLine(node: ts.ConditionalExpression): boolean {
        const whenTrueFirstChar = node.questionToken.getFullText().charCodeAt(0);
        const whenFalseFirstChar = node.colonToken.getFullText().charCodeAt(0);

        return ts.isLineBreak(whenTrueFirstChar) && ts.isLineBreak(whenFalseFirstChar);
    }

    private isEmbeddedOrEmbedding(node: ts.Node): boolean {
        let { parent } = node;

        while (parent) {
            if (parent.kind === ts.SyntaxKind.ConditionalExpression) {
                return true;
            }

            parent = parent.parent;
        }

        return node.getChildren().some(ConditionalBreaksWalker.checkChildren);
    }

    private getLineNumber(position: number): number {
        return ts.getLineAndCharacterOfPosition(this.getSourceFile(), position).line;
    }

    private hasOperation(node: ts.Node): boolean {
        return (
            ts.isBinaryExpression(node) ||
            node.getChildren().some((node) => ts.isExpressionStatement(node))
        );
    }

    private getBodyWidth(node: ts.ConditionalExpression): number {
        return (
            node.whenTrue.getFullWidth() +
            node.colonToken.getFullWidth() +
            node.whenFalse.getFullWidth()
        );
    }

    private static checkChildren(node: ts.Node): boolean {
        return (
            node.kind === ts.SyntaxKind.ConditionalExpression ||
            node.getChildren().some(ConditionalBreaksWalker.checkChildren)
        );
    }

    private static getFixes(node: ts.ConditionalExpression): Replacement[] {
        const lineAndChar = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart());
        const lineStartPosition = ts.getPositionOfLineAndCharacter(
            node.getSourceFile(),
            lineAndChar.line,
            0
        );
        const whitespaces = ConditionalBreaksWalker.getWhitespaces(
            node.getSourceFile().text,
            lineStartPosition
        );

        return [
            new Replacement(
                node.questionToken.getFullStart(),
                node.questionToken.getFullWidth(),
                node.questionToken.getFullText().replace(/\s*\?/, `\n${whitespaces}?`)
            ),
            new Replacement(
                node.colonToken.getFullStart(),
                node.colonToken.getFullWidth(),
                node.colonToken.getFullText().replace(/\s*:/, `\n${whitespaces}:`)
            ),
            new Replacement(
                node.whenTrue.getFullStart(),
                node.whenTrue.getFullWidth(),
                node.whenTrue.getFullText().replace(/^\s*/, ' ')
            ),
            new Replacement(
                node.whenFalse.getFullStart(),
                node.whenFalse.getFullWidth(),
                node.whenFalse.getFullText().replace(/^\s*/, ' ')
            ),
        ];
    }

    private static getWhitespaces(text: string, startPosition: number): string {
        let whitespaces = INDENT;
        let pos = startPosition;

        while (text[pos] === ' ' || text[pos] === '\t') {
            whitespaces += text[pos];
            pos++;
        }

        return whitespaces;
    }
}
