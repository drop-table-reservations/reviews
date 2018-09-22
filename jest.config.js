module.exports = {
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!*.js',
    '!.*.js',
    '!**/server/db/utils/**',
    '!**/public/**',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
};
