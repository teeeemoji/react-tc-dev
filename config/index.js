/**
 * Created by zhangtingcen on 2017/6/9.
 */

var path = require('path');

var base = path.resolve(__dirname,'../');
var relativePath = path.resolve(__dirname);

const config = {
    basePath: base,
    distPath: path.join(base,'dist'),
    srcPath: path.join(base,'src'),
    frontPath: path.join(base,'src/frontend'),
    indexHTMLFile: path.join(base,'dist/index.html'),
    indexJSFile: path.join(base,'src/frontend/Main/index.js'),
    HotMiddleWareConfig: 'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000',
    compiler: {
        webpackFiles: {
            devWebpack: path.join(relativePath,'./webpack/webpack.config.dev.js'),
            entry: path.join(relativePath,'./webpack/webpack.entry.js'),
            output: path.join(relativePath,'./webpack/webpack.output.js'),
            module: path.join(relativePath,'./webpack/webpack.module.js'),
            plugins: path.join(relativePath,'./webpack/webpack.plugins.js'),
            devServer: path.join(relativePath,'./webpack/webpack.dev-server.js'),
            resolve: path.join(relativePath,'./webpack/webpack.resolve.js'),
        },
        devMiddleware: {
            stats: {
                color: true,
                quiet: false
            }
        }
    },
    mock: {
        router: '',
        config: '',
    }
};

module.exports = config;