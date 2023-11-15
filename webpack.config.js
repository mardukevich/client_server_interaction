// webpack.config.js
const path = require('path');

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
  entry: './src/client/scripts/index.tsx',
  target: 'web', 
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
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
