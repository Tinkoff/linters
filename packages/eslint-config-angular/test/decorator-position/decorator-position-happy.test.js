import ESlint from 'eslint';
import path from 'path';

describe('decorator-position / happy path', () => {
  const cli = new ESlint.CLIEngine({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../decorator-position'],
    },
  });

  it('happy', () => {
    const codeframe = cli.getFormatter('codeframe');

    const report = cli.executeOnFiles([
      path.join(
        __dirname,
        './__fixtures__/decorator-position-happy.fixture.ts'
      ),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
  });
});
