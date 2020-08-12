# eslint-config-tinkoff

ESlint plugin includes Tinkoff rules for React applications.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-react
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any necessary additional configs.

```bash
{
  "extends": ["@tinkoff/eslint-config/app", "@tinkoff/eslint-config-react"]
}
```

## Internal used plugins

-   `eslint-plugin-react` - common react lint rules
-   `eslint-plugin-react-hooks` - lint rules for react hooks
