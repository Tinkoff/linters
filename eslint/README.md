
## `eslint` installation
```sh
npm i -D @tinkoff/linters
```

### Included prettier
```js
// .eslintrc.js
module.exports = {
    extends: [
        '@tinkoff/linters/eslint/base/prettier',
    ]
}
```
```js
// .prettier.config.js
module.exports = {
	...require('@tinkoff/linters/prettier/prettier.config')
};

```

npm script:
```sh
    "lint:es": "eslint --fix \"src/**/*.ts\"",
    "lint:es:ci": "eslint --format ./node_modules/eslint-teamcity/index.js \"src/**/*.ts\"",
```

<details>
    <summary>
        <b>(alternatively) External prettier</b>
    </summary>

```js
// .eslintrc.js
module.exports = {
    extends: [
        '@tinkoff/linters/eslint/base',
    ]
}
```
```js
// .prettier.config.js
module.exports = {
	...require('@tinkoff/linters/prettier/prettier.config')
};

```

npm script:
```sh
    "prelint:es": "prettier --write \"src/**/*.ts\"",
    "lint:es": "eslint --fix \"src/**/*.ts\"",
    "prelint:es:ci": "prettier --check \"src/**/*.ts\"",
    "lint:es:ci": "eslint --format ./node_modules/eslint-teamcity/index.js \"src/**/*.ts\"",
prettier --write && eslint --fix
```

</details>

### In case if you are using Yarn or pnpm
You need to install [move-bin](https://github.com/kupibilet-frontend/move-binaries-to-bin) to make your eslint/prettier/stylelint binaries work


### TODO
- [ ] https://github.com/andreogle/eslint-teamcity#1-as-a-regular-eslint-formatter-plugin
- [ ] Add example for .lintstaged and precommit
