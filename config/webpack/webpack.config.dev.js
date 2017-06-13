/**
 * Created by zhangtingcen on 2017/6/9.
 */
const entry = require('./webpack.entry');
const output = require('./webpack.output');
const plugins = require('./webpack.plugins');
const webModule = require('./webpack.module');
const webResolve = require('./webpack.resolve');
const config = {
    entry: entry,
    output: output,
    module: webModule,
    plugins: plugins,
    resolve: webResolve,
    node: {
        dns: 'empty',
        net: 'empty'
    }
};
module.exports = config;