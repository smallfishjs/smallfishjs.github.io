# Creating a dynamically configurable page

In smallfish you can dynamically configure component libraries using `smallfish/dcc` by turning on the `dcc` (Dynamic Configuration Component) configuration.

## What is the dynamic configuration component?

`dcc` is a development mode that describes the local page structure through Schema, provides a matching component data association library, and implements a scene that can dynamically configure the page.

A Schema is like this:

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

In fact, it follows:

```jsx
<AntdProLayout id={id}>
  <BasicTable />
</AntdProLayout>
```

It's the same, but because abstraction becomes a Schema, it can match the data dynamics, which means that the length of the page can be determined by the data of the server.

## Dynamic configuration component

In a page configurable scenario, component associations and data mappings are often difficult to handle when building rich interactive applications.

Generally speaking, similar configurable forms in the industry are generally SchemaBuilder -> Schema -> SchemaRender, in which the information about the relationship between components and data flow is usually described by Schema.

However, this way makes Schema difficult to maintain and complicated to configure. This is because the previous ideas are component partitioning according to the dimensions of the UI component split, but in `smallfish/dcc`, we divide it by business module.

That is to say, we are separated from the dimension of the UI, from the perspective of product business (data perspective) to divide the components, and separate the business components (Business Components).

But a business module will form a business process with multiple business modules, and this business process is a closed loop. In `smallfish/dcc` we represent the concept of `DataContainer`.

Usually a system contains multiple business processes, each of which is independent of each other, but may collect system information uniformly. The outermost layer in `smallfish/dcc` is `GlobalContainer`, which is called `RenderComponent`. Rendering Schema is automatically added and does not require manual processing by the user.

### smallfish/dcc solved problems

In summary, `smallfish/dcc` provides a set of development methods to implement the `dcc` development model, in which the proposed three-tier component structure can solve the problem of the relationship between management components in dynamic configuration.

- GlobalContainer: represents a business system that provides globalData at the data level
- DataContainer: represents a business process, providing storeData at the data level
- BusinessComponent: Represents a business module that manages itself at the data level.

The underlying relationship is from the bottom of the Schema to the various business components.

## Using smallfish/dcc

### Rendering by Schema

```js
// enabled in the config/config.js configuration item
{
  dcc: true,
}
```

and import `smallfish/dcc`:

```jsx
import React from 'smallfish/react';
import { DataContainer, RenderComponent } from 'smallfish/dcc';

const schema = {
  ppi: {
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
  Car: 'GTR',
  House: 'Chengdu',
});
Parent.displayName = 'Parent';

const Sun = ({ storeData }) => <div>sun has {storeData.car}</div>;
Sun.displayName = 'Sun';

const Cat = ({ name }) => <div>cat's master firstname is {name}</div>;
Cat.displayName = 'Cat';

const Daughter = ({ storeData, GlobalConsumer }) => (
  <div>
    Daughter has {storeData.house}
    <GlobalConsumer>
      {({ globalData }) => <Cat name={globalData.firstname} />}
    </GlobalConsumer>
  </div>
);
Daughter.displayName = 'Daughter';

export default () => (
  <RenderComponent
    schema={schema}
    components={[Parent, Sun, Daughter]}
    globalData={{
      firstname: 'jack',
    }}
  />
);
```

### Associating components with setStoreData and storeData

When a component is wrapped by `DataContainer`, it represents a business process with the ability to pass data down. Its subcomponents can access business process data via `props.storeData` and set up business processes via `props.setStoreData`.

```jsx
const Parent = DataContainer(({ children }) => <div>Parent {children}</div>, {
  car: 'GTR', // initialized store: { car: 'GTR' }
});
Parent.displayName = 'Parent';

// subcomponents can get { car: 'GTR' } via storeData
const Sun = ({ storeData }) => <div>sun has {storeData.car}</div>;
Sun.displayName = 'Sun';

// subcomponents can also set data via setStoreData
const Sun = ({ storeData, setStoreData }) => {
  // Update car to BMW, then the car read by the parent and child components will change
  useEffect(() => {
    setStoreData({
      car: 'BMW',
    });
  }, []);

  return <div>sun has {storeData.car}</div>;
};
Sun.displayName = 'Sun';
```

And all of these relationships are decentralized to the component layer, there is no performance in the Schema, this is the core idea of ​​`smallfish/dcc`: let the business components handle the context of the relationship, but to remain independent to `storeData` As an input and output interface.

### Processing global data with globalData and setGlobalData

A business system may have multiple business processes, each of which is a business component of a `DataContainer` package, and `globalData` is a solution to the problem of manipulating data across multiple business process components.

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
    car: 'GTR', // initialized globalData: { car: 'GTR' }
  },
);
Parent.displayName = 'Parent';

export default () => (
  <RenderComponent
    schema={schema}
    components={[Parent, Sun, Daughter]}
    globalData={{
      // global data
      Firstname: 'jack',
    }}
  />
);
```

### Setting global configuration via globalConfig

Because RenderComponent is rendered to a separate dom element according to Schema, it is localized. To match the global page flow, you need to pass in some common configuration, such as: api, global unified processing request method.

These can all be achieved with the `globalConfig` property:

```jsx
export default () => (
  <div>
        
    <RenderComponent
      Schema={schema}
      Components={[Parent, Sun, Daughter]}
      globalData={{
        // global data
        firstname: 'jack',
      }}
      globalConfig={{
        api: shema.api,
        ajax,
        rootPath: '/test',
        router, // Since RenderComponent is a separate piece, the route needs to be passed globally.
      }}
    />
      
  </div>
);
```
