const core = require('@actions/core');
const {getUnifiedVersion} = require('./getUnifiedVersion');

/**
 * Forked from https://github.com/tyankatsu0105/read-package-version-actions
 */
async function run() {
    try {
        const path = core.getInput('path');

        core.debug(`Load lerna.json at ${path}`);

        const result = getUnifiedVersion(path);

        core.debug(`set output: version: ${result}`);
        core.setOutput('version', result);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
