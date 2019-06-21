(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{199:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),t("h2",{attrs:{id:"应用目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用目录结构")]),s._v(" "),t("p",[s._v("为了规范应用的架构和代码质量，smallfish 在框架中大量使用了约定替代代码书写。下面文件夹或者文件注释中包含 * 说明是约定的目录或者文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n├── config                 // * 应用配置文件夹\n│   ├── config.js          // * 应用配置，可配置接口代理，路由，配置开关等\n│   └── plugin.js          // * 自定义的 smallfish 插件目录\n├── mock                   // * mock 数据存放的文件夹\n│   └── *.js               // * 本地模拟数据\n├── src                    // 业务代码目录\n│   ├── component          // 通用组件，可以通过 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/component'")]),s._v(" 别名访问\n│   ├── model              // dva model（dva 配置开启时生效）\n│   ├── "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("            // 请求 service，可以通过 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/service'")]),s._v(" 别名访问\n│   ├── util               // 工具库，可以通过 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/util'")]),s._v(" 别名访问\n│   ├── layout             // 布局组件，可以通过 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/layout'")]),s._v(" 别名访问\n│   ├── i18n               // * 国际化相关数据\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   ├── zh-CN.json     // * 单个语言的国际化数据\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   ├── *.js           // * 单个语言的国际化数据\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   └── index.json     // * 国际化语言数据入口文件\n│   └── page               // * 页面，下面的页面可以是文件夹，也可以是一个 JS 页面组件\n│       ├── .umi           // smallfish 生成的临时文件夹，不需要提交\n│       └── *              // 其它页面组件代码，具体参考下方的页面组件结构\n├── "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v("                   // * 测试样例存放文件夹\n│   └── *.test.js          // * 单元测试文件，需要遵循 *.test.js 的命名规范\n├── .eslintignore          // * 配置需要忽略 eslint 代码检测的文件（不需要更改）\n├── .eslintrc              // * 自定义的 eslint 规则（不需要更改）\n├── .stylelintrc           // * 自定义的 stylelint 规则（不需要更改）\n├── .gitignore             // * 配置需要 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" 忽略提交和修改的文件\n├── jsconfig.json          // VSCode 的 JS 项目配置\n├── .editorconfig          // 编辑器代码风格配置，适用于大部分编辑器\n└── package.json           // * 应用依赖等信息配置\n")])])]),t("h2",{attrs:{id:"页面目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面目录结构")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("- page\n  └── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SomePage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    ├── component          // 如果页面比较复杂，可以拆分为更多组件\n    ├── index.js           // * 页面组件入口文件\n    ├── style.less         // 样式\n    ├── model.js           // * 页面 model，会被默认挂载，注意需要有全局唯一的 namespace（dva 配置开启时生效）\n    ├── model              // * 有多个 model 的时候可以新建一个文件夹替代 model.js（dva 配置开启时生效）\n    │   └── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("modelname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".js // * 页面 model，会被默认挂载，注意需要有全局唯一的 namespace\n    └── service.js         // 页面自有的 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n")])])])])},[],!1,null,null,null);n.default=e.exports}}]);