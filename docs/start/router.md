# Router

## Configuring routing

The route configured in smallfish is in `config/config.js`:

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
  routes, // set the route, it is generally recommended to use the routes file alone
};
```

The source of the routing component is hosted under the `./page` directory structure.

## Custom 404

The convention `page/404.js` is a 404 page and needs to return the React component.

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

## Using routing methods

You can get all the methods you need to manipulate the route by `import { xxx } from 'smallfish/router';`.

```js
import {
  Router,
  History,
  Link,
  NavLink,
  Prompt,
  Redirect,
  Route,
  withRouter,
} from 'smallfish/router';
```

## Setting routing permissions

The permission routing of smallfish is implemented by configuring the Routes property of the route.

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

And through the `Auth` component? you can control the `List` component to display:

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