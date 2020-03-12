const path = require('path');

module.exports = env => ({
  mode: env.NODE_ENV || 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 8000
  }
});