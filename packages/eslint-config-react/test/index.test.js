import ESlint from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config-react', () => {
    it('config working', () => {
        const cli = new ESlint.CLIEngine({
            useEslintrc: false,
            cwd: path.join(__dirname, '..'),
            baseConfig: {
                extends: ['./index'],
            },
        });

        expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    });
});
