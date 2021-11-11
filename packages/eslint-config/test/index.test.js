import ESlint from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config', () => {
  it('app config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./app'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.executeOnText(`const foo = 'bar';`, 'index.ts')
    ).not.toThrow();
  });

  it('lib config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./lib'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.executeOnText(`const foo = 'bar';`, 'index.ts')
    ).not.toThrow();
  });

  it('jest config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./jest'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.executeOnText(`const foo = 'bar';`, 'index.ts')
    ).not.toThrow();
    expect(() =>
      cli.executeOnText(`const foo = 'bar';`, 'index.spec.ts')
    ).not.toThrow();
  });
});
