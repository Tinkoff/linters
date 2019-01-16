import * as ts from 'typescript';
import {getNextStatement, getPreviousStatement} from 'tsutils';
import {AbstractWalker, IOptions, Replacement} from 'tslint';

export function getLeadingWhitespace(node: ts.Node, sourceFile: ts.SourceFile): string {
    const fromLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line;

    return getWhitespace(sourceFile, fromLine);
}

export function getTrailingWhitespace(
    node: ts.Statement,
    sourceFile: ts.SourceFile
): string {
    const next = getNextStatement(node);
    const fromLine = ts.getLineAndCharacterOfPosition(sourceFile, next.getStart()).line;

    return getWhitespace(sourceFile, fromLine);
}

function getWhitespace(sourceFile: ts.SourceFile, fromLine: number): string {
    const whitespaceScanner = ts.createScanner(
        ts.ScriptTarget.ES5,
        false,
        ts.LanguageVariant.Standard,
        sourceFile.text
    );

    whitespaceScanner.setTextPos(sourceFile.getLineStarts()[fromLine]);

    let whitespace = '';

    do {
        whitespace += whitespaceScanner.getTokenText();
        whitespaceScanner.scan();
    } while (whitespaceScanner.getToken() === ts.SyntaxKind.WhitespaceTrivia);

    return whitespace;
}

export abstract class NewLineRuleWalker extends AbstractWalker<void> {
    walk(sourceFile: ts.SourceFile) {
        const cb = (node: ts.Node) => {
            if (this.hasMatch(node)) {
                this.visitStatement(node as ts.Statement);
            }

            return ts.forEachChild(node, cb);
        };

        ts.forEachChild(sourceFile, cb);
    }

    protected visitStatement(node: ts.Statement) {
        this.verifyLineBefore(node);
        this.verifyLineAfter(node);
    }

    protected verifyLineBefore(node: ts.Statement) {
        const prev = getPreviousStatement(node);

        if (!prev || this.shouldSkipPrevious(node, prev)) {
            return;
        }

        let start = node.getStart(this.sourceFile);
        let line = ts.getLineAndCharacterOfPosition(this.sourceFile, start).line;
        const comments = ts.getLeadingCommentRanges(this.sourceFile.text, node.pos);

        if (comments !== undefined) {
            // check for blank lines between comments
            for (let i = comments.length - 1; i >= 0; --i) {
                const endLine = ts.getLineAndCharacterOfPosition(
                    this.sourceFile,
                    comments[i].end
                ).line;

                if (endLine < line - 1) {
                    return;
                }

                start = comments[i].pos;
                line = ts.getLineAndCharacterOfPosition(this.sourceFile, start).line;
            }
        }

        const prevLine = ts.getLineAndCharacterOfPosition(this.sourceFile, prev.end).line;

        if (prevLine >= line - 1) {
            const whitespace = getLeadingWhitespace(node, this.sourceFile);
            const replacement = new Replacement(
                prev.getEnd(),
                start - prev.getEnd(),
                `\n\n${whitespace}`
            );

            this.addFailureAtNode(
                node.getFirstToken(),
                this.getFailureString(),
                replacement
            );
        }
    }

    protected verifyLineAfter(node: ts.Statement) {
        const next = getNextStatement(node);

        if (!next || this.shouldSkipNext(node, next)) {
            return;
        }

        let start = next.getStart();
        let end = node.getEnd();
        let line = ts.getLineAndCharacterOfPosition(this.sourceFile, end).line;
        let nextLine = ts.getLineAndCharacterOfPosition(this.sourceFile, start).line;
        const comments =
            ts.getTrailingCommentRanges(this.sourceFile.text, end) ||
            ts.getLeadingCommentRanges(this.sourceFile.text, next.pos);

        if (comments !== undefined) {
            // check for blank lines between comments
            for (let i = comments.length - 1; i >= 0; --i) {
                const startLine = ts.getLineAndCharacterOfPosition(
                    this.sourceFile,
                    comments[i].pos
                ).line;

                if (startLine === line && comments[i].end < next.getStart()) {
                    end = comments[i].end;
                    line = ts.getLineAndCharacterOfPosition(this.sourceFile, end).line;
                } else {
                    start = comments[i].pos;
                    nextLine = ts.getLineAndCharacterOfPosition(this.sourceFile, start)
                        .line;
                }
            }
        }

        if (nextLine <= line + 1) {
            const whitespace = getTrailingWhitespace(node, this.sourceFile);
            const replacement = new Replacement(end, start - end, `\n\n${whitespace}`);

            this.addFailureAtNode(
                node.getLastToken(),
                this.getFailureString(),
                replacement
            );
        }
    }

    protected abstract getFailureString(): string;

    protected shouldSkipPrevious(node: ts.Statement, previous: ts.Statement): boolean {
        return this.hasMatch(previous);
    }

    protected shouldSkipNext(node: ts.Statement, next: ts.Statement): boolean {
        return this.hasMatch(next);
    }

    protected abstract hasMatch(node: ts.Node): boolean;
}

// Angular member ordering rule

export const defaultMemberData = {
    'public-static': {
        rank: 0,
        text: 'PUBLIC STATIC property'
    },
    'protected-static': {
        rank: 1,
        text: 'PROTECTED STATIC property'
    },
    'private-static': {
        rank: 2,
        text: 'PRIVATE STATIC property'
    },
    '@Input': {
        rank: 3,
        text: '@Input'
    },
    '@Output': {
        rank: 4,
        text: '@Output'
    },
    'public-instance': {
        rank: 5,
        text: 'PUBLIC INSTANCE property'
    },
    'protected-instance': {
        rank: 6,
        text: 'PROTECTED INSTANCE property'
    },
    'private-instance': {
        rank: 7,
        text: 'PRIVATE INSTANCE property'
    }
};

type NodeDeclaration =
    | ts.PropertyDeclaration
    | ts.SetAccessorDeclaration
    | ts.GetAccessorDeclaration;

export abstract class AngularMemberOrderingWalker extends AbstractWalker<IOptions> {
    protected lastPropertyDeclaration: NodeDeclaration = null;

    protected visitVariableDeclaration = (node: NodeDeclaration) => {
        if (this.lastPropertyDeclaration === null) {
            this.lastPropertyDeclaration = node;

            return;
        }

        if (!this.isRightOrder(node, this.lastPropertyDeclaration)) {
            this.addFailureAt(
                node.getStart(),
                this.nodeWidth(node),
                this.getFailureString(node, this.lastPropertyDeclaration)
            );
        } else if (this.wrongWithAccessor(node, this.lastPropertyDeclaration)) {
            this.addFailureAt(
                this.lastPropertyDeclaration.getStart(),
                this.nodeWidth(this.lastPropertyDeclaration),
                this.getFailureStringForAccessor(this.lastPropertyDeclaration)
            );
        }

        this.lastPropertyDeclaration = node;
    };

    walk(sourceFile: ts.SourceFile) {
        const cb = (node: ts.Node) => {
            if (this.isClass(node)) {
                this.lastPropertyDeclaration = null;
            }

            if (this.hasMatch(node)) {
                this.visitVariableDeclaration(node as NodeDeclaration);
            }

            return ts.forEachChild(node, cb);
        };

        ts.forEachChild(sourceFile, cb);
    }

    protected abstract getFailureString(
        nextNode: NodeDeclaration,
        prevNode: NodeDeclaration
    ): string;
    protected abstract getFailureStringForAccessor(node: NodeDeclaration): string;
    protected abstract hasMatch(node: ts.Node): boolean;
    protected abstract isRightOrder(
        node: NodeDeclaration,
        prevNode: NodeDeclaration
    ): boolean;
    protected abstract isClass(node: ts.Node): boolean;
    protected abstract nodeWidth(node: NodeDeclaration): number;
    protected abstract wrongWithAccessor(
        node: NodeDeclaration,
        prevNode: NodeDeclaration
    ): boolean;
}
