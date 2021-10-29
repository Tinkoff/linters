import ESlint from 'eslint';
import path from 'path';
import fs from 'fs';

describe('@tinkoff/eslint-config-angular', () => {
    describe('typescript-eslint rules', () => {
        it('member-ordering rule', () => {
            const results = lintFile({
                filePath: './typescript-eslint/member-ordering.bad.ts',
                filterByRuleId: '@typescript-eslint/member-ordering',
            });

            expect(results).toEqual([
                '[Error] Member privateField should be declared before all public instance field definitions.',
                '[Error] Member protectedField should be declared before all public instance field definitions.',
                '[Error] Member protectedAbstract should be declared before all public instance field definitions.',
                '[Error] Member publicDecoratedMethod should be declared before all protected decorated method definitions.',
                '[Error] Member constructor should be declared before all protected decorated method definitions.',
                '[Error] Member publicMethod should be declared before all protected instance method definitions.',
                '[Error] Member privateFieldDecorator should be declared before all protected instance method definitions.',
                '[Error] Member protectedFieldDecorator should be declared before all protected instance method definitions.',
                '[Error] Member publicFieldDecorator should be declared before all protected decorated method definitions.',
                '[Error] Member signature should be declared before all protected decorated method definitions.',
                '[Error] Member protectedAbstractMethod should be declared before all private instance method definitions.',
                '[Error] Member publicAbstractMethod should be declared before all protected instance method definitions.',
            ]);
        });
    });
});

function lintFile({filePath, filterByRuleId}) {
    const cwd = path.join(__dirname, '..');
    const cli = new ESlint.CLIEngine({
        cwd,
        useEslintrc: false,
        baseConfig: {extends: ['./index']},
    });

    const severities = ['No error', 'Warning', 'Error'];
    const fixturePath = path.join(cwd, './test/fixtures');
    const content = fs.readFileSync(path.join(fixturePath, filePath), 'utf8');

    return (
        cli
            ?.executeOnText(content, 'index.ts')
            ?.results.map(({messages}) => messages)
            .flat(Infinity)
            .filter(({ruleId}) => (filterByRuleId ? ruleId === filterByRuleId : ruleId))
            .map(({severity, message}) => `[${severities[severity]}] ${message}`) ?? []
    );
}
