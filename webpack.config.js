const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        web: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'rectangle.js',
        library: 'Rectangle',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2017']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: 'Version= ' + require('./package.json').version,
            raw: false, entryOnly: true,
        })
    ]
};
