# 内置模块

为了解决版本依赖以及常用包统一的问题，smallfish 除了各项功能暴露的 API 外，smallfish 还内置维护了 React，antd，dva 等库。由 smallfish 来维护各个库的版本升级，通过 smallfish 内部的维护来抹去这些第三方库可能造成的兼容性问题，可直接使用。

你也可以通过 yarn add [modulename] --save (tnpm install [modulename] --save) 来引入外部依赖，为了增强项目的可维护性，如无必要请谨慎选择引入外部依赖。如果你觉得某个外部的库比较不错，也可以推荐给我们，如果可以，我们可以把其加入到内置库中。

所有的内置模块前缀都为 smallfish。

## React & ReactDom

```js
import React, { useState } from 'smallfish/react';
import ReactDom from 'smallfish/react-dom';
```

更多 React 基本原理和组件化介绍可以参考 [认识 React](https://react.docschina.org/tutorial/tutorial.html)。

## antd

[Ant Design](https://ant.design) 是一个致力于提升『用户』和『设计者』使用体验的中后台设计语言，利用统一的设计规范、前端实现、设计/研发工具链对产品研发赋能，全面提高中后台产品体验和研发效率，其采用 React 封装了一套 Ant Design 的组件库。

在 smallfish 应用中可以通过以下方式快速接入:

```js
import { Button } from 'smallfish/antd';
```

## antd pro

[Ant Design Pro](https://pro.ant.design/docs/getting-started-cn) 是一个企业级中后台前端/设计解决方案，秉承 Ant Design 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。

在 smallfish 应用中可以通过以下方式快速接入:

```js
// config/config.js
{
  antdpro: true,
}
```

```js
import { PageHeader } from 'smallfish/ant-design-pro';
```

## 路由相关 router

在 smallfish 中为方便使用，我们将路由相关的都抽象到了 `smallfish/router` 中：

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

如果你想深入了解，更多关于 router 的参看：[react-router](https://reacttraining.com/react-router/)

## 网络请求 request

在网络请求这一层，我们底层使用了优秀的 [umi/request](https://github.com/umijs/umi-request)，可以处理网络方面的所有配置。

```js
import request from 'smallfish/request';
```

如果你想看一个真实的项目 request 封装实例，参看：[如何处理网络请求](./404)

## dva

[dva](https://dvajs.com/) 是基于现有应用架构 (redux + react-router + redux-saga 等)的一层轻量封装。dva 解决的问题是当前 react 技术栈概念太多，并且 reducer, saga, action 都是分离的（分文件）等问题，具体参考 dva 介绍。

在 smallfish 应用中可以通过以下方式快速接入 dva:

```js
// config/config.js
{
  dva: true,
}
```

开启 dva 后，可以 model 目录将会生效，自动加载 dva model，并且可以使用 dva 方法：

```js
import { connect } from 'smallfish/dva';
```

## styled

[styled-components](https://www.styled-components.com/) 是一个常用的 css in js 类库。通过 js 赋能解决了原生 css 所不具备的能力，比如变量、循环、函数等。

在 smallfish 应用中可以通过以下方式快速接入 styled:

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

smallfish/utils 类库里面集合了常用的工具型类包，解决了选择困难症。

- classnames
- cookie
- debug
- fecha
- moment
- propTypes
- queryString
- react-document-title

在 smallfish 应用中可以这样使用：

```js
import moment from 'smallfish/utils/moment';
import cookie from 'smallfish/utils/js-cookie';
import propTypes from 'smallfish/utils/prop-types';
import queryString from 'smallfish/utils/query-string';
```
