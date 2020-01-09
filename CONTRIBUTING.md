## Development

-   Intall deps with `npm run bootstrap`.
-   Run tests with `npm run test:ci`.
-   Follow [Conventional Commits specification](https://conventionalcommits.org/) for every commitmessage.

## Release

-   Prepare your release in `master` or `release/*` branch.
-   Run `npm run version` and look what happens.
    -   Or `npm run version -- --no-push` and `git push --follow-tags` if you not sure.
-   Run `npm run publish`.

**Pre-release:**

Do the same as above, except this cases:

-   prev version isn't prerelease, but next must be prerelease: `npm run version -- --conventional-prerelease`
-   prev version is prerelease, but next must be release: `npm run version -- --conventional-graduate`
