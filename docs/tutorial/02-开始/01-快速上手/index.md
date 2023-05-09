---
title: 快速上手
---

# 前置准备

1. 一个好的大脑
2. 熟练的使用shell、cmd等命令行工具

# 环境配置

Reader的部署环境非常简单仅需要一个Java运行时就能运行（**注意：请使用`Java10`及以上的Java环境，否则可能将无法正常运行Reader！**），自行寻找合适的Java环境，或使用[Adoptium OpenJDK](https://adoptium.net/zh-CN/download/)，本文将全程使用`Adoptium OpenJDK`进行Reader服务端的搭建。

# 下载Reader服务端

从[这里](https://github.com/hectorqin/reader/releases/latest)下载Reader的最新官方构建版，您从中下载的文件名应为以下格式：
```
reader-pro-xxx.jar
```
当然，如果您为Linux或Mac用户，您可以直接下载`.tar.gz`或`.dmg`的安装包，可以以应用的方式启动Reader，本文不做赘述。

# 开始部署

1. 新建文件夹，文件夹名将为Reader的运行目录，随后将jar文件移入文件夹内

2. 进入文件夹，Linux用户右键打开终端；Windows用户按住`Shift+右键`，单击在此处打开`powershell`窗口后并键入`cmd`

3. 输入
```
java -jar reader-pro-xxx.jar
```
看到
```
██████  ███████  █████  ██████  ███████ ██████  
██   ██ ██      ██   ██ ██   ██ ██      ██   ██ 
██████  █████   ███████ ██   ██ █████   ██████  
██   ██ ██      ██   ██ ██   ██ ██      ██   ██ 
██   ██ ███████ ██   ██ ██████  ███████ ██   ██ 
                                                
```
字样后，Reader启动成功！

4. 打开 http://127.0.0.1:8080 您就可以看到您的Reader界面啦