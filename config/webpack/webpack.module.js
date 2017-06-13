/**
 * Created by zhangtingcen on 2017/6/9.
 */
const webpackModule = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-0'
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        ["import", { libraryName: "antd", style: "css" }]
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            exclude: [
                /\.mod\.css$/,
                /\.use(able)?\.css$/,
            ],
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            ]
        },
        {
            test: /\.((use(able)?)|(mod))\.css$/,
            use: [
                'style-loader/useable',
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            ]
        },
        {
            test: /\.less$/,
            exclude: [
                /\.mod\.less$/,
                /\.use(able)?\.less$/,
            ],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }
            ]
        },
        {
            test: /\.((use(able)?)|(mod))\.less$/,
            use: [
                {
                    loader: 'style-loader/useable'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }
            ]
        },
    ]
};

module.exports = webpackModule;