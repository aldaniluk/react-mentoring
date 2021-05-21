const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/server.jsx',
    output: {
        path: path.resolve(__dirname, 'dist-server'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@globalComponents': path.resolve(__dirname, './src/pages/components/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@store': path.resolve(__dirname, './src/store/'),
            '@services': path.resolve(__dirname, './src/services/'),
            '@models': path.resolve(__dirname, './src/models/'),
        },
    },
    devtool: false,
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },  
    plugins: [
      new CopyWebpackPlugin({
          patterns: [
              {
                  from: path.resolve(__dirname, 'src/assets/imgs/favicon.ico'),
                  to: path.resolve(__dirname, 'dist/imgs')
              }
          ]
      })
  ],
  module: {
    rules: [
        {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ]
}
}
