# eslint-config-tinkoff

ESlint plugin includes Tinkoff rules and plugins, for JS and TS codebase.

## Usage

Install from npm

```bash
npm i --save-dev eslint-plugin-tinkoff
```

Plugin automatically install `eslint@7` and `prettier@2` packages.

Then, need to include necessary configurations sets to `.eslintrc`.
Wee need to choose base configuration, and any necessary additional configs.

### Base configurations

#### For application
```bash
{
  "extends": ["plugin:tinkoff/app"]
}
```

#### For library
```bash
{
  "extends": ["plugin:tinkoff/lib"]
}
```

### Additional configurations

#### For React application
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/react"]
}
```

#### For Angular application
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/angular"]
}
```

#### If we use Jest
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/jest"]
}
```

## Configurations overview

Main configurations sets contains common rules

* `tinkoff/app` - common rules and specific rules for applications
* `tinkoff/lib` - common rules and specific rules for libraries

Additional configurations sets. This configs **not** contain common eslint rules, and must be included with main configurations

* `tinkoff/react` - rules for lint React code
* `tinkoff/angular` - rules for lint Angular code
* `tinkoff/jest` - rules for lint Jest test suits

## Internal used plugins

`tinkoff/app` and `tinkoff/lib` include:

* `eslint-config-airbnb` - common and popular configuration
* `eslint-plugin-eslint-comments` - validate `eslint` comments
* `eslint-plugin-import` - validate proper imports
* `eslint-plugin-promise` - enforce best practices for promises
* `eslint-plugin-jest` - validate jest tests
* `@typescript-eslint/eslint-plugin` - lint TypeScript files, adopt many eslint rules to TS code, and provide specific TS rules
* `eslint-plugin-prettier` - disable code formatting using eslint tools and transfers all the logic to a prettier, and report differences as eslint issues

`tinkoff/react` include:

* `eslint-plugin-react` - common react lint rules
* `eslint-plugin-react-hooks` - lint rules for react hooks

<!-- ## Internal rules -->
