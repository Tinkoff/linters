# @tinkoff/stylelint-config

Common Stylelint configuration for Tinkoff projects

## Usage

1. Install from npm

```bash
npm i --save-dev @tinkoff/stylelint-config
```

1. Create `stylelint.config.js` at project root

```json
{
    "extends": ["@tinkoff/stylelint-config"]
}
```

More information about available at [stylelint documentation](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md)

### Available presets

-   **prettier**

```js
{
    "extends": ["@tinkoff/stylelint-config/prettier"]
}
```

-   **less**

```json
{
    "extends": ["@tinkoff/stylelint-config/less"]
}
```

-   **angular**

```json
{
    "extends": ["@tinkoff/stylelint-config/angular"]
}
```
