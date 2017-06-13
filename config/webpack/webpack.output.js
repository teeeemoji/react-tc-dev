/**
 * Created by zhangtingcen on 2017/6/9.
 */
const path = require('path');
const config = require('../index');
const output = {
    path: config.distPath,
    filename: '[name].bundle.js',
    publicPath: '/'
};

module.exports = output;