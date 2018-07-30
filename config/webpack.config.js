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
            {
                test: /\.(sa|sc|c)ss$/,
                include: [/src/],
                exclude: [/node_modules/,/assets/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            // 公用样式
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: [/node_modules/],
                include: [/assets/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                        },
                    },
                ],
            },

            // 图片处理
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 1000,
                        }
                    }
                ]
            },

            // 字体处理
            {
                test: /\.(woff|eot|ttf)(\?t=(.*?))$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 10000, //
                        }
                    }
                ]
            }
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
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        },
    },
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