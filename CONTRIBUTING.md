## Development

-   Intall deps with `npm run bootstrap`.
-   Run tests with `npm run test:ci`.
-   Follow [Conventional Commits specification](https://conventionalcommits.org/) for every commitmessage.

## Automatic release

All merged PR to `master` branch trigger github actions release and publish workflow.

## Manual release

-   Prepare your release into `master` or `release/*` branch.
-   Run `npm run version` and look what happens.
    -   Or `npm run version -- --no-push` and `git push --follow-tags` you are not sure.
-   Run one of following
    -   `npm run publish:ci`
    -   `npm run publish:ci:beta`

**Pre-release:**

Do the same as above, except this cases:

-   prev version isn't prerelease, but next must be prerelease: `npm run version -- --conventional-prerelease`
-   prev version is prerelease, but next must be release: `npm run version -- --conventional-graduate`
