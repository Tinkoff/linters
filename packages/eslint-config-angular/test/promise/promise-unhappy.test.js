import ESlint from 'eslint';
import path from 'path';

describe('promise / unhappy', () => {
  const cli = new ESlint.CLIEngine({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../promise'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  });

  it('unhappy', () => {
    const codeframe = cli.getFormatter('codeframe');
    const report = cli.executeOnFiles([
      path.join(__dirname, './__fixtures__/promise-unhappy.fixture.ts'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
  });
});
