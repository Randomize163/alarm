module.exports = {
    bracketSpacing: true,
    jsxBracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    tabWidth: 4,
    overrides: [
        { files: '*.json', options: { tabWidth: 2 } },
        { files: '*.yml', options: { tabWidth: 2 } },
    ],
};
