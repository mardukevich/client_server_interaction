// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/authorization_server.ts',
  target: 'node', 
  output: {
    filename: 'authorization_server.js', // Output server bundle file
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
