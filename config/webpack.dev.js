const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 9090,
        compress: true,
        historyApiFallback: true,
        open: true,
    },
})
