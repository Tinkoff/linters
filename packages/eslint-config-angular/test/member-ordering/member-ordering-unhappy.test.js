import ESlint from 'eslint';
import path from 'path';

describe('member-ordering / unhappy', () => {
  const cli = new ESlint.CLIEngine({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      ...require('../../index.js'),
      rules: require('../../rules/member-ordering'),
    },
  });

  it('unhappy', () => {
    const codeframe = cli.getFormatter('codeframe');
    const report = cli.executeOnFiles([
      path.join(__dirname, './__fixtures__/member-ordering-unhappy.fixture.ts'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
  });
});
