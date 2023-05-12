---
title: 配置
---


import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

---


## Windows/Linux/MacOS 配置

若您使用Windows/Linux/MacOS的预构建版，那么在您的`存储目录下`的`windowConfig.json`即为配置文件。

示例配置文件如下：
```json title="windowConfig.json"
{
    "serverPort": 8080,            // web服务端口，默认为 8080
    "showUI": true,                // 是否显示UI界面，默认为显示
    "debug": false,                // 是否调试模式，默认为否
    "positionX": 0.0,              // 窗口位置 横坐标
    "positionY": 0.0,              // 窗口位置 纵坐标
    "width": 1280.0,               // 窗口大小 宽度
    "height": 800.0,               // 窗口大小 高度
    "rememberSize": true,          // 改变窗口大小时，是否记住窗口大小，默认记住
    "rememberPosition": false,     // 移动窗口时，是否记住窗口位置，默认不记住
    "setWindowPosition": false,    // 启动时是否设置窗口位置，默认不设置，窗口默认居中
    "setWindowSize": true,         // 启动时是否设置窗口大小，默认按照配置文件进行设置
    "serverConfig": {                // 接口服务配置，此处配置会被 `serverPort|showUI|debug` 等覆盖
        "reader.app.secure": false,  // 是否需要登录鉴权，开启后将支持多用户模式
        "reader.app.inviteCode": "",  // 注册邀请码，为空时则开放注册，否则注册时需要输入邀请码。仅多用户模式下有效
        "reader.app.secureKey": "",  // 管理密码，开启鉴权时，前端管理用户空间的管理密码。仅多用户模式下有效
    }
}
```

## 单服务端的配置

**使用jar启动的用户暂时没有配置！**

不过您可以通过启动参数来进行配置，以下是接口文档：
```yml
reader:
  app:
    storagePath: storage   # 数据存储目录
    showUI: false          # 是否显示UI
    debug: false           # 是否调试模式
    packaged: false        # 是否打包为客户端
    secure: false          # 是否需要登录鉴权，开启后将支持多用户模式
    inviteCode: ""         # 注册邀请码，为空时则开放注册，否则注册时需要输入邀请码
    secureKey: ""          # 管理密码，开启鉴权时，前端管理用户空间的管理密码
    proxy: false           # 是否使用代理
    proxyType: "HTTP"      # 代理类型
    proxyHost: ""          # 代理 Host
    proxyPort: ""          # 代理 port
    proxyUsername: ""      # 代理鉴权 用户名
    proxyPassword: ""      # 代理鉴权 密码
    cacheChapterContent: false # 是否缓存章节内容
    userLimit: 50          # 用户上限，最大 50
    userBookLimit: 200     # 用户书籍上限，默认最大 200

  server:
    port: 8080             # 监听端口
    webUrl: http://localhost:${reader.server.port}    # web链接
```

使用以下格式进行配置：
```sh title="shell"
java -jar reader-*.jar --reader.app.<配置项>=
```
也就是应由`--`开头，每一级（每一个缩进为一级）为一个`.`，最后使用`=`给配置赋值，例如：
```sh title="shell"
java -jar reader-*.jar --reader.server.port=1900
```
，以上语句的意思为：启动Reader并将端口设置为1900

### 使用第三方启动器来启动Reader

以下是一个 带配置启动Reader的 Python启动器实现：

您可以通过[这里](./launcher.7z)下载，以下是其源代码：
```py title="launcher.py"
from config import *
import os

command = f"{java_path} -jar {file_name} "
args = ""
for i in config.items():
    for j in config[i[0]].items():
        if not (j[1] == ""):
            args = args + f"--reader.{i[0]}.{j[0]}={j[1]} "

full_command = command + args
print(f"[INFO]执行命令中...\n\t命令为 '{full_command}'\n正在启动中...\n\n")
os.system(full_command)
```

```py title="config.py"
java_path = "java"  # 默认为java，可指定路径
file_name = "reader-pro-3.0.4.jar"  # reader服务端文件名
config = {
    "app": {
        "storagePath": "",  # 数据存储目录
        "showUI": False,  # 是否显示UI
        "debug": False,  # 是否调试模式
        "packaged": False,  # 是否打包为客户端
        "secure": False,  # 是否需要登录鉴权，开启后将支持多用户模式
        "inviteCode": "",  # 注册邀请码，为空时则开放注册，否则注册时需要输入邀请码
        "secureKey": "",  # 管理密码，开启鉴权时，前端管理用户空间的管理密码
        "proxy": False,  # 是否使用代理
        "proxyType": "HTTP",  # 代理类型
        "proxyHost": "",  # 代理 Host
        "proxyPort": "",  # 代理 port
        "proxyUsername": "",  # 代理鉴权 用户名
        "proxyPassword": "",  # 代理鉴权 密码
        "cacheChapterContent": False,  # 是否缓存章节内容
        "userLimit": 15,  # 用户上限，最大 15
        "userBookLimit": 200  # 用户书籍上限，默认最大 200
    },
    "server": {
        "port": 8080,  # 监听端口
        "webUrl": 'http://localhost:8080'  # web链接
    }
}
```