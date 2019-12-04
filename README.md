# Tinkoff Linter Configuration [![Build](https://img.shields.io/travis/TinkoffCreditSystems/linters/master)](https://travis-ci.org/TinkoffCreditSystems/linters) [![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters) [![npm version](https://img.shields.io/npm/v/@tinkoff/linters)](https://www.npmjs.com/package/@tinkoff/linters)

This repository contains configuration files for the linters we use in Tinkoff. It includes:
-   configs and rules for [TSLint](https://palantir.github.io/tslint/)
-   configs for [Stylelint](https://stylelint.io/)
-   configs for [Prettier](https://prettier.io)
-   configs for [ESLint](https://eslint.org/)

## Install

```
$ npm install @tinkoff/linters@beta --save-dev
```

> **You don't need** to install `eslint`, `tslint`, `prettier` or `stylelint`, they are added as dependencies of `@tinkoff/linters` and will be installed automatically.

<details>
    <summary>If you have any of those deps or experiencing problems</summary>

Run following in your project:
```sh
npm uninstall $(node -e 'const p=require("./package");console.log(Object.keys(p.dependencies||[]).concat(Object.keys(p.devDependencies||[])).filter(name=>/eslint|stylelint|prettier|tslint/.test(name)).join(" "))')
```
</details>

## ESLint + Prettier
This preset is compatible with any and ES Modules based project, written in  `TS` and/or `ES6+`. No matter is it `node`/`react` or `angular`.

For now there is additional `angular` rules available, and we planning to add `RxJS` rules in near future.

Add following files in your project:

##### **`.eslintrc.js`**
```js
module.exports = {
    extends: [
        './node_modules/@tinkoff/linters/eslint/base/prettier',
        './node_modules/@tinkoff/linters/eslint/angular',
    ]
}
```
##### **`.prettier.config.js`**
```js
module.exports = {
	...require('@tinkoff/linters/prettier/prettier.config')
};
```

Add npm-script:
```sh
    "lint:es": "eslint --fix \"src/**/*.{ts,js}\"",
    "lint:es:ci": "eslint --format ./node_modules/eslint-teamcity/index.js \"src/**/*.{ts,js}\"",
```

Add `.eslintignore` file.
> Don't add `.ts`/`.js` files to `.prettierignore` because it isn't used by prettier in this setup.

<details>
    <summary>
        <b>(alternatively) External prettier</b>
    </summary>

> In this case you should have both `.eslintignore` and `.prettierignore` files

You need to use different base config:
##### **`.eslintrc.js`**
```js
module.exports = {
    extends: [
        './node_modules/@tinkoff/linters/eslint/base',
        './node_modules/@tinkoff/linters/eslint/angular',
    ]
}
```
##### **`.prettier.config.js`**
```js
module.exports = {
	...require('@tinkoff/linters/prettier/prettier.config')
};

```

Add npm-script:
```sh
    "prelint:es": "prettier --write \"src/**/*.{ts,js}\"",
    "lint:es": "eslint --fix \"src/**/*.{ts,js}\"",
    "prelint:es:ci": "prettier --check \"src/**/*.{ts,js}\"",
    "lint:es:ci": "eslint --format ./node_modules/eslint-teamcity/index.js \"src/**/*.{ts,js}\"",
```

</details>


<details>
    <summary>Troubleshooting</summary>

If you're got this error:
```
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
```
- Make sure that `.ts`/`.tsx` file mentioned in this error is included in your projects `./tsconfig.json`
- OR Update config:
    ##### **`.eslintrc.js`**
    ```diff
    module.exports = {
        extends: [
            './node_modules/@tinkoff/linters/eslint/base',
            './node_modules/@tinkoff/linters/eslint/angular',
        ],
    +    parserOptions: {
    +        createDefaultProgram: true, // Allows to work with non-ts files
    +    },
    }
    ```
    > `createDefaultProgram` may cause [performance issues](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration)
</details>

## Stylelint
You should extend your Stylelint configs with only one `bases` config:

##### **`.stylelintrc`**
```json
{
	"extends": ["@tinkoff/linters/stylelint/bases/prettier.stylelint.json"]
}
```

Add npm-script:
```sh
    "lint:less": "stylelint --config .stylelintrc --fix \"src/**/*.less\"",
    "lint:less:ci": "stylelint --config .stylelintrc --custom-formatter=node_modules/stylelint-teamcity-reporter \"src/**/*.less\"",
```

## Husky + lint-staged

```sh
$ npm i husky lint-staged --save-dev
```

##### **`.huskyrc.json`**
```js
{
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

##### **`.lintstagedrc.json`**
```js
{
    "linters": {
        "src/**/*.{ts,js}": ["npm run lint:es", "git add"],
        "src/**/*.less": ["prettier --write", "npm run lint:less", "git add"],
        "src/**/*.{md,json,template.html}": ["prettier --write", "git add"]
    }
}
```

## TSLint (deprecated)
TSLint no longer supported. See [roadmap](/ROADMAP.md).
<details>
    <summary>Installation</summary>

For TSLint and Stylelint configs we use `bases/mixins` concept. You should extend your TSLint and Stylelint configs with only one `bases` config, and any number of `mixins` configs.

Example of `tslint.json` file in your project:

```json
{
	"extends": [
		"@tinkoff/linters/tslint/bases/prettier.tslint.json",
		"@tinkoff/linters/tslint/mixins/rxjs5.5.tslint.json", // For RxJs 5.5
		"@tinkoff/linters/tslint/mixins/rxjs6.tslint.json" // For RxJS 6+
	]
}
```

</details>

## VS Code
To make eslint work with `.ts` files:
- Install [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Find VSCode's settings file](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)
- Add following to settings:
    ```json
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ]
    ```



<br />
<br />

## Custom rules for TSLint

We follow some rules which are not implemented in TSLint. So we implemented them ourselves.

-   [`tinkoff-angular-member-ordering`](#tinkoff-angular-member-ordering)
-   [`tinkoff-condition-breaks`](#tinkoff-condition-breaks)
-   [`tinkoff-method-return-type`](#tinkoff-method-return-type)
-   [`tinkoff-new-line-after-variable-declaration`](#tinkoff-new-line-after-variable-declaration)
-   [`tinkoff-new-line-around-control-statement`](#tinkoff-new-line-around-control-statement)

### `tinkoff-angular-member-ordering`

We arrange members of Angular components in the following order:

-   public static members;
-   members decorated with `@Input()` (both fields and setters);
-   members decorated with `@Output()`;
-   other public members;
-   protected static members;
-   protected instance members;
-   private static members;
-   private members.

### `tinkoff-condition-breaks`

When a ternary operator contains complex expressions, it becomes difficult to read and understand. In that case we divide it into several lines.

```ts
// bad
const defaultQuestionnaire = this.isCompany || this.accountIsBlocked ? defaultQuestionnaireCompany && 'super text' : defaultQuestionnaireIp;

// good
const defaultQuestionnaire = this.isCompany || this.accountIsBlocked
   ? defaultQuestionnaireCompany && 'super text'
   : defaultQuestionnaireIp;

// good
const result = isShown ? [] : null;
```

### `tinkoff-method-return-type`

If a function or a method returns result, we must specify its type.
The only exception is the arrow functions. For them it is not necessary.

```ts
class User {
    constructor(name: string, age: number) {
    }

    // good
    getStatus(): string {
    }

    // bad
    getFullname() {
    }

    // ok
    setStatus(status: string) {
    }
}

// bad
function getAge() {
    return 50;
}

// good
function getName(): string {
    return 'Bob';
}

// good
const doSomething = () => {
    return 'done';
};
```

### `tinkoff-new-line-after-variable-declaration`

We separate variable declarations from the previous and subsequent code with an empty string.
But we do not add an empty line before the first variable inside the block.

```ts
// bad
const a = 1;
let b = 2;
b += a;

// good
const a = 1;
let b = 2;

b += a;

function getStatus() {
    const status = 'ok'; // no new line before const, it is ok

    ...
}
```

### `tinkoff-new-line-around-control-statement`

Also we separate control statements (for, if, return, etc) from the previous and subsequent code with an empty string.
But we do not add an empty line before the first variable inside the block.

```ts
function doSomething(count: number): number {
    if (age > 30) {
    }

    for (let i = 0; i < 10; i++) {
    }

    return {name, age};
}
```

## Badge

Show that you use `@tinkoff/linters` in your project [![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters)

```md
[![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters)
```

## Development

Run tests with `npm run test`.
