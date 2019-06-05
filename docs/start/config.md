# Configuration

## Basic configuration

You can configure smallfish in `config/config.js`, and most of the configuration in smallfish is a simple switch.

```jsx
// config/config.js
import routes from './routes';

export default {
  antd: true,      // turn on antd, default true, can introduce antd component
  antdpro: true,   // turn on antd pro, default false, can introduce ant-design-pro component
  styled: true,    // open styled, default false, style can be written in styled-component
  dva: true,       // turn on dva, default false, use dva
  i18n: true,      // turn on i18n multi-language feature, default is true, use smallfish/i18n kit

  history: 'hash', // routing mode, default is hash, can be browser
  routes,          // set the route, it is generally recommended to use the routes file alone
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

## Detailed Configuration Reference

> Tips: All of the following configurations are written in `config/config.js`

### script

Add a pre-JS to execute the configured script before the HTML application logic code executes. Usually used for the introduction of some third-party SDKs. Support code and JS URL.

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

Add a pre-style to add styles at the very beginning of the HTML. Style introductions are often used for some third-party components. Support for CSS code or URLs.

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

Configure the [externals](https://webpack.js.org/configuration/externals/) property of webpack.

```js
// Configure react and react-dom do not enter the code
"externals": {
  "react": "window.React",
  "react-dom": "window.ReactDOM"
}
```

## Environment Variable

### Port Configuration

Smallfish has port occupancy detection by default. Normally you don't need to care about port problems, but in some cases where you need a fixed port, you can specify the port by setting the `PORT` environment variable:

```json
{
   "script": {
     ...
     "dev": "PORT=9090 smallfish dev",
     ...
   }
}
```

### Close HMR

HMR (hot-module-replacement) allows all types of modules to be updated at runtime without a full refresh. The default is turned on, but in some scenarios it may need to be turned off (such as static file proxy). You can turn off HMR as follows:

```json
{
   "script": {
     ...
     "dev:nohmr": "HMR=none smallfish dev",
     ...
   }
}
```
