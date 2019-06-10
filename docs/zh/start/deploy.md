# 构建部署

## 使用 docker 来构建部署

在此之前，你需要了解 [docker](https://www.docker.com/) 是什么，并且安装它。

如果你选用了 docker，那么我们推荐使用 nginx 作为 web 容器，经过简单的配置你就可以得到一个独立的、稳定的 web 静态服务器。

如果你想快速开始，那么直接移步到 [脚手架](https://github.com/smallfishjs/smallfish-boilerplates-management-system) 查看一个真实示例。

下面也将结合这个脚手架说明如何集成你的应用到 docker 中。

### 建立的 Dockfile

首先在你的更目录下创建 `Dockerfile`，用来告诉 docker 如何处理你的应用，通常是这样：

```bash
FROM nginx # 以 nginx 镜像基础

WORKDIR /usr/src/app/ # 指定你的工作目录

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf # 替换自定义的 nginx 配置

COPY ./docker/ssl /etc/nginx/ssl/ # 替换 ssl 证书以支持 https

COPY ./dist  /usr/share/nginx/html/ # 替换 dist 为静态映射目录

EXPOSE 80 443 # http 端口 & https 端口

CMD ["nginx", "-g", "daemon off;"] # 启动 nginx
```

以上就是一个最基础的 Dockerfile，可以从里面看出我们需要在根目录新建 `docker` 文件夹用来存放相关的配置：`nginx.conf` 以及 ssl 证书。

### 配置 nginx

nginx 的样例在 smallfish 脚手架中已经配置好了，你可以直接使用。

```
server {
    listen 80;
    # gzip config
    gzip on;

    root /usr/share/nginx/html;

    location / {
        # browserHistory
        #try_files $uri $uri/ /index.html;

        # hashHistory
        index index.html;
    }

    # location /api {
    #     proxy_pass [your service host];
    #     proxy_set_header   X-Forwarded-Proto $scheme;
    #     proxy_set_header   Host              $http_host;
    #     proxy_set_header   X-Real-IP         $remote_addr;
    # }

}

# https
server {
    # https + http2
    # listen 443 ssl http2;

    # https
    listen 443 ssl;

    server_name localhost;

    # /etc/nginx/nginx.conf
    ssl_certificate /etc/nginx/ssl/server.crt;
    ssl_certificate_key /etc/nginx/ssl/server.key;
    ssl_session_timeout 5m;

    root /usr/share/nginx/html;

    location / {
        # browserHistory
        #try_files $uri $uri/ /index.html;

        # hashHistory
        index index.html;
    }

    # location /api {
    #     proxy_pass [your service host];
    #     proxy_set_header   X-Forwarded-Proto $scheme;
    #     proxy_set_header   Host              $http_host;
    #     proxy_set_header   X-Real-IP         $remote_addr;
    # }
}
```

### 设置构建部署步骤

除了直接打包出镜像以外，我们有时候需要跑起镜像看看是否满足期望，所以我们需要一个 `docker-compose.yml`，帮我们快速的跑起一个 docker 服务。

在 `docker` 下添加 `docker-compose.yml`：

```
version: '3.5'

services:
  smallfish-web:
    image: nginx
    ports:
      - 80:80
      - 443:443
    container_name: 'smallfish-web_dev'
    restart: unless-stopped
    volumes:
      - ../dist:/usr/share/nginx/html:ro
      - ./ssl:/etc/nginx/ssl:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf

volumes:
  dist:
```

然后添加几个命令到我们的 `package.json`：

```json
{
  script: {
    ...
    "docker:dev": "docker-compose -f ./docker/docker-compose.yml up",
    "docker:build": "smallfish build && docker build -f Dockerfile -t smallfish-web ./",
    ...
  }
}
```

运行 `npm run docker:dev` 即可将当前项目以 docker 方式运行起来，而 `npm run docker:build` 则能构建一个镜像，你可以将它部署到支持 docker 的平台上。

### https 证书

https 的证书可以通过 [openssl](https://www.openssl.org/source/) 生成。
