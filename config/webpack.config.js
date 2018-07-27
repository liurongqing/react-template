const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[hash:8].bundle.js',
        filename: '[name].[hash:8].js',
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                // include: [/src/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true
                            // localIdentName: '[name]-[local]_[hash:4]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            // 公用样式
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     include: [/assets/],
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 outputStyle: 'expanded',
            //             },
            //         },
            //     ],
            // },

        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
    ],
    devServer: {
        port: 9090,
        compress: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    mode: 'development',
};