# Router

## Configuring routing

The route configured in smallfish is in `config/config.js`:

```js
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

```js
// config/config.js
Import routes from './routes';

Export default {
  Routes, // set the route, it is generally recommended to use the routes file alone
};
```

The source of the routing component is hosted under the `./page` directory structure.

## Custom 404

The convention `page/404.js` is a 404 page and needs to return the React component.

```js
// page/404.js
Export default () => <div>404</div>;
```

## Using routing methods

You can get all the methods you need to manipulate the route by `import { xxx } from 'smallfish/router';`.

```js
Import {
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
Export default [
  {
    Path: '',
    Component: '../layout',
    Routes: [
      { path: '/', component: 'Home' },
      { path: '/list', component: 'List', Routes: 'PrivateRoute' },
    ],
  },
];
```

And through the `PrivteRoute` component? you can control the `List` component to display:

```js
// page/privteRoute.js
Export default ({ component as Component, hasAuth, ...rest }) => {
  Return (
    <>
    {
      hasAuth && <Component {...rest}>
    }
    {
      !hasAuth && <NotAuth />
    }
    </>
  );
}
```