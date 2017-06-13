/**
 * Created by zhangtingcen on 2017/5/22.
 */

// import App from '/App';
import LayoutHeader from './LayoutHeader';

export default {
    path: '/',
    indexRoute: {
        onEnter(nextState, replace) {
            replace('index');
        }
    },
    childRoutes: [
        {
            path: '/index',
            getComponent(location, callback) {
                require.ensure([], () => {
                    let Page = require('./IndexPage').default;
                    callback(null, Page);
                });
            }
        },
        {
            path: '/login',
            getComponent(location, callback){
                require.ensure([], () => {
                    let Page = require('./LoginPage').default;
                    callback(null,Page)
                })
            }
        }
    ]
};