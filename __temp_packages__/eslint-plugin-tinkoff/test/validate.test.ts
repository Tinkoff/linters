import { CLIEngine } from 'eslint';
import path from 'path';
import { prettierRules } from './utils/prettierRules';

const testJsFile = `const foo = 1;
export function bar(name) {
  document.location(\`/ds\${name}\`);
}

export class User {
  state = {};

  get = () => this.name;

  constructor(name) {
    this.name = name;
  }

  onClick = () => {
    this.name = 'tadam';
  };

  handleName() {
    this.name = '';
  }

  set(name) {
    this.name = name;
  }
}

bar(foo);
`;

const fileWithTest = `class A {
  a() {}
}
class B {
  a() {}
}
class C {
  a() {}
}
class G {
  a() {}
}
describe('myTest', () => {
  it('tadam', () => {
    const a = () => () => () => () => () => () => () => 1;
    expect(Promise.reject({ f: '1' })).toEqual({});
  });
});
`;

const testTsFile = `import React from 'react';

const foo = 1;
export function bar(name): undefined {
  document.location(\`/ds\${name}\`);
}
export const Button = ({ children }) => (
  <button type="button">{children}</button>
);
bar(foo);
`;

describe('eslint validate', () => {
  process.env.ESLINT_PLUGIN_SELF_DIR = path.join(__dirname, '..');

  it('should validate app config', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/app'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(testJsFile, 'file.js');
    const configResult = cli.getConfigForFile('myfile.js');
    // inside CI and other devices there will be a different way
    configResult.parser = 'this_mock';

    expect(lintedFile.results[0].messages).toEqual([]);
    expect(lintedFile.errorCount).toEqual(0);
  });
  it('should validate lib config', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/lib'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(testJsFile, 'file.js');

    expect(lintedFile.results[0].messages).toEqual([]);
    expect(lintedFile.errorCount).toEqual(0);
  });
  it('should validate lib config with react', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/lib', 'plugin:self-dir/react'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(testJsFile, 'file.js');

    expect(lintedFile.results[0].messages).toEqual([]);
    expect(lintedFile.errorCount).toEqual(0);
  });
  it('should validate app config with react', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/app', 'plugin:self-dir/react'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(testJsFile, 'file.js');

    expect(lintedFile.results[0].messages).toEqual([]);
    expect(lintedFile.errorCount).toEqual(0);
  });

  it('should linting ts files', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/app', 'plugin:self-dir/react'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(testTsFile, 'file.tsx');

    expect(lintedFile.results[0].messages).toEqual([]);
    expect(lintedFile.errorCount).toEqual(0);
  });

  it('file with test', async () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        plugins: ['self-dir'],
        extends: ['plugin:self-dir/lib'],
        rules: {
          ...prettierRules,
        },
      },
    });

    const lintedFile = cli.executeOnText(fileWithTest, 'file.spec.ts');

    expect(lintedFile.errorCount).toEqual(0);
  });
});
