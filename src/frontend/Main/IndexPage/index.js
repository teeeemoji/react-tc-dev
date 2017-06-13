import React from 'react';
import style from './page.use.less'
import PageState from './state/state';
import {observer, inject} from 'mobx-react';

import {DatePicker} from 'antd';

import DevTools from 'mobx-react-devtools'

@observer
class Movie extends React.Component {

    constructor(props) {
        super(props);
    }

    local = {
        page: new PageState()
    };

    componentWillMount() {
        style.use();
        this.local.page.initPage();
    }

    componentWillUnmount() {
        style.unuse();
        this.local.page.exitPage();
    }

    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className={style.pageStyle}>
                ztc55666666666745745676547474<DatePicker/>
            </div>
        );
    }
}

export default Movie;