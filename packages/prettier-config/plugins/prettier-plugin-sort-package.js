const sortPackageJson = require('sort-package-json');
const { parsers } = require('prettier/parser-babel');

const parser = parsers['json-stringify'];

exports.parsers = {
  'json-stringify': {
    ...parser,
    preprocess(text, options) {
      const processed = parser.preprocess
        ? parser.preprocess(text, options)
        : text;

      const isPackageJson =
        options.filepath &&
        /package\.json$|ng-package\.json$/.test(options.filepath);

      if (isPackageJson) {
        const json = JSON.parse(processed);

        const scripts = JSON.parse(JSON.stringify(json?.scripts ?? {}));
        const sorted = sortPackageJson(json);
        sorted.scripts = scripts; // ignore sorting scripts

        return JSON.stringify(sorted);
      }

      return processed;
    },
  },
};
