module.exports = {
    'packages/**/**/*.{ts,js}': ['eslint --fix'],
    '**/README.md': ['prettier --write', 'git add'],
    '**/*.{md,json,template.html}': ['prettier --write --loglevel=warn'],
};
