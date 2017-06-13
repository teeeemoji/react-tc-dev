/**
 * @file --
 */

import {hashHistory} from 'react-router';
import _ from 'lodash';

// path 的 mapping 还得考虑不同模块下的跳转问题
let pathMappings = {};

let context = window.APP_CONTEXT || '';


let urlUtils = {
    paramStr(params = {}) {
        let queryString = [];
        for (let key in params) {
            if (typeof params[key] !== 'undefined') {
                queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
            }

        }
        return queryString.length ? '?' + queryString.join('&') : '';
    },
    linkPrivate(path, params) {
        params = params || {};
        path = pathMappings[path] ? pathMappings[path] : path;
        return (path.substr(0, 1) === '/' ? '#' : '#/') + path + urlUtils.paramStr(params);
    },
    link(path, params, module) {
        if (typeof module === 'undefined') {
            return urlUtils.linkPrivate(path, params);
        }
        params = params || {}
        return context + '/pages/' + module + '.html' + urlUtils.linkPrivate(path, params);
    },

    api(path) {
        return context + path;
    },
    jump(path, params, module) {
        location.href = urlUtils.link(path, params, module);
    },

    // 用于从 state sync 到 url 中
    seqTimestamp: 0,
    SYNC_TIMEOUT: 50,
    isSeqInSyncCycle(seq) {
        if (!!this.seqTimestamp && new Date().getTime() - this.seqTimestamp < this.SYNC_TIMEOUT) {
            return true;
        }
        return false;
    },

    innerPushLink(link) {
        this.seqTimestamp = new Date().getTime();
        hashHistory.push(link);
    },

    syncParams(path, params, module) {
        if (!path) {
            path = this.location.pathname;
        }
        let newParams = Object.assign({}, this.location.query);

        for (let key in params) {
            newParams[key] = params[key];
        }
        this.location.query = newParams;
        let link = urlUtils.link(path, newParams, module, true);

        this.innerPushLink(link);
    },

    open(options) {
        let {
            showBlankWaiting = false,
            waitingUrl,

            path,
            params,
            module,

            targetPopup
        } = options;

        if (targetPopup) {
            targetPopup.location.href = urlUtils.link(path, params, module);
            return targetPopup;
        }
        else {
            let popup;
            if (waitingUrl) {
                popup = window.open(waitingUrl);
            }
            else if (showBlankWaiting) {
                popup = window.open('');
            }
            else {
                popup = window.open(urlUtils.link(path, params, module));
            }

            return popup;
        }
    },

    /**
     * 返回页面顶部, 页面跳转时需要调用
     */
    backToTop() {
        window.scrollTo(0, 0);
    },

    /**
     * modal内部跳至顶部, 这个可能需要根据实际的 modal 情况改写
     * @param {string} className 类名称
     */
    modalToTop(className) {
        const modal = document.querySelector(className ? '.' + className + ' .modal-body' : '.modal-body');
        if (modal) {
            modal.scrollTop = 0;
        }
    },

    getContextRootPath() {
        const contextLength = context.length;
        return contextLength && context.lastIndexOf('/') === contextLength - 1
            ? context : context + '/';
    }
};

urlUtils.innerPushLink = _.debounce(urlUtils.innerPushLink, 30);

hashHistory.listen(function (location) {
    urlUtils.location = location;
});

const formalizeContextPath = contextPath => {
    if (contextPath) {
        if (/\/$/.exec(contextPath)) {
            contextPath = contextPath.substr(0, contextPath.length - 1);
        }
        if (!/^\//.exec(contextPath)) {
            contextPath = '/' + contextPath;
        }
    }
    if (contextPath === '/') {
        return '';
    }
    return contextPath;
};

if (context === '${CONTEXT}') {
    context = '';
} else {
    context = formalizeContextPath(context);
}

export default urlUtils;