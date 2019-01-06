const path = require('path');

module.exports = {
  entry: {
    'javascript/build.js': './src/index.jsx',
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(nodemodules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
};
