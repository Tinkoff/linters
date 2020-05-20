import { appConfig } from './config/app';
import { libConfig } from './config/lib';
import { reactConfig } from './config/react';
import { angularConfig } from './config/angular';
import { mainConfig } from './config/main';
import { jestConfig } from './config/jest';
import { prettierConfig } from './config/plugins/prettier';
import { promiseConfig } from './config/plugins/promise';
import { typescriptConfig } from './config/plugins/typescript';
import { importConfig } from './config/plugins/import';
import { baseConfig } from './config/plugins/base';
import { tramvaiConfig } from './config/plugins/tramvai';
import { rules } from './config/rules';
import { testFilesConfig } from './config/plugins/testFiles';

module.exports = {
  configs: {
    // базовые блоки
    app: appConfig,
    lib: libConfig,

    // дополнительнные блоки
    react: reactConfig,
    angular: angularConfig,
    tramvai: tramvaiConfig,
    jest: jestConfig,

    // внутренние блоки
    main: mainConfig,
    promise: promiseConfig,
    prettier: prettierConfig,
    typescript: typescriptConfig,
    base: baseConfig,
    import: importConfig,
    testFiles: testFilesConfig,
  },

  rules,
};
