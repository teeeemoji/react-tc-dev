/**
 * Created by zhangtingcen on 2017/6/9.
 */
const config = require('../index');
const devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: config.distPath,
    port: 8080,
    stats: {
        colors: true
    }
};

module.exports = devServer;