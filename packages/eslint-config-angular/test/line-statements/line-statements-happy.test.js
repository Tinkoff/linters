import ESlint from 'eslint';
import path from 'path';

describe('imports / happy path', () => {
  const cli = new ESlint.CLIEngine({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../ts/line-statements'],
    },
  });

  it('happy', () => {
    const codeframe = cli.getFormatter('codeframe');
    const report = cli.executeOnFiles([
      path.join(__dirname, './__fixtures__/line-statements-happy.fixture.ts'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
  });
});
