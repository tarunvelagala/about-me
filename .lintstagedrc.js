module.exports = {
    '**/*.{js,jsx,ts,tsx}': ['npm run format:fix', 'npm run lint:fix'],
    '**/*.{json,css,scss,md}': ['npm run format:fix'],
};
