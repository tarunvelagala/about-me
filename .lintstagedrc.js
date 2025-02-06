module.exports = {
    '*.{js,ts}': ['npm run format:fix', 'npm run lint-staged'],
    '*.{json}': ['npm run format:fix'],
};
