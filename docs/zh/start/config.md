# 配置

## 基础配置

你可以在 `config/config.js` 里面配置 smallfish，在 smallfish 中大部分的配置都是简单的开关。

```jsx
// config/config.js
import routes from './routes';

export default {
  antd: true, // 开启 antd，默认 true，可引入 antd 组件
  antdpro: true, // 开启 antd pro，默认 false，可引入 ant-design-pro 组件
  styled: true, // 开启 styled，默认 false，可用 styled-component 方式写样式
  dva: true, // 开启 dva，默认 false，可使用 dva
  i18n: true, // 开启 i18n 多语言功能，默认 true，可使用 smallfish/i18n 套件

  history: 'hash', // 路由方式，默认为 hash，可为 browser
  routes, // 设置路由，一般建议单独用 routes 文件引入
};
```

```jsx
// config/routes.js
export default [
  {
    path: '',
    component: '../layout',
    routes: [
      { path: '/', component: 'Home' },
      { path: '/list', component: 'List' },
    ],
  },
];
```

## 详细配置参考

> Tips: 下面的所有配置都在 `config/config.js` 中书写

### script

添加前置 JS，在 HTML 应用逻辑代码执行之前执行配置的脚本。通常用于一些第三方 SDK 的引入。支持代码和 JS URL。

```js
{
  script: [
    '//gw.alipayobjects.com/os/rmsportal/MUhciYBNsWHgRcKJaCAH.js',
    `
    const test = 'app config';
    console.log(test);
    `,
  ],
}
```

### style

添加前置样式，在 HTML 最开始添加样式。通常用于一些第三方组件的样式引入。支持 CSS 代码或者 URL。

```js
{
  style: [
    '//gw.alipayobjects.com/os/rmsportal/yZocPnjKidyvpGcGYKFs.css',
    'http://gw.alipayobjects.com/os/rmsportal/yUIfbViByGXvPzPqtINT.css',
    `
      body {
        font-size: 14px;
      }
    `,
  ];
}
```

### externals

配置 webpack 的 [externals](https://webpack.js.org/configuration/externals/) 属性。

```js
// 配置 react 和 react-dom 不打入代码
"externals": {
  "react": "window.React",
  "react-dom": "window.ReactDOM"
}
```
