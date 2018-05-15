const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'production', 
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
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ]
}

module.exports = config;