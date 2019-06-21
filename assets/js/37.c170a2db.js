(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{198:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始使用")]),a._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),s("p",[a._v("smallfish 的运行环境需要:")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("node"),s("OutboundLink")],1),a._v("@v8.10 以上版本")]),a._v(" "),s("li",[a._v("推荐使用 "),s("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn"),s("OutboundLink")],1),a._v(" 来做包管理器")]),a._v(" "),s("li",[a._v("推荐使用 "),s("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),s("OutboundLink")],1),a._v(" 来做 node 环境管理")])]),a._v(" "),s("blockquote",[s("p",[a._v("Tips: smallfish 内置了很多工具，能够在 node 平台上构建 web 服务，编译代码，测试等功能")])]),a._v(" "),s("h3",{attrs:{id:"安装-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-node","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 node")]),a._v(" "),s("h4",{attrs:{id:"_1-安装-nvm（推荐、可跳过）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-nvm（推荐、可跳过）","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 安装 "),s("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),s("OutboundLink")],1),a._v("（推荐、可跳过）")]),a._v(" "),s("p",[a._v("访问官网按照指引下载即可。")]),a._v(" "),s("h4",{attrs:{id:"_2-安装-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-node","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("node"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("访问官网按照指引下载即可。")]),a._v(" "),s("h4",{attrs:{id:"_3-检查安装是否正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查安装是否正确","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 检查安装是否正确")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ node -v "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出版本及表示安装成功")]),a._v("\n")])])]),s("h2",{attrs:{id:"从脚手架开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从脚手架开始","aria-hidden":"true"}},[a._v("#")]),a._v(" 从脚手架开始")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# clone 脚手架代码到项目目录")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/smallfishjs/smallfish-boilerplate-management-system.git my-project\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入项目目录")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" my-project\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装依赖")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" // or "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动服务")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start // or "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开浏览器访问 http://127.0.0.1:8000(端口号可能会根据情况变化)")]),a._v("\n")])])]),s("h2",{attrs:{id:"构建代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建代码")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 即可在 ./dist 下看到生成的文件")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" build // or "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\n")])])]),s("h2",{attrs:{id:"原有项目的改造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原有项目的改造","aria-hidden":"true"}},[a._v("#")]),a._v(" 原有项目的改造")]),a._v(" "),s("h4",{attrs:{id:"从-bigfish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-bigfish","aria-hidden":"true"}},[a._v("#")]),a._v(" 从 bigfish")]),a._v(" "),s("p",[a._v("从 bigfish 改为 smallfish 可以说是最没有成本的，只需要以下几步即可搞定：")]),a._v(" "),s("ol",[s("li",[a._v("打开 package.json 替换 bigfish 命令为 smallfish")]),a._v(" "),s("li",[a._v("全局替换所有 @alipay/bigfish 的依赖包为 smallfish：\n"),s("ul",[s("li",[a._v("sdk 替换为 dva")]),a._v(" "),s("li",[a._v("所有 router 相关统一来源于 'smallfish/router'")]),a._v(" "),s("li",[a._v("在替换的过程中可能会需要的 "),s("router-link",{attrs:{to:"/zh/start/library.html"}},[a._v("smallfish 包对照表")])],1)])]),a._v(" "),s("li",[a._v("修改 config/config.js 为开关配置模式，参看 "),s("a",{attrs:{href:"https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("smallfish 脚手架"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("对比 smallfish 脚手架，去掉冗余的文件、文件夹")])]),a._v(" "),s("h4",{attrs:{id:"从-umi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-umi","aria-hidden":"true"}},[a._v("#")]),a._v(" 从 umi")]),a._v(" "),s("p",[a._v("从 umi 改为 smallfish 可以说是最没有成本的，只需要以下几步即可搞定：")]),a._v(" "),s("ol",[s("li",[a._v("打开 package.json 替换 umi 命令为 smallfish")]),a._v(" "),s("li",[a._v("全局替换 umi 以及其它依赖包为 smallfish；\n"),s("ul",[s("li",[a._v("在替换的过程中可能会需要的 "),s("router-link",{attrs:{to:"/zh/start/library.html"}},[a._v("smallfish 包对照表")])],1)])]),a._v(" "),s("li",[a._v("修改 config/config.js 为开关配置模式，参看 "),s("a",{attrs:{href:"https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("smallfish 脚手架"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("对比 smallfish 脚手架，去掉冗余的文件、文件夹")]),a._v(" "),s("li",[a._v("复数文件夹改为单数")])]),a._v(" "),s("h4",{attrs:{id:"从其它项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从其它项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 从其它项目")]),a._v(" "),s("p",[a._v("从其它项目的改造可能会稍微复杂一点，需要按照 smallfish 标准化的目录结构来放置对应的模块，还需要了解 smallfish 相关的配置，建议看完指引文档再做操作。")])])},[],!1,null,null,null);t.default=e.exports}}]);