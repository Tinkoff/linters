const {CLIEngine} = require('eslint');
const path = require('path');

const cli = new CLIEngine({
    envs: ['browser', 'node'],
    useEslintrc: false,
    configFile: path.join(__dirname, '../../common/typescript/enviroment.js'),
    parserOptions: {
        createDefaultProgram: true,
    },
    rules: {
        '@tinkoff/require-return-type': 'error',
    },
    ignore: false,
});

const codeframe = cli.getFormatter('codeframe');

test('require-return-type snapshot', () => {
    const report = cli.executeOnFiles([
        path.join(__dirname, './require-return-type.test.js'),
        path.join(__dirname, './require-return-type.fixture.ts'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
});
