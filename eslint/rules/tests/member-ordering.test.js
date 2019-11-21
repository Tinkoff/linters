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
        '@tinkoff/member-ordering': [
            'error',
            {
                classes: [
                    'private-instance-field',
                    'private-static-field',
                    'protected-static-field',
                    'protected-instance-field',
                    'public-instance-field',
                    'public-static-field',
                    '@Input',
                    '@Output',
                    'public-instance-get',
                    'public-instance-set',
                    'protected-instance-get',
                    'protected-instance-set',
                    'private-instance-get',
                    'private-instance-set',
                    'public-instance-method',
                    'public-static-method',
                    'protected-instance-method',
                    'protected-static-method',
                    'private-instance-method',
                    'private-static-method',
                ],
            },
        ],
    },
    ignore: false,
});

const codeframe = cli.getFormatter('codeframe');

test('basic', () => {
    const report = cli.executeOnFiles([
        path.join(__dirname, './member-ordering.fixture.ts'),
    ]);

    expect(codeframe(report.results)).toMatchSnapshot();
});
