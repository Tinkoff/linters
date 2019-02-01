import {IRuleMetadata, RuleFailure, Rules} from 'tslint';
import * as ts from 'typescript';
import {hasModifier} from 'tsutils';
import {AngularMemberOrderingWalker, defaultMemberData} from './utils';

export class Rule extends Rules.AbstractRule {
    static memberData = defaultMemberData;

    static metadata: IRuleMetadata = {
        ruleName: 'tinkoff-angular-member-ordering',
        description: 'Enforce member ordering.',
        hasFix: false,
        optionsDescription: '',
        options: {
            order: [
                'public-static',
                '@Input',
                '@Output',
                'public-instance',
                'protected-static',
                'protected-instance',
                'private-static',
                'private-instance',
            ],
        },
        optionExamples: [
            'public-static',
            'protected-static',
            'private-static',
            '@Input',
            '@Output',
            'public-instance',
            'protected-instance',
            'private-instance',
        ],
        type: 'style',
        typescriptOnly: false,
    };

    apply(sourceFile: ts.SourceFile): RuleFailure[] {
        this.memberOrderingOptionsParse(Rule.metadata.options.order);

        const walker = new TinkoffAngularMemberOrderingWalker(
            sourceFile,
            this.ruleName,
            undefined,
        );

        return this.applyWithWalker(walker);
    }

    private memberOrderingOptionsParse(order: string[]) {
        let counter = 0;

        for (const member of order) {
            Rule.memberData[member].rank = counter;
            counter += 1;
        }
    }
}

type NodeDeclaration =
    | ts.PropertyDeclaration
    | ts.SetAccessorDeclaration
    | ts.GetAccessorDeclaration;

class TinkoffAngularMemberOrderingWalker extends AngularMemberOrderingWalker {
    private bindingWasAppeared = false;

    protected getFailureString(
        nextNode: NodeDeclaration,
        prevNode: NodeDeclaration,
    ): string {
        return `${this.getNodeType(nextNode)} must be before ${this.getNodeType(
            prevNode,
        )}`;
    }

    protected getFailureStringForAccessor(node: NodeDeclaration): string {
        if (this.isInput(node)) {
            return '@Input get/set accessor must be at the end of input\'s declarations';
        }

        return '@Output get/set accessor must be at the end of output\'s declarations';
    }

    protected hasMatch(node: ts.Node): boolean {
        return (
            node.kind === ts.SyntaxKind.PropertyDeclaration ||
            this.isInputAccessor(node) ||
            this.isOutputAccessor(node)
        );
    }

    protected isClass(node: ts.Node): boolean {
        return node.kind === ts.SyntaxKind.ClassDeclaration;
    }

    protected isRightOrder(node: NodeDeclaration, prevNode: NodeDeclaration): boolean {
        if (this.is2WayBinding(node, prevNode)) {
            this.bindingWasAppeared = true;

            return true;
        }

        let toBeReturned: boolean;

        if (this.bindingWasAppeared && this.isInput(node)) {
            toBeReturned = true;
        } else {
            toBeReturned = this.getNodeRank(node) >= this.getNodeRank(prevNode);
        }

        this.bindingWasAppeared = false;

        return toBeReturned;
    }

    protected wrongWithAccessor(
        node: NodeDeclaration,
        prevNode: NodeDeclaration,
    ): boolean {
        return (
            this.isInputAfterAccessor(node, prevNode) ||
            this.isOutputAfterAccessor(node, prevNode)
        );
    }

    private isInputAfterAccessor(
        node: NodeDeclaration,
        prevNode: NodeDeclaration,
    ): boolean {
        const isNodeInput = this.isInput(node);
        const isNodeAccessor = this.isInputAccessor(node);
        const isPrevNodeInputAccessor = this.isInputAccessor(prevNode);

        return isNodeInput && !isNodeAccessor && isPrevNodeInputAccessor;
    }

    private isOutputAfterAccessor(
        node: NodeDeclaration,
        prevNode: NodeDeclaration,
    ): boolean {
        const isNodeOutput = this.isOutput(node);
        const isNodeAccessor = this.isOutputAccessor(node);
        const isPrevNodeNodeOutputAccessor = this.isOutputAccessor(prevNode);

        return isNodeOutput && !isNodeAccessor && isPrevNodeNodeOutputAccessor;
    }

    protected nodeWidth(node: NodeDeclaration): number {
        const input = '@Input';
        const output = '@Output';

        if (this.isInput(node)) {
            return input.length;
        }

        if (this.isOutput(node)) {
            return output.length;
        }

        return node.getChildAt(0).getWidth();
    }

    private getNodeType(node: NodeDeclaration): string {
        return this.getNodeInfo<string>(node, 'text');
    }

    private getNodeRank(node: NodeDeclaration): number {
        return this.getNodeInfo<number>(node, 'rank');
    }

    private getNodeInfo<T>(node: NodeDeclaration, field: string): T {
        let nodeName;

        if (this.isInput(node)) {
            return Rule.memberData['@Input'][field];
        }

        if (this.isOutput(node)) {
            return Rule.memberData['@Output'][field];
        }

        if (this.isIncludedModifier(node, ts.SyntaxKind.PrivateKeyword)) {
            nodeName = 'private';
        } else if (this.isIncludedModifier(node, ts.SyntaxKind.ProtectedKeyword)) {
            nodeName = 'protected';
        } else {
            nodeName = 'public';
        }

        if (this.isIncludedModifier(node, ts.SyntaxKind.StaticKeyword)) {
            nodeName += '-static';
        } else {
            nodeName += '-instance';
        }

        return Rule.memberData[nodeName][field];
    }

    private is2WayBinding(node: NodeDeclaration, prevNode: NodeDeclaration): boolean {
        const nodeIsOutput = this.isOutput(node);
        const prevNodeIsInput = this.isInput(prevNode);
        const nodeStartsWithPrevNode = this.getNodeName(node).startsWith(
            this.getNodeName(prevNode),
        );
        const nodeEndsWithChange = this.getNodeName(node).endsWith('Change');

        return (
            nodeEndsWithChange &&
            nodeStartsWithPrevNode &&
            prevNodeIsInput &&
            nodeIsOutput
        );
    }

    private getNodeName(node: NodeDeclaration): string {
        return node.name.getFullText();
    }

    private isInput(node: NodeDeclaration): boolean {
        return node.getText().startsWith('@Input');
    }

    private isOutput(node: NodeDeclaration): boolean {
        return node.getText().startsWith('@Output');
    }

    private isIncludedModifier(node: NodeDeclaration, kind: any): boolean {
        return hasModifier(node.modifiers, kind);
    }

    private isInputAccessor(node: ts.Node | NodeDeclaration): boolean {
        return this.isAccessor(node) && this.isInput(node as NodeDeclaration);
    }

    private isOutputAccessor(node: ts.Node | NodeDeclaration): boolean {
        return this.isAccessor(node) && this.isOutput(node as NodeDeclaration);
    }

    private isAccessor(node: ts.Node | NodeDeclaration): boolean {
        return (
            node.kind === ts.SyntaxKind.SetAccessor ||
            node.kind === ts.SyntaxKind.GetAccessor
        );
    }
}
