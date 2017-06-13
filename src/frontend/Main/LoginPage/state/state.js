/**
 * Created by zhangtingcen on 2017/6/6.
 */
import React from 'react';
import PageMode from '../model/mode';
import agent from '../../../common/utils/ajax-agent';
import {observable, action, computed} from 'mobx';
import h from '@common/utils/h';
import {Input, Spin} from 'antd';
const InputGroup = Input.Group;
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

    renderLoginBanner() {
        return (
            h.div('login-banner', {},
                this.mode.loginBannerTitle
            )
        );
    }

    renderLoginBox() {
        let usernameInputConfig = {
            placeholder: 'username',
            defaultValue: '',
            size: 'large',
            onChange: e => this.handleInput('username', e.target.value),
            onPressEnter: value => this.handleEnterKey('username'),
            style: {
                width: '200px'
            }
        };
        let passwordInputConfig = {
            placeholder: 'password',
            defaultValue: '',
            type: 'password',
            size: 'large',
            onChange: e => this.handleInput('password', e.target.value),
            onPressEnter: value => this.handleEnterKey('password'),
            style: {
                width: '300px'
            }
        };
        return (
            h.div('login-box', {},
                h(Spin, 'login-spin', {spinning: this.mode.loginSpinning},
                    h(InputGroup, {compact: true},
                        h(Input, usernameInputConfig),
                        h(Input, passwordInputConfig)
                    )
                )
            )
        )
    }

    @action handleInput(type,value) {
        switch (type){
            case 'username':
                this.mode.username = value;
                break;
            case 'password':
                this.mode.password = value;
                break;
        }
    }

    handleEnterKey(type, value) {
        switch (type) {
            case 'username':
            case 'password':
                this.validateInput();
                this.mode.showSpin();
                break;
            default:
                break;

        }
    }

    validateInput() {
        console.log('username: ' + this.mode.username);
        console.log('password: ' + this.mode.password);
    }
}