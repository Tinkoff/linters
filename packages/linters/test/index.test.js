import ESlint from 'eslint';
import path from 'path';

describe('@tinkoff/linters', () => {
    it('working', () => {
        const cli = new ESlint.CLIEngine({
            useEslintrc: false,
            cwd: path.join(__dirname, '..'),
            baseConfig: {
                extends: ['./eslint/base/prettier', './eslint/angular'],
            },
        });

        expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    });

    it('report errors', () => {
        const cli = new ESlint.CLIEngine({
            useEslintrc: false,
            cwd: path.join(__dirname, '..'),
            baseConfig: {
                extends: ['./eslint/base/prettier', './eslint/angular'],
            },
        });

        expect(cli.executeOnText(`var foo = "bar"`).errorCount).toBe(2);
    });
});
