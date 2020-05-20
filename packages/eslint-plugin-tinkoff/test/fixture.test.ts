import path from 'path';
import { runLintWithFixtures } from './utils/runLintWithFixtures';

const testCases = [
  {
    name: 'lint js lib files',
    type: 'js',
    eslintConfig: { extends: ['plugin:self-dir/lib'] },
  },
  {
    name: 'lint typescript lib files',
    type: 'typescript',
    eslintConfig: { extends: ['plugin:self-dir/lib'] },
  },
  {
    name: 'lint react js app files',
    type: 'react',
    eslintConfig: { extends: ['plugin:self-dir/app', 'plugin:self-dir/react'] },
  },
  {
    name: 'lint react ts app files',
    type: 'react-typescript',
    eslintConfig: { extends: ['plugin:self-dir/app', 'plugin:self-dir/react'] },
  },
  {
    name: 'lint tramvai app files',
    type: 'tramvai',
    eslintConfig: { extends: ['plugin:self-dir/main', 'plugin:self-dir/tramvai'] },
  },
  {
    name: 'lint tramvai ts app files',
    type: 'tramvai-typescript',
    eslintConfig: { extends: ['plugin:self-dir/main', 'plugin:self-dir/tramvai'] },
  },
];

describe('fixture eslint plugin test', () => {
  process.env.ESLINT_PLUGIN_SELF_DIR = path.join(__dirname, '..');
  testCases.forEach((testCase) => {
    it(`check: ${testCase.name}`, () => {
      const result = runLintWithFixtures(testCase.type, testCase.eslintConfig);
      expect(result).toMatchSnapshot();
    });
  });
});
