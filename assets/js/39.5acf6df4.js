(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{213:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内置模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置模块")]),t._v(" "),a("p",[t._v("为了解决版本依赖以及常用包统一的问题，smallfish 除了各项功能暴露的 API 外，smallfish 还内置维护了 React，antd，dva 等库。由 smallfish 来维护各个库的版本升级，通过 smallfish 内部的维护来抹去这些第三方库可能造成的兼容性问题，可直接使用。")]),t._v(" "),a("p",[t._v("你也可以通过 "),a("code",[t._v("yarn add [modulename] --save")]),t._v(" ("),a("code",[t._v("npm install [modulename] --save")]),t._v(") 来引入外部依赖，为了增强项目的可维护性，如无必要请谨慎选择引入外部依赖。如果你觉得某个外部的库比较不错，也可以推荐给我们，如果可以，我们可以把其加入到内置库中。")]),t._v(" "),a("p",[t._v("所有的内置模块前缀都为 smallfish。")]),t._v(" "),a("h2",{attrs:{id:"react-reactdom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-reactdom","aria-hidden":"true"}},[t._v("#")]),t._v(" React & ReactDom")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDom "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多 React 基本原理和组件化介绍可以参考 "),a("a",{attrs:{href:"https://react.docschina.org/tutorial/tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("认识 React"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"antd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd","aria-hidden":"true"}},[t._v("#")]),t._v(" antd")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Design"),a("OutboundLink")],1),t._v(" 是一个致力于提升『用户』和『设计者』使用体验的中后台设计语言，利用统一的设计规范、前端实现、设计/研发工具链对产品研发赋能，全面提高中后台产品体验和研发效率，其采用 React 封装了一套 Ant Design 的组件库。")]),t._v(" "),a("p",[t._v("在 smallfish 应用中可以通过以下方式快速接入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"antd-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd-pro","aria-hidden":"true"}},[t._v("#")]),t._v(" antd pro")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pro.ant.design/docs/getting-started-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Design Pro"),a("OutboundLink")],1),t._v(" 是一个企业级中后台前端/设计解决方案，秉承 Ant Design 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。")]),t._v(" "),a("p",[t._v("在 smallfish 应用中可以通过以下方式快速接入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  antdpro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PageHeader "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/ant-design-pro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"路由相关-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由相关-router","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由相关 router")]),t._v(" "),a("p",[t._v("在 smallfish 中为方便使用，我们将路由相关的都抽象到了 "),a("code",[t._v("smallfish/router")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  NavLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  withRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/router'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你想深入了解，更多关于 router 的参看："),a("a",{attrs:{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-router"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"网络请求-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络请求-request","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络请求 request")]),t._v(" "),a("p",[t._v("在网络请求这一层，我们底层使用了优秀的 "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v("，可以处理网络方面的所有配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/request'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你想看一个真实的项目 request 封装实例，参看："),a("a",{attrs:{href:"./404"}},[t._v("如何处理网络请求")])]),t._v(" "),a("h2",{attrs:{id:"dva"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dva","aria-hidden":"true"}},[t._v("#")]),t._v(" dva")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dvajs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dva"),a("OutboundLink")],1),t._v(" 是基于现有应用架构 (redux + react-router + redux-saga 等)的一层轻量封装。dva 解决的问题是当前 react 技术栈概念太多，并且 reducer, saga, action 都是分离的（分文件）等问题，具体参考 dva 介绍。")]),t._v(" "),a("p",[t._v("在 smallfish 应用中可以通过以下方式快速接入 dva:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dva"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("开启 dva 后，可以 model 目录将会生效，自动加载 dva model，并且可以使用 dva 方法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/dva'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"styled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styled","aria-hidden":"true"}},[t._v("#")]),t._v(" styled")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.styled-components.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("styled-components"),a("OutboundLink")],1),t._v(" 是一个常用的 css in js 类库。通过 js 赋能解决了原生 css 所不具备的能力，比如变量、循环、函数等。")]),t._v(" "),a("p",[t._v("在 smallfish 应用中可以通过以下方式快速接入 styled:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  styled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styled "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/styled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WhiteDiv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n  color: #fff;\n`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util","aria-hidden":"true"}},[t._v("#")]),t._v(" Util")]),t._v(" "),a("p",[t._v("smallfish/utils 类库里面集合了常用的工具型类包，解决了选择困难症。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/JedWatson/classnames",target:"_blank",rel:"noopener noreferrer"}},[t._v("classnames"),a("OutboundLink")],1),t._v("：处理多个 classname 的利器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/js-cookie/js-cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-cookie"),a("OutboundLink")],1),t._v("：处理 cookie")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug"),a("OutboundLink")],1),t._v("：更好的控制台 log 输出")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("moment"),a("OutboundLink")],1),t._v("：强大的时间处理库")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/prop-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("prop-types"),a("OutboundLink")],1),t._v("：React 的类型验证")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/query-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("query-string"),a("OutboundLink")],1),t._v("：处理 url 参数")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gaearon/react-document-title",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-document-title"),a("OutboundLink")],1),t._v("：设置 React 页面标题")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://lodash.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lodash"),a("OutboundLink")],1),t._v("：丰富的 javascript 工具套件")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/uuid",target:"_blank",rel:"noopener noreferrer"}},[t._v("uuid"),a("OutboundLink")],1),t._v("：好用的 UUIDS 生成器")])]),t._v(" "),a("p",[t._v("在 smallfish 应用中可以这样使用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/moment/locale/zh-cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uuid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/uuid/v4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cookie "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/js-cookie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" propTypes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/prop-types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" queryString "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/query-string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" array "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smallfish/util/lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);