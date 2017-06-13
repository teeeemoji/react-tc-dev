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
    }

    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
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
                lala a fdaf  header<DatePicker/>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default Movie;