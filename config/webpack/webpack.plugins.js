/**
 * Created by zhangtingcen on 2017/6/9.
 */

const webpack = require('webpack');

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        '__PRODUCTION__': false,
        '__DEVELOPMENT__': true,
        '__DEVTOOLS__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
];

module.exports = plugins;