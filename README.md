# 基于 UCF 的大型企业应用开发

开发思路：[大型企业应用在前端微应用视角下的思考](https://github.com/iuap-design/blog/issues/306)

---

## 1. 介绍
    典型案例是帮助我们快速交付项目而提供的一套完整的项目级的前端解决案例，内置一些基础组件、基础组件的项目级封装、以及 和页面级的示例代码。

## 2. 启动

> 建议使用项目自带依赖`ucf-scripts`工具使用，使用全局会有安装权限问题[文档见](http://tinper.org/ucf-web/gj-ucfscripts)


通过`npm scripts`启动

```bash

# 开发启动
$ npm start

# 开发构建
$ npm run build
> 如果打包内存溢出、特慢的情况，请更新node v 12 版本，即可解决。
```
内置配置脚本启动
```js
  "scripts": {
    "start": "ucf-scripts start",
    "build": "ucf-scripts build"
  },
  "devDependencies": {
    "ucf-scripts": "1.1.6"
  }
``` 
 
## 3. 访问

启动器`bootList`的模块名字就是我们的访问路径，例如：`ucf-apps/demo-app-org`下的文件夹就是我们运行后的模块路径

```bash
http://127.0.0.1:3000/iuap-pap-demo-fe/singletable-query
```
程序会根据你所设置的`bootList`来扫描启动的，`bootList:true`表示全部开启，`bootList:[]`指定模块启动
```js
// 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
bootList: true,
// 启动这两个模块，启动调试、构建
bootList: [
    'masterdetail-many',
    'masterdetail-one',
    'singletable-inline-edit',
    'singletable-popup-edit',
    'singletable-query',
    'tree',
    'ref-demo'
],
```
```bash
# 典型案例工程模块
ucf-apps
├── masterdetail-many       (B3 一主多子示例)
├── masterdetail-one        (B2 一主一子示例)
├── singletable-inline-edit (A2单表行内编辑示例)
├── singletable-popup-edit (A3 单表弹框编辑示例)
├── singletable-query   (A1单表查询示例)
├── tree                (B1左树右表示例)
└── ref-demo            (参照组件展示)

```

## 4. 项目配置文件说明

UCF微服务前端工程核心配置文件只有一个`ucf.config.js`下面对配置文件说明：

**下面的节点不使用可以删除，做到精简**

```js
module.exports = () => {
    return {
        // 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
        // bootList: true,

        // 启动这两个模块，不启动调试，关闭构建
        bootList: [
            "demo-app-org",
            //"demo-app-staff"
        ],
        // 代理的配置
        proxy: [
            {
                enable: true,
                headers: {
                    // 与下方url一致
                    "Referer": "http://iuap-meger-demo.test.app.yyuap.com"
                },
                //要代理访问的对方路由
                router: [
                    '/iuap'
                ],
                // pathRewrite: {
                //     '^/api/old-path': '/api/new-path', // rewrite path
                //     '^/api/remove/path': '/path' // remove base path
                // },
                url: 'http://iuap-meger-demo.test.app.yyuap.com'
            }
        ],
        // 构建资源的时候产出sourceMap，调试服务不会生效
        source_map: true,
        // 全局环境变量
        global_env: {
            GROBAL_HTTP_CTX: JSON.stringify("/iuap_demo"),
        },
        // 别名配置
        alias: {
            //'ucf-apps': path.resolve(__dirname, 'ucf-apps/')
        },
        // 构建排除指定包
        externals: {
            //'tinper-bee': 'TinperBee'
        },
        // 调试服务需要运行的插件
        devPlugins: [],
        // 构建服务需要运行的插件
        buildPlugins: []
    }
}
```

## 5. 功能配置节点说明


配置项 | 说明 | 默认值 | 可选值 | 备注
---|---|---|---|---
bootList | 启动、构建入口配置，true表示所有模块全部启用，数组参数按需模块使用 | true | `true`,`['app-name','app-demo']` | 一般默认开启所有模块的调试和构建，低配置机器或者只需要开发一块模块的话可以选择性的去配置单独启动
proxy | 开发调试阶段的代理服务配置 | [] | `enable:true` 是否有效代理,false表示关闭. `headers:{}` 设置代理请求的消息头. `router:['/iuap','wbalone']`. `url:'proxy.example.com'`. 本地请求代理对方服务器地址. `pathRewrite:{}`URL重写服务.  `opts:{}` 如内置配置无法满足需求，需要单独设置原生配置 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware#options).  | 数组节点可以配置多条代理服务，通过`enable`来控制启用哪个，针对一些服务器校验头信息例如：`Referer`等就需要设置，其他常规的设置工具已经内置，代理路由`router`表示设置的几个路由访问后会代理到对方服务器上，`url`就是对方服务器地址
global_env | 程序内公共变量 | null | 同webpack4 { key : value } | 接收K、V格式如：{GROBAL_HTTP_CTX: JSON.stringify("/iuap_demo")}
alias | 别名 | null | 同webpack4 {key : value} | 接收K、V格式如：{'ucf-apps': path.resolve(__dirname, 'ucf-apps/')}
externals | 排除指定的包用外部变量代理提升打包性能 | null | 同webpack4 { key : value } | 接收K、V格式如：{'tinper-bee': 'TinperBee'}
loader | 内置加载器无法处理需要单独去设置处理 | [] | 同webpack4 loader | 
devPlugins | 开发环境加载的插件 | [] | 同webpack4 plugin | 开发阶段使用的插件
buildPlugins | 生产环境加载的插件 | [] | 同webpack4 plugin | 生产阶段使用的插件
source_map | 构建资源生产环境的时候产出sourceMap | false | true,false | -

目前内置了alias有以下几个变量

```js
{
    'ucf-apps': path.resolve('.', 'ucf-apps/'),
    'ucf-common': path.resolve('.', 'ucf-common/src/'),
    components: path.resolve('.', 'ucf-common/src/components/'),
    static: path.resolve('.', 'ucf-common/src/static/'),
    utils: path.resolve('.', 'ucf-common/src/utils/')
}

```
当然，使用css、less的时候遇到使用背景图片的时候可以使用以下：

`~static` 等同于上面的 `static`区别构建替换模式
```css
.ucf{
    background:url(~static/images/logo.png)
}
```

## 注意事项

