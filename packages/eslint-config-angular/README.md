# @tinkoff/eslint-config-angular

ESlint plugin includes Tinkoff rules for Angular applications. Designed to use with `@tinkoff/eslint-config`.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-angular
```

Then, need to include `recommendation` configurations sets to `.eslintrc`. We need to choose base configuration, and any
necessary additional configs:

```json5
{
  extends: ['@tinkoff/eslint-config/app', '@tinkoff/eslint-config-angular'],
}
```

You can also include `optional` configurations, however, you are responsible for implementing these rules in your project:

```json5
{
  extends: [
    // recommended
    '@tinkoff/eslint-config/app',
    '@tinkoff/eslint-config-angular',

    // optional
    '@tinkoff/eslint-config-angular/rxjs',
    '@tinkoff/eslint-config-angular/promise',
    '@tinkoff/eslint-config-angular/imports',
    '@tinkoff/eslint-config-angular/unicorn',
    '@tinkoff/eslint-config-angular/html-eslint',
    '@tinkoff/eslint-config-angular/file-progress',
    '@tinkoff/eslint-config-angular/line-statements',
    '@tinkoff/eslint-config-angular/member-ordering',
    '@tinkoff/eslint-config-angular/decorator-position',
    '@tinkoff/eslint-config-angular/function-return-type',

    // experimental strict rules
    '@tinkoff/eslint-config-angular/experimental',
  ],
}
```

#### Deprecated

- Do not use `@tinkoff/eslint-config-angular/html` instead of `@tinkoff/eslint-config-angular/html-eslint`. There are some problems with `@tinkoff/eslint-config-angular/html` configuration, because under the hood uses
  `eslint-plugin-html` plugin. When `eslint-plugin-html` is extended, rules from other plugins don't work. [See opened
  issue](https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/176).
