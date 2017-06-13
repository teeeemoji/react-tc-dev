/**
 * Created by zhangtingcen on 2017/6/12.
 */

const path = require('path');
const config = require('../index');

const resolve = {
    alias: {
        '@common': path.join(config.frontPath, 'common')
    }
};

module.exports = resolve;