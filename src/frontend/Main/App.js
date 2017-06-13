import React from 'react';
import {hashHistory, Router} from 'react-router';
import {Provider} from 'mobx-react';

// 模块级别的 store
import app from './app-states';

// 模块路由配置
import routes from './routes';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider app={app}>
                <Router routes={routes} history={hashHistory}/>
            </Provider>
        );
    }
}