const fs = require('fs');
const {join} = require('path');

/**
 * Find lerna.json with path.
 * @param path
 */
const findLernaJson = path => {
    return fs.readFileSync(join(path, 'lerna.json')).toString();
};

/**
 * Get version field within lerna.json
 * @param path
 */
const getUnifiedVersion = path => {
    const packageJson = findLernaJson(path);

    return JSON.parse(packageJson).version;
};

module.exports.findLernaJson = findLernaJson;
module.exports.getUnifiedVersion = getUnifiedVersion;
