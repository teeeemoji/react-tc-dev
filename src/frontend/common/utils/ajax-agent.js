import agent from './agent';

// 可以在这里扩展你的 agent, 加入 defaultGenericHandlers
const genericSuccessHandler = response => {
    return response;
};

const genericErrorHandler = (error) => {
    console.log('request error= ', error);
};

agent.post = function(url, options = {}) {
    options.genericSuccessHandler = genericSuccessHandler;
    options.genericErrorHandler = genericErrorHandler;
    return agent('post', url, options);
};

agent.get = function(url, options = {}) {
    options.genericSuccessHandler = genericSuccessHandler;
    options.genericErrorHandler = genericErrorHandler;
    return agent('get', url, options);
};

export default agent;
