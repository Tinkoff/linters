const extensions = require('../consts/extensions');

const tsOnlyFiles = `*{${extensions.ts.join(',')}}`;

exports.tsOnly = config => ({
    overrides: [Object.assign({}, config, {files: tsOnlyFiles})],
});
