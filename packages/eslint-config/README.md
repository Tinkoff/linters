# eslint-config-tinkoff

ESlint plugin includes Tinkoff rules for JS and TS codebase.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any necessary additional configs.

### Base configurations

#### For application

```bash
{
  "extends": ["@tinkoff/eslint-config/app"]
}
```

#### For library

```bash
{
  "extends": ["@tinkoff/eslint-config/lib"]
}
```

### Additional configurations

#### If we use Jest

```bash
{
  "extends": ["@tinkoff/eslint-config/app", "@tinkoff/eslint-config/jest"]
}
```

## Configurations overview

Main configurations sets contains common rules

- `@tinkoff/eslint-config/app` - common rules and specific rules for applications
- `@tinkoff/eslint-config/lib` - common rules and specific rules for libraries

Additional configurations sets. This configs **not** contain common eslint rules, and must be included with main configurations

- `@tinkoff/eslint-config/jest` - rules for lint Jest test suits

## Internal used plugins

`@tinkoff/eslint-config/app` and `@tinkoff/eslint-config/lib` include:

- `eslint-config-airbnb` - common and popular configuration
- `eslint-plugin-eslint-comments` - validate `eslint` comments
- `eslint-plugin-import` - validate proper imports
- `eslint-plugin-promise` - enforce best practices for promises
- `eslint-plugin-jest` - validate jest tests
- `@typescript-eslint/eslint-plugin` - lint TypeScript files, adopt many eslint rules to TS code, and provide specific TS rules
- `eslint-plugin-prettier` - disable code formatting using eslint tools and transfers all the logic to a prettier, and report differences as eslint issues
