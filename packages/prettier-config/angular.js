module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  tabWidth: 4,
  proseWrap: 'always',
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSpacing: false,
  arrowParens: 'avoid',
  plugins: [
    // https://github.com/prettier/prettier-vscode/issues/2259#issuecomment-952950119
    require.resolve('prettier-plugin-organize-attributes'),
    require.resolve('@prettier/plugin-xml'),
  ],
  attributeGroups: [
    // prettier-plugin-organize-attribute
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$ID',
    '$DEFAULT',
    '$CLASS',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],
  overrides: [
    {
      files: ['*.js'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts'],
      options: { parser: 'typescript' },
    },
    {
      files: ['*.json', '.prettierrc', '.stylelintrc'],
      options: { parser: 'json' },
    },
    {
      files: ['package.json', 'ng-package.json'],
      options: {
        parser: 'json-stringify',
        plugins: [
          require('path').resolve(
            __dirname,
            'plugins',
            'prettier-plugin-sort-package'
          ),
        ],
      },
    },
    {
      files: ['*.less'],
      options: { parser: 'less' },
    },
    {
      files: ['*.scss'],
      options: { parser: 'scss' },
    },
    {
      files: ['*.html'],
      options: { parser: 'html' },
    },
    {
      files: ['*.component.html', '*.template.html'],
      options: { parser: 'angular' },
    },
    {
      files: ['*.svg'],
      options: { parser: 'xml' },
    },
    {
      // @prettier/plugin-xml
      files: ['*.xml'],
      options: { parser: 'xml' },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: { parser: 'yaml', tabWidth: 2 },
    },
    {
      files: ['*.md'],
      options: { parser: 'markdown', tabWidth: 2 },
    },
  ],
};
