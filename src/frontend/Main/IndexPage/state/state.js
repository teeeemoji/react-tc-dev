/**
 * Created by zhangtingcen on 2017/6/6.
 */
import React from 'react';
import PageMode from '../model/mode';

import agent from '../../../common/utils/ajax-agent';

export default class {
    constructor() {
        this.mode = new PageMode();
    }

    initPage() {
        this.fetchSomething(1);
    }

    exitPage() {

    }

    /**
     * 一个ajax请求样例
     *
     * @param {number} id 一个参数
     * @return {Request|*|Promise.<*>|Bluebird.Promise} 返回结果
     */
    fetchSomething(id) {
        return agent.post('/api/data2.json', {
                data: {id}
            })
            .then(response => {
                console.log(response)
            });
    }
}