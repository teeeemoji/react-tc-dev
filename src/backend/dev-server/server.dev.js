/**
 * Created by zhangtingcen on 2017/6/9.
 */
const path = require('path');
const config = require('../../../config');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require(config.compiler.webpackFiles.devWebpack);
const compiler = webpack(webpackConfig);

const express = require('express');
const app = express();

const mockRouter = require('./mock-router');

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        color: true
    }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(mockRouter);

app.get('/', function (req, res) {
    res.sendFile(config.indexHTMLFile);
});


app.listen(3000, () => {
    console.log('listening on 3000');
});