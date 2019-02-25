const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const dev = {
  mode: 'development',
  output: {
    filename: '[name].dev.js',
    chunkFilename: '[name].dev.chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

const prod = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
  ]
}

module.exports = env => {
  const envConfig = env.prod ? prod : dev;

  return webpackMerge(
    envConfig,
    {
      entry: ['webpack-hot-middleware/client?path=dist&noInfo=true&reload=true', path.resolve(__dirname, 'index.js')],
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'index.html')
        }),
        new VueLoaderPlugin()
      ],
      optimization: {
        // SplitChunks 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
        // 在实际代码中的 () => import(/* webpackChunkName: 'app.async' */ './Async.vue')这类写法 产生的 chunk 不依赖此插件
        splitChunks: {
          chunks: 'all'
        }
      }
    }
  )
}
