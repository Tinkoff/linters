module.exports = {
    extends: [
        './eslint/base/prettier',
        './eslint/angular',
    ],
    parserOptions: {
        createDefaultProgram: true, // Allows to work with non-ts files
    },
}
