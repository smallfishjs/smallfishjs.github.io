# Configuration

## Basic configuration

You can configure smallfish in `config/config.js`, and most of the configuration in smallfish is a simple switch.

```jsx
// config/config.js
Import routes from './routes';

Export default {
  Antd: true, // turn on antd, default true, can introduce antd component
  Antdpro: true, // turn on antd pro, default false, can introduce ant-design-pro component
  Styled: true, // open styled, default false, style can be written in styled-component
  Dva: true, // turn on dva, default false, use dva
  I18n: true, // turn on i18n multi-language feature, default is true, use smallfish/i18n kit

  History: 'hash', // routing mode, default is hash, can be browser
  Routes, // set the route, it is generally recommended to use the routes file alone
};
```

```jsx
// config/routes.js
Export default [
  {
    Path: '',
    Component: '../layout',
    Routes: [
      { path: '/', component: 'Home' },
      { path: '/list', component: 'List' },
    ],
  },
];
```

## Detailed Configuration Reference

> Tips: All of the following configurations are written in `config/config.js`

### script

Add a pre-JS to execute the configured script before the HTML application logic code executes. Usually used for the introduction of some third-party SDKs. Support code and JS URL.

```js
{
  Script: [
    '//gw.alipayobjects.com/os/rmsportal/MUhciYBNsWHgRcKJaCAH.js',
    `
    Const test = 'app config';
    Console.log(test);
    `,
  ],
}
```

### style

Add a pre-style to add styles at the very beginning of the HTML. Style introductions are often used for some third-party components. Support for CSS code or URLs.

```js
{
  Style: [
    '//gw.alipayobjects.com/os/rmsportal/yZocPnjKidyvpGcGYKFs.css',
    'http://gw.alipayobjects.com/os/rmsportal/yUIfbViByGXvPzPqtINT.css',
    `
      Body {
        Font-size: 14px;
      }
    `,
  ];
}
```

### externals

Configure the [externals](https://webpack.js.org/configuration/externals/) property of webpack.

```js
/ / Configure react and react-dom do not enter the code
"externals": {
  "react": "window.React",
  "react-dom": "window.ReactDOM"
}
```