const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4200
    },
    devtool: 'source-map',
    target: 'web',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}