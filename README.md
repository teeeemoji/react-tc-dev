#react-tc-dev

##框架说明
- 使用 react +  mobx + react-router 作为基础框架进行单页面应用开发
(实际也可以开发多页面应用)

- 使用 less 优雅地进行样式开发

- 使用 webpack 进行打包,并添加了热加载功能

- 额外: 使用 express 包裹这 webpack-dev-middleware,使用简单的方法完成 mock 数据的

##开发相关:
- ajax 使用 superagent,并且是 bluebird 包装过的 superagent
- 页面编写避免使用 JSX (维护困难),转而使用 react-helper(h)


```bash
/
├── config              # 所有配置文件
│    ├── index.js       # 主配置文件,包含大量绝对路径
│    └── webpack        # 各种各样的 webpack 配置
│       ├── webpack.config.dev.js       # 主要的 webpack 配置,供自己封装的 dev-server 使用
│       ├── webpack.config.prod.js      # 生产环境的 webpack 配置,暂时空着
│       ├── webpack.dev-server.js
│       ├── webpack.entry.js
│       ├── webpack.module.js
│       ├── webpack.output.js
│       ├── webpack.plugins.js
│       └── webpack.resolve.js
│
└── src
    ├── backend                 # 后端代码,目前包含dev-server/mock 数据配置
    │   ├── dev-server
    │   │   ├── mock-router.js  # 实现 mock 数据的路由处理文件
    │   │   └── server.dev.js   # dev-server starter
    │   └── mock                # mock 数据及配置
    │       ├── mock-data       # mock 数据及处理方法防止目录
    │       │   ├── sample-mock-1.js     # mock 数据文件,格式参照模板
    │       │   └── sample-mock-2.js
    │       └── mock.js         # mock 配置文件,配置很简单
    ├── design                  # 用于放置自己设置的 component/svg 等,暂时空置
    │   └── components
    └── frontend                # 前端代码目录
        ├── Main                # 主模块目录(作为模块模板进行参照)
        │   ├── App.js          # 主模块 App 组件
        │   ├── IndexPage       # 某个页面
        │   │   ├── index.js    
        │   │   ├── model
        │   │   │   └── mode.js
        │   │   ├── page.use.less
        │   │   └── state
        │   │       └── state.js
        │   ├── LayoutHeader    # 某个页面
        │   │   ├── index.js
        │   │   ├── model
        │   │   │   └── mode.js
        │   │   ├── page.use.less
        │   │   └── state
        │   │       └── state.js
        │   ├── LoginPage       # 登录页面(作为页面模板进行参照)
        │   │   ├── index.js    # 页面入口
        │   │   ├── model       # store 数据目录
        │   │   │   └── mode.js # store 数据文件
        │   │   ├── page.use.less   # 页面级别的样式表
        │   │   └── state       # 页面配置
        │   │       └── state.js
        │   ├── app-states.js   # 模块顶级 store
        │   ├── index.js        # 主模块入口
        │   ├── modules-styles.use.less # 模块级别的样式表
        │   └── routes.js       # 主模块路由
        └── common              # 公共目录
            ├── components      # 项目公共组件
            │   ├── basic       # 基础组件
            │   └── complex     # 基础组件进行组合的复杂组件
            ├── style           # 公共样式
            │   ├── common.less # 公共样式
            │   ├── global.less # 放置less 全局变量
            │   ├── reset.less  # reset 样式表,使用 normalize.css
            │   └── utils.less  # utils样式,如 clearfloat
            └── utils           # 工具,helper 类
                ├── agent.js    # 页面请求的代理
                ├── ajax-agent.js   # 页面请求代理的代理
                ├── h.js        # reack-helper
                └── urlUtils.js # urlUtil
```