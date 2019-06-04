# 路由

## 配置路由

在 smallfish 中配置路由是在 `config/config.js` 中：

```js
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

```js
// config/config.js
import routes from './routes';

export default {
  routes, // 设置路由，一般建议单独用 routes 文件引入
};
```

而路由组件的来源是按照约定承载在 `./page` 目录结构下的。

## 自定义 404

约定 `page/404.js` 为 404 页面，需返回 React 组件。

```js
// config/routes.js
export default [
  {
    component: '../layout',
    routes: [
      { path: '/', component: 'home' },
      { path: '/list', component: 'list' },
      { path: '/user', component: 'user' },
      { path: '/test', component: 'test' },
      { path: '/private', component: 'private', Routes: ['src/page/auth'] },
      {
        component: '404',
      },
    ],
  },
];
```

```js
// page/404.js
export default () => <div>404</div>;
```

## 使用路由方法

通过 `import { xxx } from 'smallfish/router';` 可以获取所有你需要操作路由的方法。

```js
import {
  router,
  history,
  Link,
  NavLink,
  Prompt,
  Redirect,
  Route,
  withRouter,
} from 'smallfish/router';
```

## 设置路由权限

smallfish 的权限路由是通过配置路由的 Routes 属性来实现。

```js
// config/routes.js
export default [
  {
    path: '',
    component: '../layout',
    routes: [
      { path: '/', component: 'Home' },
      { path: '/list', component: 'List', Routes: ['src/page/Auth'] },
    ],
  },
];
```

而通过 `Auth` 组件  则可以控制 `List` 组件展现：

```js
// page/auth.js
export default ({ children, hasAuth }) => {
  return (
    <>
      {hasAuth && children}
      {!hasAuth && <NotAuth />}
    </>
  );
};
```
