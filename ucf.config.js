require('@babel/polyfill');
/**
 * UCF配置文件 更多说明文档请看 https://github.com/iuap-design/ucf-web/blob/master/packages/ucf-scripts/README.md
 */
const config = require('./webpack.config');

module.exports = (env, argv) => {
    let openSource_map = false;
    if (env === 'development')  {
        openSource_map = true
    }
    return {
        // 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
        // bootList: true,
        // 启动这两个模块，启动调试、构建
        bootList: true,
        // 代理的配置
        proxy: [
            {
                enable: true,
                headers: {
                    "Referer": "http://172.20.52.215:8888"
                },
                //要代理访问的对方路由
                router: [
                    '/iuap_walsin_demo',
                    '/wbalone',
                    '/iuap-saas-message-center/',
                    '/iuap-saas-filesystem-service/',
                    '/eiap-plus/',
                    '/newref/',
                    '/print_service/',
                    '/iuap-print/'
                ],
                url: 'http://172.20.52.215:8888'
            }
        ],
        // 全局环境变量
        global_env: {
            __MODE__: JSON.stringify(env),
            GROBAL_HTTP_CTX: JSON.stringify("/iuap_walsin_demo"),
            'process.env.NODE_ENV': JSON.stringify(env)
        },
        // 别名配置
        alias: config.resolve.alias,
        // 构建排除指定包
        externals: {
            //'tinper-bee': 'TinperBee'
        },
        // 加载器Loader
        loader: [],
        // 调试服务需要运行的插件
        devPlugins: [],
        // 构建服务需要运行的插件
        buildPlugins: [],
        source_map: openSource_map
    }
}