/**
 * Created by zhangtingcen on 2017/6/9.
 */
const path = require('path');
const config = require('../index');

const entry = {
    app: [
        // 热加载配置,在配置文件中配置
        config.HotMiddleWareConfig,
        // 入口文件,在配置文件中配置
        path.resolve(config.indexJSFile)]
};

module.exports = entry;