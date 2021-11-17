const semver = require('semver');
const { version } = require('../../package.json');

// Breaking rules must me appplied for preversion too
const releaseVersion = version.replace(`-${semver.prerelease(version)}`, '');

module.exports = function breaking({
  since,
  before = 'warn',
  after = 'error',
}) {
  if (semver.gte(releaseVersion, semver.coerce(since.toString()))) {
    return after;
  }

  return before;
};
