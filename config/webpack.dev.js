const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.[hash:8].js'
    },
    module: {
        rules: [
            { 
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        compress: true,
        historyApiFallback: true,
        port: 9000
    },
    mode: 'development'
};