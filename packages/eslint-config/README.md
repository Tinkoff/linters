# @tinkoff/eslint-config

ESlint plugin includes Tinkoff rules for JS and TS codebase. Better to use with framework-oriented packages `@tinkoff/eslint-config-react` or `@tinkoff/eslint-config-angular`

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs. Package include `eslint@7` and `prettier@2` dependencies, so you should remove `eslint`,
`prettier`, and `@tinkoff/eslint-config` internal dependencies from your project `package.json`.

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

Additional configurations sets. This configs **not** contain common eslint rules, and must be included with main
configurations

- `@tinkoff/eslint-config/jest` - rules for lint Jest test suits

## Internal used plugins

`@tinkoff/eslint-config/app` and `@tinkoff/eslint-config/lib` include:

- `eslint-config-airbnb` - common and popular configuration
- `eslint-plugin-eslint-comments` - validate `eslint` comments
- `eslint-plugin-import` - validate proper imports
- `eslint-plugin-promise` - enforce best practices for promises
- `eslint-plugin-jest` - validate jest tests
- `@typescript-eslint/eslint-plugin` - lint TypeScript files, adopt many eslint rules to TS code, and provide specific
  TS rules
- `eslint-plugin-prettier` - disable code formatting using eslint tools and transfers all the logic to a prettier, and
  report differences as eslint issues

## Troubleshooting

### Wrong or duplicated eslint or some eslint plugins versions

Try to remove `eslint`, `prettier`, and `@tinkoff/eslint-config` internal dependencies from your project `package.json`,
then reinstall dependencies.

## Usage tips for [Nx monorepo](https://nrwl.io/)

### Connect to nx workspace

#### In root config

Add `"@tinkoff/eslint-config/app"` to extends section on config.
Also, if you monorepo contains only buildable/publishable libs without apps, use `"@tinkoff/eslint-config/lib"` instead of `"@tinkoff/eslint-config/app"`

```json
{

    "root": true,
    "ignorePatterns": ["**/*"],
    "extends": ["@tinkoff/eslint-config/app"]
    ...optionally some other configs
}
```

#### In apps and non-buildable/non-publishable libs

In app/lib eslint configuration just extends root config

```json
{
    "extends": ["../../.eslintrc.json"],
    "ignorePatterns": ["!**/*"]
    ...optionally some other configs
}
```

#### Only in buildable/publishable libs (if repo contain apps or non-buildable/non-publishable libs)

Add `"@tinkoff/eslint-config/lib"` in extends section after root config

```json
{
    "extends": ["../../.eslintrc.json", "@tinkoff/eslint-config/lib"],
    "ignorePatterns": ["!**/*"]
    ...optionally some other configs
}
```

### Non-JSON configs usage

Nx means usage `.eslintrc.json` for configure ESLint. Just provide it! In `.eslintrc.json` add extension of actual root config file:

```
{
  "extends": ["./.eslintrc.js"]
}
```

After that:

- Nx see what they need and don't re-initialize lint infrastructure
- You can use [better config formats](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats) and nx generators
