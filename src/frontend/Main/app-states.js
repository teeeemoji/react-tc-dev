/**
 * @file APP_NAME 用于
 * @author YOURNAME
 */

import {observable, action} from 'mobx';

export default class AppState {
    /**
     * 业务模块代码
     */
    @observable appTitle = 'Module';

    @action setProps(values) {
        for (let key in values) {
            this[key] = values[key];
        }
    }
}
