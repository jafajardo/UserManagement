const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development', 
  entry: {
    bundle: './src/index',
    vendor: [
      'axios', 
      'react', 
      'react-dom', 
      'redux', 
      'react-redux', 
      'react-router', 
      'redux-thunk']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }, 
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }, 
  devServer: {
    historyApiFallback: true
  }, 
}

module.exports = config;