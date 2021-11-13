const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = [
    {
        mode: 'production',
        devtool: false,
        entry: path.resolve(__dirname, "src/js/yellow-blob-picker.js"),
        output: {
            path: path.resolve(__dirname, 'dist/js'),
            filename: 'yellow-blob-picker.js'
        },
        externals: [
            {
                jquery: 'jQuery',
            }
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        performance: {
            hints: false
        }
    },
    {
        mode: 'production',
        devtool: false,
        entry: path.resolve(__dirname, "src/scss/yellow-blob-picker.scss"),
        output: {
            path: path.resolve(__dirname, 'dist/css')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'yellow-blob-picker.css'
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                }
            }),
            new FixStyleOnlyEntriesPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
                {
                    test: /\.(ttf|svg|woff|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: '../fonts/',
                                publicPath: path => '../fonts/' + path
                            }
                        }
                    ]
                }
            ]
        },
        performance: {
            hints: false
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        },
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        }
    }
];