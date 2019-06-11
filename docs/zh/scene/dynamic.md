# 实现一个动态可配置的页面

在 smallfish 中你可以通过开启 `dcc`(Dynamic Configuration Component) 配置来使用 `smallfish/dcc` 动态配置组件库。

## 动态配置组件是什么

`dcc` 是一种开发模式，通过 Schema 描述局部的页面结构，提供配套的组件数据关联库，实现能够动态配置页面的场景。

一个 Schema 是这样的：

```js
const schema = {
  api: {
    getList: '/api/list',
    getUser: '/api/user',
  },
  root: {
    id: 'antd-pro-layout',
    componentName: 'AntdProLayout',
    props: {
      id,
    },
    children: [
      {
        id: 'basic-table',
        componentName: 'BasicTable',
        props: {},
      },
    ],
  },
};
```

其实它跟：

```jsx
<AntdProLayout id={id}>
  <BasicTable />
</AntdProLayout>
```

是一样的，但是因为抽象成了 Schema 能够配合数据动态化，也就是说页面长的样子可以由服务端的数据决定。

## 动态配置组件存在的问题

在页面可配置化的场景下，在需要构建富交互应用时，组件的关联关系和数据映射往往很难处理。

通常来讲业界类似的可配置化形态一般都是 SchemaBuilder -> Schema -> SchemaRender，其中处理组件之间的关联关系和数据流转的信息通常是用 Schema 来描述。

但是这样的方式使得 Schema 难以维护且配置复杂，这样的原因是因为以前的思路都是按照 UI 组件拆分的维度做组件划分，但是在 `smallfish/dcc` 中，我们通过业务模块来划分。

也就是说我们脱离的 UI 的维度，站在产品业务角度（数据角度）对组件进行划分，分离出业务组件（Business Component）。

但是一个业务模块会跟多个业务模块组成一个业务流程，而这个业务流程则是一个闭环，在 `smallfish/dcc` 中我们以 `DataContainer` 的概念表示。

通常一个系统包含多个业务流程，每个业务流程是相互独立的，但是可能会统一收取系统的信息，在 `smallfish/dcc` 中最外层就是 `GlobalContainer`，这一层在调用 `RenderComponent` 渲染 Schema 的时候会自动加入，不需要使用者手动处理。

### smallfish/dcc 解决的问题

综上所述，所以 `smallfish/dcc` 提供了一套开发方式以实现 `dcc` 的开发模式，其中提出的三层组件结构可以解决动态配置中管理组件之间关联关系的问题。

- GlobalContainer：表示一个业务系统，在数据层面提供 globalData
- DataContainer：表示一个业务流程，在数据层面提供 storeData
- BusinessComponent：表示一个业务模块，在数据层面自行管理 state

将关联关系从 Schema 下方到各个业务组件，是其核心思想。

## 如何使用 smallfish/dcc

### 通过 Schema 渲染

```js
// config/config.js 配置项中启用
{
  dcc: true,
}
```

在需要使用的地方引入。

```jsx
import React from 'smallfish/react';
import { DataContainer, RenderComponent } from 'smallfish/dcc';

const schema = {
  api: {
    getWife: '',
  },
  root: {
    id: 'parent',
    componentName: 'Parent',
    props: {},
    children: [
      {
        id: 'sun',
        componentName: 'Sun',
        props: {},
      },
      {
        id: 'daughter',
        componentName: 'Daughter',
        props: {},
      },
    ],
  },
};

const Parent = DataContainer(({ children }) => <div>Parent {children}</div>, {
  car: 'GTR',
  house: 'Chengdu',
});
Parent.displayName = 'Parent';

const Sun = ({ storeData }) => <div>sun has {storeData.car}</div>;
Sun.displayName = 'Sun';

const Cat = ({ name }) => <div>cat's master firstname is {name}</div>;
Cat.displayName = 'Cat';

const Daughter = ({ storeData, GlobalConsumer }) => (
  <div>
    daughter has {storeData.house}
    <GlobalConsumer>
      {({ globalData }) => <Cat name={globalData.firstname} />}
    </GlobalConsumer>
  </div>
);
Daughter.displayName = 'Daughter';

export default () => (
  <div>
    <RenderComponent
      schema={schema}
      components={[Parent, Sun, Daughter]}
      globalData={{
        firstname: 'jack',
      }}
    />
  </div>
);
```

### 通过 setStoreData 和 storeData 关联组件

当一个组件被 `DataContainer` 包裹后，表示一个业务流程，具有向下传递数据的能力，它的子组件可以通过 `props.storeData` 访问业务流程数据，通过 `props.setStoreData` 设置业务流程。

```jsx
const Parent = DataContainer(({ children }) => <div>Parent {children}</div>, {
  car: 'GTR', // 初始化的 store: { car: 'GTR' }
});
Parent.displayName = 'Parent';

// 子组件可以通过 storeData 获取 { car: 'GTR' }
const Sun = ({ storeData }) => <div>sun has {storeData.car}</div>;
Sun.displayName = 'Sun';

// 子组件还可以通过 setStoreData 设置数据
const Sun = ({ storeData, setStoreData }) => {
  // 更新 car 为 BMW，那么父组件和子组件读取的 car 都会变更
  useEffect(() => {
    setStoreData({
      car: 'BMW',
    });
  }, []);

  return <div>sun has {storeData.car}</div>;
};
Sun.displayName = 'Sun';
```

而这一切关联关系都下放到了组件层，在 Schema 中是没有任何表现的，这也是 `smallfish/dcc` 的核心思想：让业务组件自行处理上下关联关系，但是要保持独立化就以 `storeData` 作为输入输出接口。

### 通过 globalData 和 setGlobalData 处理全局数据

一个业务系统可能有多个业务流程，每个业务流程都是一个 `DataContainer` 包裹的业务组件，而 `globalData` 就是解决在多个业务流程组件中操作数据的问题。

```jsx
const Parent = DataContainer(
  ({ children, GlobalConsumer }) => (
    <GlobalConsumer>
      {({ globalData, setGlobalData }) => (
        <>
          Parent name: {globalData.firstname} has: {children}
        </>
      )}
    </GlobalConsumer>
  ),
  {
    car: 'GTR', // 初始化的 globalData: { car: 'GTR' }
  },
);
Parent.displayName = 'Parent';

export default () => (
  <div>
    <RenderComponent
      schema={schema}
      components={[Parent, Sun, Daughter]}
      globalData={{
        // 全局数据
        firstname: 'jack',
      }}
    />
  </div>
);
```

### 通过 globalConfig 设置全局配置

因为 RenderComponent 是根据 Schema 渲染到一个独立的 dom 元素，是局部化的，要配合全局的页面流程需要传入一些通用的配置，比如：api、全局统一处理请求方法等。

这些都可以通过 `globalConfig` 属性实现：

```jsx
export default () => (
  <div>
    <RenderComponent
      schema={schema}
      components={[Parent, Sun, Daughter]}
      globalData={{
        // 全局数据
        firstname: 'jack',
      }}
      globalConfig={{
        api: shema.api,
        ajax,
        rootPath: '/test',
        router, // 因为 RenderComponent 是独立的一块，路由需要通过全局传入调用
      }}
    />
  </div>
);
```
