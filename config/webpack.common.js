const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
let env = process.env.NODE_ENV;
env = env ? env.toLocaleLowerCase() : 'dev';

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist/' + env),
        chunkFilename: 'static/js/[name].[hash:8].bundle.js',
        filename: 'static/js/[name].[hash:8].js',
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(sa|sc|c)ss$/,
                include: [/src/],
                exclude: [/node_modules/, /assets/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        },
                    },
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        },
                    },
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
                            outputPath: 'static/image',
                        }
                    }
                ]
            },

            // 字体处理
            {
                test: /\.(woff|eot|ttf)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 10,
                            outputPath: 'static/font',
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
            filename: 'static/css/[name].[hash].css',
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(env === 'dev'),
            __SQA__: JSON.stringify(env === 'sqa'),
            __PROD__: JSON.stringify(env === 'prod'),
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'app',
                    test: /\.scss$/,
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendor',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'common',
                },
            }
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};