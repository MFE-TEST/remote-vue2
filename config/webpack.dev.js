const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: '/'
        },
    },
    output: {
        publicPath: "http://localhost:8083/",
    },
    plugins: [
    ],
};

module.exports = merge(commonConfig, devConfig);
