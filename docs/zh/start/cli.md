# 命令行工具

## smallfish dev

启动本地开发模式，应用会启动。数据请求将会优先走本地的 mock 数据。一般来讲会在 `package.json` 指定脚本：

```js
{
  script: {
    ...
    dev: 'smallfish dev',
    ...
  }
}
```

更多方式：

- HMR=7009 smallfish dev ：指定端口。因为 smallfish 会探测可用端口，所以一般情况不需要使用
- ANALYZE=1 smallfish dev：构建完成后生成并打开代码分析结果，用于代码大小性能等优化
- HMR=none smallfish dev：关闭热部署

在开发情况下，修改文件不需要刷新页面，页面会进行 hmr 热加载，但是修改了 model，config/app.js，view/\*\*/config.js 会重启服务，可能会慢一些，需要刷新页面。

## smallfish build

构建代码到 dist 目录。可在 `config/config.js` 配置：

```js
{
  outputPath: './lib', // 修改到 ./lib 目录下
}
```

## smallfish test

自动执行项目下的 test/**/*.test.js 文件。

## smallfish lint

执行代码格式校验。

- smallfish lint -- --fix 自动修复 eslint 的问题。
- smallfish lint -- --prettier 通过 prettier 自动化格式化代码。
- smallfish lint -- --style 校验包含样式文件（JS 也会依然校验）。
- smallfish lint -- --staged 只检测待提交的代码，建议再在 precommit 这个 script 里面配置。
- smallfish lint -- --glob [pattern] 指定检测的内容，用于 chair，默认是 src 和 test。
- smallfish lint -- --quiet 不显示 warning。

## smallfish i18n

提取项目中的文案，替换为支持多语言的占位符。

> 敬请期待
