export const typescriptConfig = {
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],

      files: ['*.ts', '*.tsx'],

      rules: {
        // Ругается на кейсы constructor(public c: C) {}
        'no-useless-constructor': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/member-ordering': [
          'off',
          {
            default: [
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'constructor',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
            ],
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              String: { message: 'Use string instead', fixWith: 'string' },
              Boolean: { message: 'Use boolean instead', fixWith: 'boolean' },
              Number: { message: 'Use number instead', fixWith: 'number' },
              Object: {
                message: 'Use Record<string, any> instead',
                fixWith: 'Record<string, any>',
              },
              object: {
                message: 'Use Record<string, any> instead',
                fixWith: 'Record<string, any>',
              },
            },
            extendDefaults: false,
          },
        ],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowWithDecorator: true,
            allowStaticOnly: true,
          },
        ],
        // '@typescript-eslint/no-unnecessary-qualifier': 'error', need ts config
        // '@typescript-eslint/restrict-plus-operands': 'error', need ts config
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        // стандартный no-unused-expressions не понимает optional chaining из ts
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-namespace': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: true,
            enums: true,
            typedefs: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
