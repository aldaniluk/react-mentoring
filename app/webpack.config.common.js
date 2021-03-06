const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: ''
            }
        }, 
        'css-loader'
    ];

    if(extra){
        loaders.push(extra);
    }

    return loaders;
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [
            '.js', '.jsx', '.json'
        ],
        alias: {
            '@globalComponents': path.resolve(__dirname, './src/pages/components/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@store': path.resolve(__dirname, './src/store/'),
            '@services': path.resolve(__dirname, './src/services/'),
            '@models': path.resolve(__dirname, './src/models/'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
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
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
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