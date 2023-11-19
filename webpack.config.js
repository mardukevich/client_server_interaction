// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [new CleanWebpackPlugin()]
const serverConfig = {
  mode: 'development',
  entry: './src/server/server.ts',
  target: 'node', 
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
};

const clientConfig = {
  mode: 'development',
  entry: './src/view/scripts/index.tsx',
  target: 'web', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  plugins: plugins.concat([
    new HtmlWebpackPlugin({
      template: "src/view/html/index.html",
    })
  ]),
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
};

module.exports = (env, args) => {
  if (env.side == 'server')
    return serverConfig;
  return clientConfig;
}
