require('@babel/polyfill');
/**
 * UCF配置文件 更多说明文档请看 https://github.com/iuap-design/ucf-web/blob/master/packages/ucf-scripts/README.md
 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

var bootList = [
    'masterdetail-many',
    'masterdetail-one',
    'singletable-inline-edit',
    'singletable-popup-edit',
    'singletable-query',
    'tree',
    'ref-demo'
]

module.exports = (env, argv) => {
    // let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    return {
        context: 'iuap-pap-demo-fe',
        // 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
        // bootList: true,
        // 启动这两个模块，启动调试、构建
        bootList:bootList,
        // 代理的配置
        proxy: [
            {
                enable: true,
                headers: {
                    "Referer": "https://mock.yonyoucloud.com/mock/535"
                },
                //要代理访问的对方路由
                router: ["/wbalone/appmenumgr/newSidebarList"],
                url: 'https://mock.yonyoucloud.com/mock/535'
            },
            {
                enable: true,
                headers: {
                    "Referer": "http://172.20.52.123"
                },
                //要代理访问的对方路由
                router: [
                    '/iuap-pap-demo-be',
                    '/wbalone',
                    '/iuap-saas-message-center/',
                    '/iuap-saas-billcode-service/',
                    '/iuap-saas-filesystem-service/',
                    '/eiap-plus/',
                    '/newref/',
                    '/print_service/',
                    '/iuap-print/',
                    '/pap_basedoc',
                    '/iuapmdm',
                    '/ubpm-web-process-designer'
                ],
                url: 'http://172.20.52.123'
            }
        ],
        
        // 全局环境变量
        global_env: {
            __MODE__: JSON.stringify(env),
            GROBAL_HTTP_CTX: JSON.stringify("/iuap-pap-demo-be"),
            'process.env.NODE_ENV': JSON.stringify(env),
            'process.env.STATIC_HTTP_PATH':env == 'development'?JSON.stringify("/static"):JSON.stringify("../static")
        },
        static: 'ucf-common/src',
        // 别名配置
        alias: {
            components: path.resolve(__dirname, 'ucf-common/src/components/'),
            utils: path.resolve(__dirname, 'ucf-common/src/utils/'),
            static: path.resolve(__dirname, 'ucf-common/src/static/'),
            styles: path.resolve(__dirname, 'ucf-common/src/styles/'),
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "tinper-bee": "TinperBee",
            "prop-types": "PropTypes"
        },
        
        // 构建服务需要运行的插件
        buildPlugins: [
            // new BundleAnalyzerPlugin()
            new CopyWebpackPlugin([
                { 
                from: __dirname+'/ucf-common/src/static/', 
                to: __dirname+'/ucf-publish/iuap-pap-demo-fe/static/' }
            ]),
            // new HtmlWebpackPlugin(),
            // new HtmlWebpackPlugin({  // Also generate a test.html
            //     // filename: 'aaaa.html',
            //     // template: 'src/assets/test.html',
            //     // template: path.join(__dirname, 'default_index.ejs'),

            //     template: __dirname+'/ucf-publish/iuap-pap-demo-fe/index.ejs',
            //     filename:__dirname+'/ucf-publish/iuap-pap-demo-fe/index.html',
            //     inject:false,
            //     static:['aa/a.js','b/cc.js']
            // })
            // new CopyWebpackPlugin([

            // ])
        ],
        devPlugins: [
        ],
        open_source_map: false,
        res_extra:true
    }
}
