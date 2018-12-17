const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const dev = {
  mode: 'development',
  devtool: 'eval'
}

const prod = {
  mode: 'production'
}

const common = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: '[name].dev.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].dev.chunk.js',
  },
  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}

module.exports = (env = {}) => {
  let evnConfig = webpackMerge(common)
  
  if (env.prod) {
    evnConfig = webpackMerge(prod, common);
  } else {
    evnConfig = webpackMerge(dev, common);
  }

  return evnConfig;
};
