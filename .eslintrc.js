module.exports = {
    "extends": [
        "airbnb",
        "prettier"
    ],
    "env": {
        "jest": true,
        "browser": true,
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
};
