module.exports = {
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!*.js',
    '!.*.js',
    '!**/src/database/utils/**',
    '!**/public/**',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
};
