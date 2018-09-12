module.exports = {
<<<<<<< HEAD
    "extends": [
        "airbnb",
        "prettier"
    ],
    "env": {
        "jest": true,
        "browser": true,
=======
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
>>>>>>> 80fdf5900d2f87f530b0d74ac2377a78e670223e
    },
  },
  "env": {
    "jest": true,
    "browser": true,
  },
  "plugins": [
      "prettier",
      "react",
    ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error", 
      { "devDependencies": true },
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always",
      }
    ]
  }
};
