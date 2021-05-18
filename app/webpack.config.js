const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.config.common');
const DevConfig = require('./webpack.config.dev');
const ProdConfig = require('./webpack.config.prod');

const ServerConfig = require('./webpack.config.server');

module.exports = 
[
    process.env.NODE_ENV === 'development'
        ? merge(CommonConfig, DevConfig)
        : merge(CommonConfig, ProdConfig),
    ServerConfig
]