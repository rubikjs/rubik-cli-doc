# 指南

## 目标
::: tip
快速搭建`稳定，友好，系统化`的web开发框架，方便开发者用一套框架就可以开始`Pure(原生)|Vue|React|Electron|Libraries(类库)`的开发
:::

## 初始化项目

```bash
$ npx create-rubik-app my-app
```

## 命令列表

```bash
  rubik build          Build.
  rubik check-package  Check the package.json file is changed from pre version.
  rubik commitlint     Commit lint.
  rubik lint           Eslint.
  rubik serve          Start a http server.
  rubik stylelint      Style lint.
```

## 统一的目录结构



### 应用目录

```
├── src
│       │
│       ├── page
│       │       ├── app
│       │       │       ├── index.html
│       │       │       ├── index.js
│       │       │       ├── style.css
│       │       │       └── ...
│       │       ├── home
│       │       
│       ├── static (will be copied to the dist directory directly)
│       │       └── jquery
│       │
│       │
│       ├── any-other
│
│
├── mock
│       └── index.js
│
│
├── rubik.config.js (optional)
├── webpack.config.js (optional)
├── .eslintrc.js (optional)
├── .stylelintrc.js (optional)
├── commitlint.config.js (optional)
│

```

### 类库目录

```
├── demo
│       ├── index.html
│       └── index.js
├── src
│       └── index.js
│
├── same as app

```

## 配置
开发者可以根据项目需要，自定义相关模块的配置
### 应用配置
`rubik.config.js`

```js
module.exports = {
  "output": "dist",
  "staticName": "static",
  "templateName": "",
  "publicPath": "/",
  "cdnPublicPath": "//",
  "hashLength": 7,
  "includePage": [],
  "vendor": [],
  "host": "0.0.0.0",
  "port": 8081,
  "pageTemplateWithoutHtmlLoader": false,
  "reInstallOnPkgChange": true,
  "notReInstallOnPkgChangeFeatures": [],
  "plugins": []
}
```

### eslint
`.eslintrc.js` 参考[eslint](https://eslint.org/docs/user-guide/configuring)

```js
module.exports = {
  "rules": {
    "no-new": "error"
  }
}
```

### stylelint
`.stylelintrc.js` 参考[stylelint](https://stylelint.io/user-guide/configuration#rules)

```js
module.exports = {
  rules: {
    'max-nesting-depth': 4,
    'selector-max-type': 2,
    'selector-max-class': 3,
    'selector-max-id': 1
  }
}
```

### commitlint
`commitlint.config.js` 参考[commitlint](https://github.com/conventional-changelog/commitlint#config)

```js
module.exports = { extends: ['@commitlint/config-angular'] }
```

### webpack
`.eslintrc.js` 参考[webpack](https://webpack.js.org/concepts/configuration/)

```js
module.exports = {
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } }
}
```

## 插件
你也可以自己写插件来扩展现有的命令  
每一个插件都是一个npm包，并且都要遵循下面的规则
- 以 `rubik-cli-plugin-`为前缀命名
- 返回的是一个继承`Command`的子类, 参考[common-bin](https://github.com/node-modules/common-bin)

以一个`rubik-cli-plugin-hello-world`为例
```js
module.exports = ({ Command }, options) => {
  class SubCommand extends Command {
    async run () {
      console.log(options)
    }
    get description () {
      return 'hello world'
    }
  }
  return SubCommand
}
```
应用配置中开启插件
```js
plugins: [{
    name: 'hello-world',
    options: {
      foo: 'bar'
    }
  }]
```
