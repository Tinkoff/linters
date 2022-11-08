# @tinkoff/prettier-config

Common Prettier configuration for Tinkoff projects. Compatible with Tinkoff eslint configs.

## Usage

1. Install from npm

```bash
npm i --save-dev @tinkoff/prettier-config
```

1. Create `.prettierrc.js` at project root

```js
module.exports = require('@tinkoff/prettier-config');
```

More information about available at
[prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

### Available presets

- **angular**

```json5
{
  // ...
  prettier: '@tinkoff/prettier-config/angular',
}
```
