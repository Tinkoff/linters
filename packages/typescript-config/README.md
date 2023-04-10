# @tinkoff/typescript-config

Common TypeScript configuration for Tinkoff projects

## Requirements

TypeScript >= 5 is required.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/typescript-config
```

Install tsconfig for you application type: `@tsconfig/node18` for your Node.js v18 application or `@tsconfig/create-react-app` for CRA application.

See full lest https://github.com/tsconfig/bases.

```shell
npm i --save-dev @tsconfig/node16
# or
npm i --save-dev @tsconfig/node18
# or
npm i --save-dev @tsconfig/create-react-app
```

Create `tsconfig.json` at the project root

```json
{
  "extends": [
    "@tinkoff/typescript-config/tsconfig.base",
    "@tsconfig/node18/tsconfig"
  ]
}
```
