import React from 'react';
import style from './page.use.less'
import PageState from './state/state';
import {observer, inject} from 'mobx-react';

import h from '@common/utils/h';
import DevTools from 'mobx-react-devtools'

@inject(['app']) @observer
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

    render() {
        return (
            h.div(style.locals.pageStyle, {},
                this.local.page.renderLoginBanner(),
                this.local.page.renderLoginBox()
            )
        );
    }
}

export default Movie;