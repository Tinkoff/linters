# eslint-config-tinkoff

ESlint plugin includes Tinkoff rules for Angular applications.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-angular
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any necessary additional configs.

```bash
{
  "extends": ["@tinkoff/eslint-config/app", "@tinkoff/eslint-config-angular"]
}
```
