const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const dev = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'static/js/[name].dev.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8102,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const prod = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js'
  }
}

const common = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  plugins: [
    new CleanWebpackPlugin([ path.relative(__dirname, 'dist') ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      env: process.env.NODE_ENV
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"production"'
      },
      __DEV__: false
  })
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}

module.exports = (env = {}) => {
  let config = webpackMerge(dev, common);

  if (env.prod) {
    config = webpackMerge(prod, common);
  }

  return config;
}
