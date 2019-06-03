# Getting Start

## Environmental Preparation

The smallfish runtime environment needs to:
- [node](https://nodejs.org/)@v8.10 or above
- It is recommended to use [yarn](https://yarnpkg.com/) to do the package manager.
- It is recommended to use [nvm](https://github.com/nvm-sh/nvm) for node environment management

> Tips: smallfish has a lot of built-in tools for building web services, compiling code, testing, etc. on the node platform.

### installation node
#### 1. Installation [nvm](https://github.com/nvm-sh/nvm) (recommended, skippable)
Visit the official website to download according to the guidelines.

#### 2. Installation [node](https://nodejs.org/)
Visit the official website to download according to the guidelines.

#### 3. Check if the installation is correct.

```bash
$ node -v # output version and indicates successful installation
```

## Starting with scaffolding

```bash
# clone Scaffolding code to project directory
$ git clone https://github.com/smallfishjs/smallfish-boilerplate-management-system.git my-project

#Enter project directory
$ cd my-project

#Installation dependency
$ yarn

#Start service
$ yarn start

# Open a browser to access http://127.0.0.1:8000 (the port number may change according to the situation)
```

## Build a deployment

```bash
# can see the generated file under ./dist
$ yarn build
```

## Transformation of the original project
#### From bigfish
Changing from bigfish to smallfish is arguably the least costly, and it only takes the following steps:
1. Open package.json and replace the bigfish command with smallfish
2. Globally replace all @alipay/bigfish dependencies with smallfish:
    - replace sdk with dva
    - All routers are related to 'smallfish/router'
    - [smallfish package comparison table] (./config) that may be needed during the replacement process
3. Modify config/config.js to switch configuration mode, see [smallfish scaffolding] (https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js)
4. Compare smallfish scaffolding and remove redundant files and folders

#### From umi
Changing from umi to smallfish can be said to be the least costly, and only needs to be done in the following steps:
1. Open package.json and replace the umi command with smallfish
2. Global replacement umi and other dependencies are smallfish;
    - [smallfish package comparison table] (./config) that may be needed during the replacement process
3. Modify config/config.js to switch configuration mode, see [smallfish scaffolding] (https://github.com/smallfishjs/smallfish-boilerplate-management-system/blob/master/config/config.js)
4. Compare smallfish scaffolding and remove redundant files and folders
5. The plural folder is changed to singular

#### From other projects
The transformation from other projects may be a bit more complicated. The corresponding module needs to be placed according to the standardized structure of smallfish. It is also necessary to understand the configuration related to smallfish. It is recommended to read the guidance document and then do the operation.