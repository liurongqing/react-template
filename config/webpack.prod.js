const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['./dist'], { root: path.resolve(__dirname, '../'), verbose: true }),
    new UglifyJsPlugin({
      exclude: /\/node_modules/,
      uglifyOptions: {
        warnings: false,
        output: {
          comments: false,
        },
      },
    }),
    new OfflinePlugin(),
  ],
});
