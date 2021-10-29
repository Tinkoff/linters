import ESlint from 'eslint';
import path from 'path';

describe('@tinkoff/linters', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./eslint/base/prettier', './eslint/angular'],
      },
      parserOptions: {
        createDefaultProgram: true,
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.executeOnText(`const foo = 'bar';`, 'index.ts')
    ).not.toThrow();
  });

  it('report errors', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./eslint/base/prettier', './eslint/angular'],
      },
      parserOptions: {
        createDefaultProgram: true,
      },
    });

    expect(cli.executeOnText(`var foo = "bar"`).errorCount).toBe(2);
    expect(cli.executeOnText(`var foo = "bar"`, 'index.ts').errorCount).toBe(2);
  });
});
