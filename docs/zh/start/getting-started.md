# 开始使用

## 环境准备

smallfish 的运行环境需要:
- [node](https://nodejs.org/)@v8.10 以上版本
- 推荐使用 [yarn](https://yarnpkg.com/) 来做包管理器
- 推荐使用 [nvm](https://github.com/nvm-sh/nvm) 来做 node 环境管理

> Tips: smallfish 内置了很多工具，能够在 node 平台上构建 web 服务，编译代码，测试等功能

### 安装 node
#### 1. 安装 [nvm](https://github.com/nvm-sh/nvm)（推荐、可跳过）
访问官网按照指引下载即可。

#### 2. 安装 [node](https://nodejs.org/)
访问官网按照指引下载即可。

#### 3. 检查安装是否正确

```bash
$ node -v # 输出版本及表示安装成功
```

## 从脚手架开始

```bash
# clone 脚手架代码到项目目录
$ git clone https://github.com/smallfishjs/smallfish-boilerplate-management-system.git my-project

# 进入项目目录
$ cd my-project

# 安装依赖
$ npm install // or yarn

# 启动服务
$ npm start // or yarn start

# 打开浏览器访问 http://127.0.0.1:8000(端口号可能会根据情况变化)
```

## 构建部署

```bash
# 即可在 ./dist 下看到生成的文件
$ npm build // or yarn build
```

## 原有项目的改造
#### 从 bigfish
从 bigfish 改为 smallfish 可以说是最没有成本的，只需要以下几步即可搞定：
1. 打开 package.json 替换 bigfish 命令为 smallfish
2. 全局替换所有 @alipay/bigfish 的依赖包为 smallfish：
    - sdk 替换为 dva
    - 所有 router 相关统一来源于 'smallfish/router'
    - 在替换的过程中可能会需要的 [smallfish 包对照表](./library.html)
3. 修改 config/config.js 为开关配置模式，参看 [smallfish 脚手架](https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js)
4. 对比 smallfish 脚手架，去掉冗余的文件、文件夹

#### 从 umi
从 umi 改为 smallfish 可以说是最没有成本的，只需要以下几步即可搞定：
1. 打开 package.json 替换 umi 命令为 smallfish
2. 全局替换 umi 以及其它依赖包为 smallfish；
    - 在替换的过程中可能会需要的 [smallfish 包对照表](./library.html)
3. 修改 config/config.js 为开关配置模式，参看 [smallfish 脚手架](https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js)
4. 对比 smallfish 脚手架，去掉冗余的文件、文件夹
5. 复数文件夹改为单数

#### 从其它项目
从其它项目的改造可能会稍微复杂一点，需要按照 smallfish 标准化的目录结构来放置对应的模块，还需要了解 smallfish 相关的配置，建议看完指引文档再做操作。
