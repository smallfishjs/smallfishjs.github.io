# 目录结构

## 应用目录结构

为了规范应用的架构和代码质量，smallfish 在框架中大量使用了约定替代代码书写。下面文件夹或者文件注释中包含 * 说明是约定的目录或者文件。

```bash
.
├── config                 // * 应用配置文件夹
│   ├── config.js          // * 应用配置，可配置接口代理，路由，配置开关等
│   └── plugin.js          // * 自定义的 smallfish 插件目录
├── mock                   // * mock 数据存放的文件夹
│   └── *.js               // * 本地模拟数据
├── src                    // 业务代码目录
│   ├── component          // 通用组件，可以通过 '@/component' 别名访问
│   ├── model              // dva model（dva 配置开启时生效）
│   ├── service            // 请求 service，可以通过 '@/service' 别名访问
│   ├── util               // 工具库，可以通过 '@/util' 别名访问
│   ├── layout             // 布局组件，可以通过 '@/layout' 别名访问
│   ├── i18n               // * 国际化相关数据
│   |   ├── zh-CN.json     // * 单个语言的国际化数据
│   |   ├── *.js           // * 单个语言的国际化数据
│   |   └── index.json     // * 国际化语言数据入口文件
│   └── page               // * 页面，下面的页面可以是文件夹，也可以是一个 JS 页面组件
│       ├── .umi           // smallfish 生成的临时文件夹，不需要提交
│       └── *              // 其它页面组件代码，具体参考下方的页面组件结构
├── test                   // * 测试样例存放文件夹
│   └── *.test.js          // * 单元测试文件，需要遵循 *.test.js 的命名规范
├── .eslintignore          // * 配置需要忽略 eslint 代码检测的文件（不需要更改）
├── .eslintrc              // * 自定义的 eslint 规则（不需要更改）
├── .stylelintrc           // * 自定义的 stylelint 规则（不需要更改）
├── .gitignore             // * 配置需要 git 忽略提交和修改的文件
├── jsconfig.json          // VSCode 的 JS 项目配置
├── .editorconfig          // 编辑器代码风格配置，适用于大部分编辑器
└── package.json           // * 应用依赖等信息配置
```

## 页面目录结构

```bash
- page
  └── [SomePage]
    ├── component          // 如果页面比较复杂，可以拆分为更多组件
    ├── index.js           // * 页面组件入口文件
    ├── style.less         // 样式
    ├── model.js           // * 页面 model，会被默认挂载，注意需要有全局唯一的 namespace（dva 配置开启时生效）
    ├── model              // * 有多个 model 的时候可以新建一个文件夹替代 model.js（dva 配置开启时生效）
    │   └── [modelname].js // * 页面 model，会被默认挂载，注意需要有全局唯一的 namespace
    └── service.js         // 页面自有的 service
```


