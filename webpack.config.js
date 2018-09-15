const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
  resolve: {
    extensions: ['*', '.wasm', '.mjs', '.js', '.json', '.jsx'],
  },
};
