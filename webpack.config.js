var path = require('path');

const webpackDev = require('./config/webpack/webpack.config.dev');
const webpackDevServer = require('./config/webpack/webpack.dev-server');
webpackDev.devServer = webpackDevServer;

module.exports = webpackDev;