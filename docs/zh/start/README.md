# 简介

smallfish 不同于以往的 React 框架，它是从蚂蚁金服内部系统中台应用框架 bigfish 发展而来，致力于解决蚂蚁金服生态圈内 isv 以及 jv 公司的前端开发问题。 smallfish 提供了一整套中台系统的前端开发的解决方案，强约束、强规范、开箱即用，是 smallfish 的愿景。

## 为什么要有 smallfish

随着小前台大中台的业务模式的发展趋势，为了满足日益增长的业务需要，对业务产品各方面的管理和监控提出了更高的要求，从而提高内部体统的自动化成了各大公司迫在眉睫的事情。

也是随着这个趋势，内部的管理系统、监控系统层出不穷，在蚂蚁金服内部，从一开始依赖于开源社区的全家桶方案，如：react + redux + webpack 逐步根据业务系统的发展要求，衍生出 [dora](https://github.com/dora-js)、[roadhog](https://github.com/sorrycc/roadhog) + [dva](https://dvajs.com/)、[umi](https://umijs.org/)、bigfish 等一系列框架或者方案，目的就是简化、提效前端开发。

而 smallfish 正是站在了 umi 和 bigfish 这两个巨人的肩膀上衍生出来的一套标准化前端中台解决方案，摒弃了以往的灵活、多插件、多配置的方向，我们根据大量内部系统的经验，提供了一套标准的中台系统生产线流程。

## smallfish 能带来什么

smallfish 对前端开发流程中的每一个环节都做了规范和约束。

smallfish 基于 [umi](https://umijs.org/) 的强大的插件体系进行了二次封装和开发，实现了所有配置开关化，并依靠于社区的力量对各种场景化方案提供了标准化的配套。

所以，使用 smallfish 就可以完成一个完整的前端中台中台系统的开发闭环。

## smallfish 跟其它框架的关系

### bigfish
bigfish 是蚂蚁金服内部的企业级前端开发框架，而 smallfish 从 bigfish 发展而来，是面向外部生态圈开发者的一整套方案，可以理解为 bigfish 的对外版本。

### umi
smallfish 的框架部分是基于 umi 开发的，但是它不像 umi 那么灵活，umi 更像是一个前端平台，上面可以成长出各种定制化的解决方案，而 smallfish 就是其中聚焦在企业级中台系统前端开发的解决方案。

所以你会发现，smallfish 不是一个单纯的 React 框架，它是一套指引企业级中台前端开发的体系，包含了：
- 基于 umi 的企业级前端开发框架 smallfish
- 配套的场景化前端方案文档、指引
- 配套的自动化工具
