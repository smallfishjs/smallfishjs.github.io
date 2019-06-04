# Built-in module

In order to solve the problem of version dependency and common package unification, smallfish has built-in maintenance of React, antd, dva and other libraries in addition to APIs exposed by various functions. The version upgrade of each library is maintained by smallfish, and the compatibility problems caused by these third-party libraries can be erased by the maintenance of smallfish. It can be used directly.

You can also introduce external dependencies by `yarn add [modulename] --save` (`npm install [modulename] --save`). To enhance the maintainability of the project, please choose to introduce external dependencies if you don't need it. If you think an external library is pretty good, you can recommend it to us. If you can, we can add it to the built-in library.

All built-in module prefixes are smallfish.

## React & ReactDom

```js
import React, { useState } from 'smallfish/react';
import ReactDom from 'smallfish/react-dom';
```

More React fundamentals and componentization can be found in [Understanding React](https://react.docschina.org/tutorial/tutorial.html).

## antd

[Ant Design](https://ant.design) is a back-end design language dedicated to improving the user and designer experience, using a unified design specification, front-end implementation, design/development toolchain for products. R&D empowerment, comprehensively improve the mid- and back-end product experience and R&D efficiency, and it uses React to encapsulate a set of Ant Design component libraries.

In the smallfish app, you can quickly access it in the following ways:

```js
import { Button } from 'smallfish/antd';
```

## antd pro

[Ant Design Pro](https://pro.ant.design/docs/getting-started-cn) is an enterprise-class mid-background front-end/design solution that adheres to the design values ​​of Ant Design and is committed to design specifications and foundations. On the basis of components, we will continue to build up and extract typical template/business components/supporting design resources to further enhance the experience of “users” and “designers” in the design and development of enterprise-level mid- and back-end products.

In the smallfish app, you can quickly access it in the following ways:

```js
// config/config.js
{
  antdpro: true,
}
```

```js
import { PageHeader } from 'smallfish/ant-design-pro';
```

## Routing related router

For ease of use in smallfish, we abstract the routing related to `smallfish/router`:

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

If you want to learn more, see more about router: [react-router](https://reacttraining.com/react-router/)

## Network Request Request

At the web request level, we use the excellent [umi/request](https://github.com/umijs/umi-request) to handle all network configuration.

```js
import request from 'smallfish/request';
```

If you want to see a real project request package instance, see: [How to handle network requests](./404)

## dva

[dva](https://dvajs.com/) is a lightweight package based on the existing application architecture (redux + react-router + redux-saga, etc.). The problem solved by dva is that there are too many current concept of the technology stack, and reducer, saga, and action are separate (sub-files). For details, see dva.

In the smallfish app, you can quickly access dva in the following ways:

```js
// config/config.js
{
  dva: true,
}
```

Once dva is turned on, the model directory will take effect, the dva model will be loaded automatically, and the dva method can be used:

```js
Import { connect } from 'smallfish/dva';
```

## styled

[styled-components](https://www.styled-components.com/) is a commonly used css in js class library. The ability to solve native css, such as variables, loops, functions, etc., is solved by js.

In the smallfish app, you can quickly access styled in the following ways:

```js
// config/config.js
{
  styled: true,
}
```

```js
import styled from 'smallfish/styled';

const WhiteDiv = styled.div`
  color: #fff;
`;
```

## Util

The smallfish/utils class library is a collection of commonly used toolkits that solve the difficulty of selection.

- [classnames](https://github.com/JedWatson/classnames): A tool for handling multiple classnames
- [js-cookie](https://github.com/js-cookie/js-cookie): Handling cookies
- [debug](https://github.com/visionmedia/debug): Better console log output
- [moment](https://momentjs.com/): Powerful time processing library
- [prop-types](https://www.npmjs.com/package/prop-types): Type validation for React
- [query-string](https://www.npmjs.com/package/query-string): Handling url parameters
- [react-document-title](https://github.com/gaearon/react-document-title): Set the React page title
- [lodash](https://lodash.com/): Rich javascript toolkit

This can be used in smallfish applications like this:

```js
import 'smallfish/util/moment/locale/zh-cn';
import moment from 'smallfish/util/moment';

import cookie from 'smallfish/util/js-cookie';
import propTypes from 'smallfish/util/prop-types';
import queryString from 'smallfish/util/query-string';

import array from 'smallfish/util/lodash';
```