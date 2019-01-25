## 按钮权限组件说明文档

### 使用

首先导入组件

- `import ButtonRoleGroup from 'components/ButtonRoleGroup'`

然后使用，把我们的按钮传入到组件内部

```js
<ButtonRoleGroup
    funcCode="singletable-popupedit"
    onComplete={() => console.log('按钮权限加载完成')}
>
    <Button iconType="uf uf-plus" className="ml8"
        onClick={() => {
            _this.onClickShowModel(0);
        }}
    >新增</Button>
    <Button iconType="uf uf-pencil" className="ml8"
        onClick={() => {
            _this.onClickShowModel(1);
        }}
    >修改</Button>
    <Button iconType="uf uf-list-s-o" className="ml8"
        onClick={() => {
            _this.onClickShowModel(2);
        }}
    >详情</Button>
    <Button
        iconType="uf-del"
        className="ml8"
        onClick={_this.onClickDel}>删除</Button>
</ButtonRoleGroup>
```

### 设置

设置我们页面对应的按钮权限编码`funcCode`

```js
<ButtonRoleGroup funcCode="这里是你的funcCode编码">
```

在把我们的按钮加上这样的一个props:

> 注意：这里的role是需要和后端人员对接清楚具体是什么含义，也就是auth接口返回的那个数据
> [ "update", "check", "add", "delete" ]

`role="你的按钮角色"`

```js
<Button
        role="delete"           //修改此处
        iconType="uf-del"
        className="ml8"
        onClick={_this.onClickDel}>
        删除
</Button>
```


### API

参数 | 类型 | 说明
---|---|---
url | string | 请求的权限接口地址
funcCode | string | 权限页面的编码，需要跟后端对接
className | string | 样式
onComplete | function | 按钮权限接口加载完毕后的回调
onError | function | 按钮权限接口后端返回不是一个数组的错误回调