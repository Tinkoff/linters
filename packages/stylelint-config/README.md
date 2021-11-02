# @tinkoff/stylelint-config

Common Stylelint configuration for Tinkoff projects

## Usage

1. Install from npm

```bash
npm i --save-dev @tinkoff/stylelint-config
```

1. Create `stylelint.config.js` at project root

```js
module.exports = require('@tinkoff/stylelint-config');
```

More information about available at [stylelint documentation](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md)

### Available presets

-   **prettier**

```js
module.exports = require('@tinkoff/stylelint-config/prettier');
```

-   **angular**

```js
module.exports = require('@tinkoff/stylelint-config/angular');
```

-   **taiga-ui**

```js
module.exports = require('@tinkoff/stylelint-config/taiga-ui');
```
