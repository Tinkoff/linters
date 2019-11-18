module.exports = {
    extends: [
        './eslint/base/prettier',
    ],
    parserOptions: {
        createDefaultProgram: true, // Allows to work with non-ts files
    },
}
