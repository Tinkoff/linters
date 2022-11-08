import ESlint from 'eslint';
import path from 'path';

describe('import / happy path', () => {
  const cli = new ESlint.CLIEngine({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../internal/import'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        es6: true,
      },
    },
  });

  it('happy', () => {
    const codeframe = cli.getFormatter('codeframe');
    const report = cli.executeOnFiles([
      path.join(__dirname, './__fixtures__/import-happy.fixture.js'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
  });
});
