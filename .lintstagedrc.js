module.exports = {
    'packages/**/**/*.{ts,js}': ['eslint --fix'],
    '**/README.md': [
        files => files.map(file => `markdown-toc -i ${file}`), // single file per command
        'prettier --write',
        'git add' // fixes 'Changes not staged for commit'
    ],
    '{eslint-plugin,linters}/**/*.{md,json,template.html}': ['prettier --write --loglevel=warn']
}
