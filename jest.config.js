module.exports = {
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!*.js',
    '!.*.js',
    '!**/src/server/database/utils/**',
    '!**/public/**',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
};
