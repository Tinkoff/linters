# @tinkoff/eslint-config-angular

ESlint plugin includes Tinkoff rules for Angular applications. Designed to use with `@tinkoff/eslint-config`.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-angular
```

Then, need to include necessary configurations sets to `.eslintrc`. We need to choose base configuration, and any
necessary additional configs.

```json
{
  "extends": [
    "@tinkoff/eslint-config/app",
    "@tinkoff/eslint-config-angular",
    "@tinkoff/eslint-config-angular/html",
    "@tinkoff/eslint-config-angular/rxjs"
  ]
}
```

you can also partially import some configs

```json
{
  "extends": [
    "@tinkoff/eslint-config/app",
    "@tinkoff/eslint-config-angular/ts/import",
    "@tinkoff/eslint-config-angular/ts/line-statements"
  ]
}
```
