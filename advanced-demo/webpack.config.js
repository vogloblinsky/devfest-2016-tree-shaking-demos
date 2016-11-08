const webpack = require('webpack'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'build/main.webpack.js',
        libraryTarget: 'umd' //"var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
    },
    devtool: false,
    profile: true
};
